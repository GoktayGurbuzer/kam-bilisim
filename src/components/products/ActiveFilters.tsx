import React from 'react';
import { X } from 'lucide-react';

interface ActiveFiltersProps {
  filters: {
    groupId: string;
    groupLabel: string;
    values: string[];
  }[];
  onRemoveFilter: (groupId: string, value: string) => void;
  onClearAll: () => void;
}

export function ActiveFilters({ filters, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-700">Active Filters:</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map(({ groupId, groupLabel, values }) => (
          values.map(value => (
            <span
              key={`${groupId}-${value}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              <span className="mr-1 font-medium">{groupLabel}:</span>
              {value}
              <button
                onClick={() => onRemoveFilter(groupId, value)}
                className="ml-2 hover:text-blue-600"
                aria-label={`Remove ${groupLabel} filter: ${value}`}
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))
        ))}
      </div>
    </div>
  );
}