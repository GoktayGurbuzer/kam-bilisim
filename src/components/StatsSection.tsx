import React from 'react';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="relative -mt-16 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl"></div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-2">
              {stat.label}
            </div>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}