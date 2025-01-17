import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Package, Shield } from 'lucide-react';
import { Brand } from '../../types';

interface BrandGridProps {
  brands: Brand[];
  loading: boolean;
  error: string | null;
}

export function BrandGrid({ brands, loading, error }: BrandGridProps) {
  const navigate = useNavigate();

  const getBrandIcon = (brandSlug: string) => {
    switch (brandSlug) {
      case 'asus':
        return <Monitor className="w-12 h-12" />;
      case 'microsoft':
        return <Package className="w-12 h-12" />;
      case 'eset':
        return <Shield className="w-12 h-12" />;
      default:
        return <Package className="w-12 h-12" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-2 text-gray-600">Loading brands...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12 text-red-600">
        <span className="mr-2">⚠️</span>
        {error}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {brands.map((brand) => (
        <div
          key={brand.id}
          onClick={() => navigate(`/brands/${brand.slug}`)}
          className="group relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          role="button"
          tabIndex={0}
        >
          <div className="p-8">
            {/* Header with icon and title */}
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                {brand.name}
              </h2>
              <div className="bg-blue-100 rounded-full p-3 text-blue-600 transform transition-transform group-hover:scale-110 ml-4 flex-shrink-0">
                {getBrandIcon(brand.slug)}
              </div>
            </div>

            <p className="text-gray-600 mb-6 line-clamp-3">
              {brand.description}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {brand.categories.map((category) => (
                <span
                  key={`${brand.id}-${category.id}`}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {category.name}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
              View Products
              <Package className="ml-2 w-5 h-5" />
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
}