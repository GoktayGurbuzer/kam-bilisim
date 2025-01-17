import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetail';
import { ProductInfo } from '../components/debug/ProductInfo';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { dbHelpers } from '../lib/db';
import { Product } from '../types';

export function ProductDetailPage() {
  const { brandSlug, productSlug } = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        if (!brandSlug || !productSlug) {
          throw new Error('Brand and product slugs are required');
        }

        const data = await dbHelpers.getProductBySlug(brandSlug, productSlug);
        console.log('Product Data:', {
          content: data.content,
          specs: data.specs
        });
        setProduct(data);
      } catch (err) {
        console.error('Error loading product:', err);
        setError('Failed to load product information. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [brandSlug, productSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-red-600">
          <p>{error || 'Product not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Brands', path: '/brands' },
            { label: brandSlug || '', path: `/brands/${brandSlug}` },
            { label: product.name, path: `/brands/${brandSlug}/products/${productSlug}` },
          ]}
        />

        {/* Debug Info */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Debug Information</h2>
          <ProductInfo product={product} />
        </div>

        {/* Regular Product Display */}
        <ProductDetail product={product} />
      </div>
    </div>
  );
}