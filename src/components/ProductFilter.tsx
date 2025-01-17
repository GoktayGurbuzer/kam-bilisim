import React from 'react';
import { Search } from 'lucide-react';
import { Category } from '../types';

interface FilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
  attributes?: {
    processor?: string[];
    memory?: string[];
    storage?: string[];
    os?: string[];
  };
  onAttributeChange?: (type: string, value: string) => void;
}

export function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  attributes,
  onAttributeChange
}: FilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Search</h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full text-left px-3 py-2 rounded-md ${
              !selectedCategory
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedCategory === category.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div>
              <label className="text-sm text-gray-600">Min</label>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })
                }
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Max</label>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })
                }
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Attributes */}
      {attributes && Object.entries(attributes).map(([key, values]) => (
        <div key={key}>
          <h3 className="text-lg font-semibold mb-3 capitalize">
            {key.replace('_', ' ')}
          </h3>
          <div className="space-y-2">
            {values.map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => onAttributeChange?.(key, value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{value}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}