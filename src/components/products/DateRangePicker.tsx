import React from 'react';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: Date | null, end: Date | null) => void;
}

export function DateRangePicker({ startDate, endDate, onChange }: DateRangePickerProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="date"
        value={startDate?.toISOString().split('T')[0] || ''}
        onChange={(e) => {
          const date = e.target.value ? new Date(e.target.value) : null;
          onChange(date, endDate);
        }}
        className="px-3 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <span className="text-gray-500">to</span>
      <input
        type="date"
        value={endDate?.toISOString().split('T')[0] || ''}
        onChange={(e) => {
          const date = e.target.value ? new Date(e.target.value) : null;
          onChange(startDate, date);
        }}
        className="px-3 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}