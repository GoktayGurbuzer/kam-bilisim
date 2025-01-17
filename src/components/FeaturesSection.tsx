import React, { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export function FeaturesSection({ title, subtitle, features }: FeaturesSectionProps) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-rotate-slow"></div>
        <div
          className="absolute top-1/4 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-rotate-slow"
          style={{ animationDelay: '-5s' }}
        ></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-wave"></div>
      </div>

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}