import { supabase } from '../supabase';
import { Brand, Product, FilterAttribute, FilterValue } from '../../types';

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

export const brandHelpers = {
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

  async getBrandBySlug(slug: string): Promise<Brand> {
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
  }
};