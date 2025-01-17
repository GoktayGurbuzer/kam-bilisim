import React from 'react';
import { Filter, Calendar, Tag, Star, Circle, DollarSign, MapPin, Search, SortAsc } from 'lucide-react';
import { DateRangePicker } from './DateRangePicker';

interface FilterProps {
  onFilterChange: (type: string, value: any) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (option: string) => void;
  filters: {
    dateRange: { start: Date | null; end: Date | null };
    categories: string[];
    rating: number | null;
    status: string[];
    priceRange: { min: number; max: number };
    location: string[];
    searchQuery: string;
    sortBy: string;
  };
  categories: { id: string; name: string }[];
  locations: { id: string; name: string }[];
  onReset: () => void;
}

export function ProductFilters({
  onFilterChange,
  onSearchChange,
  onSortChange,
  filters,
  categories,
  locations,
  onReset
}: FilterProps) {
  const sortOptions = [
    { id: 'name-asc', label: 'Name (A-Z)' },
    { id: 'name-desc', label: 'Name (Z-A)' },
    { id: 'date-desc', label: 'Newest First' },
    { id: 'date-asc', label: 'Oldest First' },
    { id: 'price-asc', label: 'Price (Low to High)' },
    { id: 'price-desc', label: 'Price (High to Low)' },
    { id: 'rating-desc', label: 'Highest Rated' },
    { id: 'relevance', label: 'Relevance' }
  ];

  const statusOptions = [
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
    { id: 'published', label: 'Published' },
    { id: 'draft', label: 'Draft' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Reset All
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by keyword or title..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* Date Range */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <Calendar className="w-4 h-4 mr-2" />
          Date Range
        </label>
        <DateRangePicker
          startDate={filters.dateRange.start}
          endDate={filters.dateRange.end}
          onChange={(start, end) => onFilterChange('dateRange', { start, end })}
        />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <Tag className="w-4 h-4 mr-2" />
          Categories
        </label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category.id]
                    : filters.categories.filter(id => id !== category.id);
                  onFilterChange('categories', newCategories);
                }}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <Star className="w-4 h-4 mr-2" />
          Minimum Rating
        </label>
        <div className="flex items-center space-x-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => onFilterChange('rating', rating)}
              className={`p-2 rounded-md ${
                filters.rating === rating
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {rating}★
            </button>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <Circle className="w-4 h-4 mr-2" />
          Status
        </label>
        <div className="space-y-2">
          {statusOptions.map((status) => (
            <label key={status.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.status.includes(status.id)}
                onChange={(e) => {
                  const newStatus = e.target.checked
                    ? [...filters.status, status.id]
                    : filters.status.filter(id => id !== status.id);
                  onFilterChange('status', newStatus);
                }}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <DollarSign className="w-4 h-4 mr-2" />
          Price Range
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={filters.priceRange.min}
            onChange={(e) => onFilterChange('priceRange', { 
              ...filters.priceRange, 
              min: Number(e.target.value) 
            })}
            placeholder="Min"
            className="w-24 px-3 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            value={filters.priceRange.max}
            onChange={(e) => onFilterChange('priceRange', { 
              ...filters.priceRange, 
              max: Number(e.target.value) 
            })}
            placeholder="Max"
            className="w-24 px-3 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <MapPin className="w-4 h-4 mr-2" />
          Location
        </label>
        <div className="space-y-2">
          {locations.map((location) => (
            <label key={location.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.location.includes(location.id)}
                onChange={(e) => {
                  const newLocations = e.target.checked
                    ? [...filters.location, location.id]
                    : filters.location.filter(id => id !== location.id);
                  onFilterChange('location', newLocations);
                }}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{location.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <SortAsc className="w-4 h-4 mr-2" />
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}