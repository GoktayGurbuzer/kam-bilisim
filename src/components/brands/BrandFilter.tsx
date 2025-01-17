import React from 'react';
import { X } from 'lucide-react';
import { FilterAttribute, FilterValue, ActiveFilter } from '../../types/filters';

interface BrandFilterProps {
  attributes: FilterAttribute[];
  activeFilters: ActiveFilter[];
  onFilterChange: (attributeId: string, values: string[]) => void;
  onClearFilters: () => void;
  loading?: boolean;
}

export function BrandFilter({
  attributes,
  activeFilters,
  onFilterChange,
  onClearFilters,
  loading = false
}: BrandFilterProps) {
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-6 bg-gray-200 rounded w-32"></div>
          ))}
        </div>
      </div>
    );
  }

  if (attributes.length === 0) {
    return null;
  }

  // Add "All" filter at the beginning
  const allFilter = {
    id: 'all',
    name: 'All Products',
    code: 'all',
    dataType: 'text' as const,
    options: ['all']
  };

  const allAttributes = [allFilter, ...attributes];

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700">Active Filters</h3>
            <button
              onClick={onClearFilters}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map(filter => (
              filter.values.map(value => (
                <span
                  key={`${filter.attributeId}-${value}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  <span className="mr-1 font-medium">{filter.attributeName}:</span>
                  {value}
                  <button
                    onClick={() => {
                      const newValues = filter.values.filter(v => v !== value);
                      onFilterChange(filter.attributeId, newValues);
                    }}
                    className="ml-2 hover:text-blue-600"
                    aria-label={`Remove ${filter.attributeName} filter: ${value}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))
            ))}
          </div>
        </div>
      )}

      {/* Filter Groups */}
      {allAttributes.map(attribute => (
        <div key={attribute.id} className="border-t pt-4">
          <h3 className="font-medium mb-3">{attribute.name}</h3>
          <div className="space-y-2">
            {attribute.options?.map(option => {
              const isSelected = activeFilters.some(
                filter => filter.attributeId === attribute.id && filter.values.includes(option)
              );

              return (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => {
                      if (attribute.id === 'all') {
                        // Clear all other filters when "All" is selected
                        if (e.target.checked) {
                          onFilterChange('all', ['all']);
                        } else {
                          onFilterChange('all', []);
                        }
                      } else {
                        // Clear "All" filter when other filters are selected
                        const currentFilter = activeFilters.find(
                          f => f.attributeId === attribute.id
                        );
                        const currentValues = currentFilter?.values || [];
                        const newValues = e.target.checked
                          ? [...currentValues, option]
                          : currentValues.filter(v => v !== option);
                        
                        // Remove "All" filter if it exists
                        const allFilter = activeFilters.find(f => f.attributeId === 'all');
                        if (allFilter) {
                          onFilterChange('all', []);
                        }
                        
                        onFilterChange(attribute.id, newValues);
                      }
                    }}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {attribute.id === 'all' ? 'Show All Products' : option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}