import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

export function AboutSection({
  title,
  subtitle,
  description,
  imageUrl,
  ctaText,
  ctaLink
}: AboutSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-float blur-3xl" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-blue-600 font-semibold mb-2">{subtitle}</h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors group"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl filter blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={imageUrl}
              alt="About Us"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}