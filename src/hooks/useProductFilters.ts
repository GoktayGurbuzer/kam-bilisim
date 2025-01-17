import { useState, useCallback, useMemo } from 'react';
import { Product } from '../types';

interface UseProductFiltersProps {
  products: Product[];
  initialFilters?: Record<string, string[]>;
  initialSort?: string;
}

export function useProductFilters({
  products,
  initialFilters = {},
  initialSort = 'featured'
}: UseProductFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>(initialFilters);
  const [sortOption, setSortOption] = useState(initialSort);

  const handleFilterChange = useCallback((groupId: string, values: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [groupId]: values
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedFilters({});
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply filters
    Object.entries(selectedFilters).forEach(([groupId, values]) => {
      if (values.length > 0) {
        result = result.filter(product => {
          const matchingAttribute = product.attributes?.find(
            attr => attr.attributeId === groupId
          );
          return matchingAttribute && values.includes(matchingAttribute.value);
        });
      }
    });

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'newest':
        result.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'popularity':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return result;
  }, [products, selectedFilters, sortOption]);

  return {
    filteredProducts,
    selectedFilters,
    sortOption,
    handleFilterChange,
    handleSortChange: setSortOption,
    clearFilters
  };
}