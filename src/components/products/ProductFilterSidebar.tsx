import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

interface ProductFilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, values: string[]) => void;
  onClearFilters: () => void;
}

export function ProductFilterSidebar({
  filters,
  selectedFilters,
  onFilterChange,
  onClearFilters
}: ProductFilterSidebarProps) {
  const hasActiveFilters = Object.values(selectedFilters).some(values => values.length > 0);

  const handleCheckboxChange = (groupId: string, optionId: string, checked: boolean) => {
    const currentValues = selectedFilters[groupId] || [];
    const newValues = checked
      ? [...currentValues, optionId]
      : currentValues.filter(v => v !== optionId);
    onFilterChange(groupId, newValues);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filters.map((group) => (
          <div key={group.id} className="border-t pt-4">
            <h3 className="font-medium mb-3">{group.label}</h3>
            <div className="space-y-2">
              {group.options.map((option) => (
                <label key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters[group.id]?.includes(option.id) || false}
                    onChange={(e) => handleCheckboxChange(group.id, option.id, e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{option.label}</span>
                  {option.count !== undefined && (
                    <span className="ml-auto text-sm text-gray-500">({option.count})</span>
                  )}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}