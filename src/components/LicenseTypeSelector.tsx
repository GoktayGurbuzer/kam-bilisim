import React from 'react';
import { licenseTypes } from '../data';

interface LicenseTypeSelectorProps {
  selectedType: string | null;
  onSelectType: (type: string) => void;
  show: boolean;
}

export function LicenseTypeSelector({
  selectedType,
  onSelectType,
  show,
}: LicenseTypeSelectorProps) {
  if (!show) return null;

  return (
    <div className="flex gap-2">
      {licenseTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelectType(type.id)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
            ${
              selectedType === type.id
                ? 'bg-green-600 text-white'
                : 'bg-green-50 text-green-700 hover:bg-green-100'
            }`}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}