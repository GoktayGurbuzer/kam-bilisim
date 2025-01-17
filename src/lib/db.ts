import { supabase } from './supabase';
import { Brand, Product } from '../types';
import { FilterAttribute, FilterValue } from '../types/filters';
import {Order, OrderFormData} from "../types/order.ts";

// Helper functions
async function getFilteredProductIds(brandId: string, filters: FilterValue[]): Promise<string[]> {
  try {
    // Get all products for the brand first
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id')
      .eq('brand_id', brandId)
      .eq('status', 'published');

    if (productsError) throw productsError;
    if (!products?.length) return [];

    let filteredIds = products.map(p => p.id);

    // Apply each filter sequentially
    for (const filter of filters) {
      const { data: matchingProducts, error: filterError } = await supabase
        .from('product_attribute_values')
        .select('product_id')
        .eq('attribute_id', filter.attributeId)
        .in('value', filter.values)
        .in('product_id', filteredIds);

      if (filterError) throw filterError;
      if (!matchingProducts?.length) return [];

      filteredIds = matchingProducts.map(p => p.product_id);
    }

    return filteredIds;
  } catch (error) {
    console.error('Error filtering products:', error);
    throw new Error('Failed to filter products');
  }
}

export const dbHelpers = {
  async getAllBrands(): Promise<Brand[]> {
    try {
      const { data, error } = await supabase
        .from('brands')
        .select(`
          id,
          name,
          slug,
          description,
          logo_url,
          brand_categories (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data?.map(brand => ({
        id: brand.id,
        name: brand.name,
        slug: brand.slug,
        description: brand.description,
        logoUrl: brand.logo_url,
        categories: brand.brand_categories || []
      })) || [];
    } catch (error) {
      console.error('Error loading brands:', error);
      throw new Error('Failed to load brands');
    }
  },

  async getBrandBySlug(slug: string): Promise<{
    id: any;
    name: any;
    slug: any;
    description: any;
    logoUrl: any;
    categories: any
  }> {
    try {
      const { data, error } = await supabase
        .from('brands')
        .select(`
          id,
          name,
          slug,
          description,
          logo_url,
          brand_categories (
            id,
            name,
            slug
          )
        `)
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      if (!data) throw new Error('Brand not found');

      return {
        id: data.id,
        name: data.name,
        slug: data.slug,
        description: data.description,
        logoUrl: data.logo_url,
        categories: data.brand_categories || []
      };
    } catch (error) {
      console.error('Error loading brand:', error);
      throw new Error('Failed to load brand');
    }
  },

  async getProductBySlug(brandSlug: string, productSlug: string): Promise<Product> {
    try {
      // First, get the brand ID
      const { data: brandData, error: brandError } = await supabase
        .from('brands')
        .select('id')
        .eq('slug', brandSlug)
        .eq('is_active', true)
        .single();

      if (brandError || !brandData) {
        throw new Error('Brand not found');
      }

      // Then get the specific product with its images and attributes
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url,
            alt_text,
            is_primary
          ),
          product_attribute_values (
            id,
            value,
            product_attributes (
              id,
              name,
              code
            )
          )
        `)
        .eq('brand_id', brandData.id)
        .eq('slug', productSlug)
        .eq('status', 'published')
        .single();

      if (productError || !productData) {
        console.error('Product query error:', productError);
        throw new Error('Product not found');
      }

      // Transform the attributes data
      const attributes = productData.product_attribute_values?.map(av => ({
        name: av.product_attributes.name,
        code: av.product_attributes.code,
        value: av.value
      })) || [];

      // Transform the product data
      return {
        id: productData.id,
        name: productData.name,
        slug: productData.slug,
        description: productData.description,
        shortDescription: productData.short_description,
        price: productData.price,
        salePrice: productData.sale_price,
        stockStatus: productData.stock_status,
        stockQuantity: productData.stock_quantity,
        status: productData.status,
        content: productData.content,
        images: productData.product_images.map(img => ({
          id: img.id,
          url: img.url,
          altText: img.alt_text,
          isPrimary: img.is_primary
        })),
        attributes
      };
    } catch (error) {
      console.error('Error loading product:', error);
      throw error instanceof Error ? error : new Error('Failed to load product');
    }
  },

  async getProductAttributes(brandId: string): Promise<FilterAttribute[]> {
    try {
      // First, get all products for this brand
      const { data: products, error: productsError } = await supabase
        .from('products')
        .select('id')
        .eq('brand_id', brandId)
        .eq('status', 'published');

      if (productsError) throw productsError;
      if (!products?.length) return [];

      // Get all attributes that have values for these products
      const { data: attributeValues, error: valuesError } = await supabase
        .from('product_attribute_values')
        .select(`
          attribute_id,
          value,
          product_attributes (
            id,
            name,
            code,
            data_type
          )
        `)
        .in('product_id', products.map(p => p.id))
        .not('value', 'is', null);

      if (valuesError) throw valuesError;
      if (!attributeValues?.length) return [];

      // Group values by attribute
      const attributeMap = new Map<string, FilterAttribute>();
      attributeValues.forEach(av => {
        const attr = av.product_attributes;
        if (!attr) return;

        if (!attributeMap.has(attr.id)) {
          attributeMap.set(attr.id, {
            id: attr.id,
            name: attr.name,
            code: attr.code,
            dataType: attr.data_type,
            options: new Set()
          });
        }
        attributeMap.get(attr.id)?.options.add(av.value);
      });

      // Convert to array and sort options
      return Array.from(attributeMap.values()).map(attr => ({
        ...attr,
        options: Array.from(attr.options).sort()
      }));
    } catch (error) {
      console.error('Error loading product attributes:', error);
      throw new Error('Failed to load product attributes');
    }
  },

  async getFilteredProducts(brandId: string, filters: FilterValue[]): Promise<Product[]> {
    try {
      let query = supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url,
            alt_text,
            is_primary
          )
        `)
        .eq('brand_id', brandId)
        .eq('status', 'published');

      if (filters.length > 0) {
        const productIds = await getFilteredProductIds(brandId, filters);
        if (productIds.length === 0) return [];
        query = query.in('id', productIds);
      }

      const { data, error } = await query;
      if (error) throw error;

      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        shortDescription: product.short_description,
        price: product.price,
        salePrice: product.sale_price,
        stockStatus: product.stock_status,
        stockQuantity: product.stock_quantity,
        status: product.status,
        images: product.product_images.map(img => ({
          id: img.id,
          url: img.url,
          altText: img.alt_text,
          isPrimary: img.is_primary
        }))
      }));
    } catch (error) {
      console.error('Error loading products:', error);
      throw new Error('Failed to load products');
    }
  },

  async searchProducts(query: string): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          id,
          name,
          slug,
          description,
          short_description,
          price,
          sale_price,
          stock_status,
          stock_quantity,
          status,
          brand_id,
          brands!inner (
            slug
          ),
          product_images (
            id,
            url,
            alt_text,
            is_primary
          )
        `)
        .eq('status', 'published')
        .textSearch('search_vector', query)
        .limit(10);

      if (error) throw error;

      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        shortDescription: product.short_description,
        price: product.price,
        salePrice: product.sale_price,
        stockStatus: product.stock_status,
        stockQuantity: product.stock_quantity,
        status: product.status,
        brandSlug: product.brands.slug,
        images: product.product_images.map(img => ({
          id: img.id,
          url: img.url,
          altText: img.alt_text,
          isPrimary: img.is_primary
        }))
      }));
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  async createOrder(data: OrderFormData & { items: { productId: string; quantity: number; price: number; productName: string; }[] }): Promise<Order> {
    try {
      // Insert order
      const { data: orderData, error: orderError } = await supabase
          .from('orders')
          .insert({
            customer_name: data.firstName,
            customer_surname: data.lastName,
            company_name: data.companyName,
            email: data.email,
            phone: data.phone,
            total_amount: data.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          })
          .select()
          .single();

      if (orderError) throw orderError;

      // Insert order items
      const { error: itemsError } = await supabase
          .from('order_items')
          .insert(
              data.items.map(item => ({
                order_id: orderData.id,
                product_id: item.productId,
                quantity: item.quantity,
                price: item.price,
                product_name: item.productName
              }))
          );

      if (itemsError) throw itemsError;

      return {
        id: orderData.id,
        customerName: orderData.customer_name,
        customerSurname: orderData.customer_surname,
        companyName: orderData.company_name,
        email: orderData.email,
        phone: orderData.phone,
        status: orderData.status,
        totalAmount: orderData.total_amount,
        items: data.items.map(item => ({
          id: '', // We don't need the individual item IDs for the response
          orderId: orderData.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          productName: item.productName
        })),
        createdAt: orderData.created_at
      };
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },

  async getOrder(orderId: string): Promise<Order> {
    try {
      const { data: order, error: orderError } = await supabase
          .from('orders')
          .select(`
          *,
          order_items (
            id,
            product_id,
            quantity,
            price,
            product_name
          )
        `)
          .eq('id', orderId)
          .single();

      if (orderError) throw orderError;
      if (!order) throw new Error('Order not found');

      return {
        id: order.id,
        customerName: order.customer_name,
        customerSurname: order.customer_surname,
        companyName: order.company_name,
        email: order.email,
        phone: order.phone,
        status: order.status,
        totalAmount: order.total_amount,
        items: order.order_items.map(item => ({
          id: item.id,
          orderId: order.id,
          productId: item.product_id,
          quantity: item.quantity,
          price: item.price,
          productName: item.product_name
        })),
        createdAt: order.created_at
      };
    } catch (error) {
      console.error('Error loading order:', error);
      throw error;
    }
  }
};