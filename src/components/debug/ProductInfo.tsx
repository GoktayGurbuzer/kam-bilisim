import React from 'react';

interface ProductInfoProps {
  product: any;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-auto">
      <div className="mb-4">
        <h3 className="text-white font-bold mb-2">Raw Product Data:</h3>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify({
            id: product.id,
            name: product.name,
            content: product.content || null,
            specs: product.specs || null,
            schema_markup: product.schema_markup || null
          }, null, 2)}
        </pre>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <h3 className="text-white font-bold mb-2">Content Length:</h3>
        <p>{product.content ? product.content.length : 0} characters</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <h3 className="text-white font-bold mb-2">Content Preview:</h3>
        <p>{product.content ? product.content.substring(0, 100) + '...' : 'No content'}</p>
      </div>
    </div>
  );
}