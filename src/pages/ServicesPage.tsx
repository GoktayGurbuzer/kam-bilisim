import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Server, HardDrive, Globe, ArrowRight, Shield, Zap, Users, CheckCircle2 } from 'lucide-react';

export function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'email',
      name: 'Corporate Email Service',
      description: 'Professional email hosting solutions with enterprise-grade security and reliability',
      icon: <Mail className="w-12 h-12" />,
      path: '/services/email',
      features: ['Custom Domain Email', 'Advanced Spam Protection', '99.9% Uptime', '24/7 Support'],
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 'virtual-server',
      name: 'Virtual Server',
      description: 'High-performance VPS solutions with guaranteed resources and full root access',
      icon: <Server className="w-12 h-12" />,
      path: '/services/virtual-server',
      features: ['Dedicated vCPUs', 'NVMe SSD Storage', 'DDoS Protection', 'Instant Deployment'],
      gradient: 'from-blue-700 to-blue-800'
    },
    {
      id: 'dedicated-server',
      name: 'Dedicated Server',
      description: 'Enterprise-grade dedicated servers with unmatched performance and control',
      icon: <HardDrive className="w-12 h-12" />,
      path: '/services/dedicated-server',
      features: ['Enterprise Hardware', 'Full Root Access', 'Custom Configuration', 'Hardware Monitoring'],
      gradient: 'from-blue-800 to-blue-900'
    },
    {
      id: 'hosting',
      name: 'Web Hosting',
      description: 'Fast and secure web hosting with advanced features and 99.9% uptime guarantee',
      icon: <Globe className="w-12 h-12" />,
      path: '/services/hosting',
      features: ['Free SSL Certificate', 'Daily Backups', 'Global CDN', '1-Click Installs'],
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '10,000+', label: 'Active Clients' },
    { icon: <Shield className="w-6 h-6" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Zap className="w-6 h-6" />, value: '24/7', label: 'Expert Support' },
    { icon: <Globe className="w-6 h-6" />, value: '5+', label: 'Global Locations' }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Enterprise IT Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to power your business success
            </p>
            <a
              href="tel:+902169099526"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
            >
              Speak with an Expert
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(service.path)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="relative bg-blue-50 rounded-full p-4 text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our experts now for personalized solutions and special offers tailored to your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+902169099526"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
            >
              Call Now: +90 216 909 95 26
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}