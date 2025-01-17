import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonLink: string;
  image?: string;
}

export function HeroSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  image
}: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        {image && (
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        )}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl text-blue-100">
              {description}
            </p>
            <div className="flex space-x-4">
              <Link
                to={primaryButtonLink}
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={secondaryButtonLink}
                className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-ping-slow"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                alt="Technology Innovation"
                className="relative rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}