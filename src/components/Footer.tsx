import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Server,
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  const navigation = {
    products: [
      { name: 'Kurumsal E-posta', href: '/services/email' },
      { name: 'Sanal Sunucu', href: '/services/virtual-server' },
      { name: 'Kiralık Sunucu', href: '/services/dedicated-server' },
      { name: 'Web Hosting', href: '/services/hosting' },
    ],
    company: [
      { name: 'Hakkımızda', href: '/about' },
      { name: 'Kariyer', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'İletişim', href: '/contact' },
    ],
    resources: [
      { name: 'Destek Merkezi', href: '/support' },
      { name: 'Bilgi Bankası', href: '/knowledge-base' },
      { name: 'API Dokümantasyon', href: '/api-docs' },
      { name: 'Durum Sayfası', href: '/status' },
    ],
    legal: [
      { name: 'Gizlilik Politikası', href: '/privacy' },
      { name: 'Kullanım Şartları', href: '/terms' },
      { name: 'KVKK', href: '/gdpr' },
      { name: 'Site Haritası', href: '/sitemap' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                Kam Bilişim
              </Link>
              <p className="mt-4 text-gray-400">
                2021'den beri işletmelere özel teknoloji çözümleri sunuyoruz.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Server className="w-5 h-5 mr-2 text-blue-400" />
              Hizmetlerimiz
            </h3>
            <ul className="space-y-4">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+902169099526"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  +90 216 909 95 26
                </a>
              </li>
              <li>
                <a
                  href="mailto:bilgi@kambilisim.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  bilgi@kambilisim.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Tech Street,
                  <br />
                  Business District
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">
              Bültenimize Abone Olun
            </h3>
            <p className="text-gray-400 mb-6">
              En son haberler, güncellemeler ve özel teklifler için abone olun
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kam Bilişim. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}