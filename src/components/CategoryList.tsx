import React from 'react';
import { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

export function CategoryList({ categories, onSelectCategory, selectedCategory }: CategoryListProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedCategory?.id === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}