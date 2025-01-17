import React from 'react';

interface FilterStatsProps {
  totalProducts: number;
  filteredCount: number;
}

export function FilterStats({ totalProducts, filteredCount }: FilterStatsProps) {
  return (
    <div className="text-sm text-gray-600">
      {filteredCount === totalProducts ? (
        <p>Showing all {totalProducts} products</p>
      ) : (
        <p>
          Showing {filteredCount} of {totalProducts} products
        </p>
      )}
    </div>
  );
}