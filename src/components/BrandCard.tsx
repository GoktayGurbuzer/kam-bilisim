import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface BrandCardProps {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  path: string;
  gradient: string;
  onClick: (path: string) => void;
}

export function BrandCard({
  id,
  name,
  description,
  icon,
  path,
  gradient,
  onClick
}: BrandCardProps) {
  return (
    <div
      onClick={() => onClick(path)}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      <div className="relative p-8">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-full p-8 shadow-md group-hover:shadow-xl transition-shadow duration-500">
              <div className="text-blue-600 transform group-hover:scale-110 transition-transform duration-500 animate-float">
                {icon}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 text-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>

          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium">
            <span className="transform group-hover:translate-x-[-4px] transition-transform duration-300">
              Ürünleri Keşfedin
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
    </div>
  );
}