import { useState, useCallback } from 'react';

interface Filters {
  dateRange: { start: Date | null; end: Date | null };
  categories: string[];
  rating: number | null;
  status: string[];
  priceRange: { min: number; max: number };
  location: string[];
  searchQuery: string;
  sortBy: string;
}

const initialFilters: Filters = {
  dateRange: { start: null, end: null },
  categories: [],
  rating: null,
  status: [],
  priceRange: { min: 0, max: 0 },
  location: [],
  searchQuery: '',
  sortBy: 'relevance'
};

export function useFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = useCallback((type: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: query
    }));
  }, []);

  const handleSortChange = useCallback((option: string) => {
    setFilters(prev => ({
      ...prev,
      sortBy: option
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return {
    filters,
    handleFilterChange,
    handleSearchChange,
    handleSortChange,
    resetFilters
  };
}