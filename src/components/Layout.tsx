import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  LifeBuoy,
  Package,
} from 'lucide-react';
import { Footer } from './Footer';
import { SearchOverlay } from './search/SearchOverlay';
import { CartDrawer } from './cart/CartDrawer';
import { useCart } from '../contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, totalItems } = useCart();

  const navigation = [
    { name: 'Anasayfa', href: '/' },
    {
      name: 'Markalar',
      href: '/brands',
    },
    {
      name: 'Hizmetlerimiz',
      href: '/services',
      submenu: [
        { name: 'Kurumsal E-Posta', href: '/services/email' },
        { name: 'Sanal Sunucu', href: '/services/virtual-server' },
        { name: 'Kiralık Sunucu', href: '/services/dedicated-server' },
        { name: 'Web Hosting', href: '/services/hosting' },
      ],
    },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="hidden sm:flex items-center space-x-6">
              <a 
                href="tel:+902169099526" 
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+90 216 909 95 26</span>
              </a>
              <a 
                href="mailto:bilgi@kambilisim.com" 
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">bilgi@kambilisim.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                to="/support" 
                className="flex items-center space-x-1 text-sm font-medium hover:text-blue-400 transition-colors"
              >
                <LifeBuoy className="h-4 w-4" />
                <span>Technical Support</span>
              </Link>
              <Link 
                to="/track-order" 
                className="flex items-center space-x-1 text-sm font-medium hover:text-blue-400 transition-colors"
              >
                <Package className="h-4 w-4" />
                <span>Track Your Order</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Kam Informatics
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:ml-10 md:space-x-4">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center ${
                        isActive(item.href)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </Link>
                    {item.submenu && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className={`block px-4 py-2 text-sm ${
                              location.pathname === subitem.href
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100"
                >
                  <Search className="h-5 w-5" />
                </button>
                <SearchOverlay 
                  isOpen={isSearchOpen} 
                  onClose={() => setIsSearchOpen(false)} 
                />
              </div>

              {/* Cart */}
              <button 
                onClick={toggleCart}
                className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Account */}
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5" />
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.href}
                        className={`block px-3 py-2 rounded-md text-sm font-medium ${
                          location.pathname === subitem.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}