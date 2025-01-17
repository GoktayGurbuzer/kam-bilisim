import { supabase } from '../supabase';
import { Product } from '../../types';

export const productHelpers = {
  async getProductBySlug(brandSlug: string, productSlug: string): Promise<Product> {
    try {
      // First get brand ID
      const { data: brandData, error: brandError } = await supabase
        .from('brands')
        .select('id')
        .eq('slug', brandSlug)
        .eq('is_active', true)
        .single();

      if (brandError || !brandData) {
        throw new Error('Brand not found');
      }

      // Then get the product with all details
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select(`
          id,
          name,
          slug,
          description,
          short_description,
          content,
          schema_markup,
          price,
          sale_price,
          stock_status,
          stock_quantity,
          status,
          product_images (
            id,
            url,
            alt_text,
            is_primary
          ),
          product_attribute_values (
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

      if (productError) {
        console.error('Product query error:', productError);
        throw new Error('Product not found');
      }

      if (!productData) {
        throw new Error('Product data is null');
      }

      // Log raw data for debugging
      console.log('Raw product data:', JSON.stringify(productData, null, 2));

      // Transform attributes
      const attributes = productData.product_attribute_values?.map(av => ({
        name: av.product_attributes.name,
        code: av.product_attributes.code,
        value: av.value
      })) || [];

      // Parse specifications from schema_markup
      let specs: Record<string, string> = {};
      if (productData.schema_markup && typeof productData.schema_markup === 'object') {
        const markup = productData.schema_markup as Record<string, any>;
        if (markup.specifications && typeof markup.specifications === 'object') {
          specs = markup.specifications;
        }
      }

      // Transform product data
      const product: Product = {
        id: productData.id,
        name: productData.name,
        slug: productData.slug,
        description: productData.description || '',
        shortDescription: productData.short_description || '',
        content: productData.content || '',
        price: productData.price,
        salePrice: productData.sale_price,
        stockStatus: productData.stock_status,
        stockQuantity: productData.stock_quantity,
        status: productData.status,
        specs,
        images: (productData.product_images || []).map(img => ({
          id: img.id,
          url: img.url,
          altText: img.alt_text || '',
          isPrimary: img.is_primary
        })),
        attributes
      };

      // Log transformed data for debugging
      console.log('Transformed product:', JSON.stringify(product, null, 2));

      return product;
    } catch (error) {
      console.error('Error loading product:', error);
      throw error instanceof Error ? error : new Error('Failed to load product');
    }
  }
};