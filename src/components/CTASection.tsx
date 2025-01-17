import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonLink
}: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-blue-100 mb-8">{description}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}