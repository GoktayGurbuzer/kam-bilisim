import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
}

export function Counter({
  value,
  onChange,
  min = 0,
  max = Infinity,
  step = 1,
  label,
  disabled = false
}: CounterProps) {
  const handleIncrement = () => {
    const newValue = Math.min(value + step, max);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (isNaN(newValue)) return;
    
    const clampedValue = Math.max(min, Math.min(newValue, max));
    onChange(clampedValue);
  };

  return (
    <div className="inline-flex flex-col items-start">
      {label && (
        <label 
          htmlFor="counter-input"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || value <= min}
          className="p-2 text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
          aria-label="Decrease value"
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          id="counter-input"
          type="number"
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
          aria-label={label || "Counter value"}
        />
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || value >= max}
          className="p-2 text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
          aria-label="Increase value"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      {/* Optional helper text for min/max values */}
      {(min !== 0 || max !== Infinity) && (
        <p className="text-xs text-gray-500 mt-1">
          Min: {min}, Max: {max}
        </p>
      )}
    </div>
  );
}