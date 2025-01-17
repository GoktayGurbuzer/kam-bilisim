import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';

interface ProductGridProps {
  products: Product[];
  brandSlug: string;
}

export function ProductGrid({ products, brandSlug }: ProductGridProps) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products found for this brand.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const primaryImage = product.images?.find(img => img.isPrimary) || product.images?.[0];
        
        return (
          <div
            key={product.id}
            onClick={() => navigate(`/brands/${brandSlug}/products/${product.slug}`)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={primaryImage?.url}
                alt={primaryImage?.altText || product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.shortDescription}</p>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  {product.salePrice ? (
                    <>
                      <span className="text-lg font-bold text-gray-900">
                        ${product.salePrice.toLocaleString()}
                      </span>
                      <span className="block text-sm text-gray-500 line-through">
                        ${product.price.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                  )}
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}