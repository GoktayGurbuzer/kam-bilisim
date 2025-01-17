import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { dbHelpers } from '../../lib/db';
import { Product } from '../../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchProducts = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const data = await dbHelpers.searchProducts(query);
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleProductClick = (brandSlug: string, productSlug: string) => {
    navigate(`/brands/${brandSlug}/products/${productSlug}`);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Search Panel */}
      <div className="relative min-h-screen">
        <div className="bg-white shadow-xl transform transition-all py-8">
          <div className="max-w-3xl mx-auto px-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 text-lg border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
              <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <button
                onClick={onClose}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Results */}
            <div className="mt-8">
              {loading ? (
                <div className="flex justify-center">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : query.trim() ? (
                results.length > 0 ? (
                  <div className="space-y-6">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.brandSlug, product.slug)}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <img
                          src={product.images.find(img => img.isPrimary)?.url || product.images[0]?.url}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.shortDescription}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No products found</p>
                  </div>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}