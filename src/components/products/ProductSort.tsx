import React from 'react';
import { ArrowDownAZ } from 'lucide-react';

export type SortOption = {
  id: string;
  label: string;
};

interface ProductSortProps {
  options: SortOption[];
  selectedOption: string;
  onSortChange: (optionId: string) => void;
}

export function ProductSort({ options, selectedOption, onSortChange }: ProductSortProps) {
  return (
    <div className="flex items-center space-x-2">
      <ArrowDownAZ className="w-5 h-5 text-gray-600" />
      <select
        value={selectedOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}