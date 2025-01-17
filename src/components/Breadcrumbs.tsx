import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Function to format brand names
  const formatBrandName = (label: string): string => {
    // Special case for brand names
    if (label.toLowerCase() === 'asus') {
      return 'Asus';
    }
    if (label.toLowerCase() === 'microsoft') {
      return 'Microsoft'
    }
    if (label.toLowerCase() === 'eset') {
      return 'Eset'
    }
    return label;
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {index === items.length - 1 ? (
            <span className="font-medium text-gray-900">
              {formatBrandName(item.label)}
            </span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-blue-600 hover:underline"
            >
              {formatBrandName(item.label)}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}