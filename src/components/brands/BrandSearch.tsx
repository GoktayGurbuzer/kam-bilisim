import React from 'react';
import { Search } from 'lucide-react';

interface BrandSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BrandSearch({ value, onChange }: BrandSearchProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search brands..."
          className="w-full px-6 py-4 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white placeholder-blue-100 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
        />
        <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-blue-100" />
      </div>
    </div>
  );
}