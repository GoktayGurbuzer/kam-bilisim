import React from 'react';
import { Server, Shield, Gauge, Settings, CheckCircle2, ArrowRight, Users, Globe, Zap, Lock } from 'lucide-react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export function DedicatedServerPage() {
  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Dedicated Hardware",
      description: "Exclusive access to physical server resources"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Advanced security measures and DDoS protection"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "High Performance",
      description: "Superior performance with dedicated resources"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Full Control",
      description: "Complete administrative access and customization"
    }
  ];

  const servers = [
    {
      name: "Pro Server",
      specs: {
        cpu: "Intel Xeon E-2276G",
        cores: "6 Cores / 12 Threads",
        ram: "32GB DDR4 ECC",
        storage: "2 × 1TB NVMe SSD",
        bandwidth: "Unlimited @ 1Gbps"
      },
      price: "199.99",
      highlight: false
    },
    {
      name: "Enterprise Server",
      specs: {
        cpu: "Intel Xeon Gold 6230R",
        cores: "26 Cores / 52 Threads",
        ram: "128GB DDR4 ECC",
        storage: "4 × 2TB NVMe SSD",
        bandwidth: "Unlimited @ 10Gbps"
      },
      price: "499.99",
      highlight: true
    },
    {
      name: "Ultimate Server",
      specs: {
        cpu: "2× Intel Xeon Gold 6230R",
        cores: "52 Cores / 104 Threads",
        ram: "256GB DDR4 ECC",
        storage: "8 × 2TB NVMe SSD",
        bandwidth: "Unlimited @ 25Gbps"
      },
      price: "999.99",
      highlight: false
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mt-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Enterprise-Grade Dedicated Servers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Unleash the full potential of your applications with our high-performance dedicated servers
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="tel:+902169099526"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Configure Server
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-600" />
              <span>1000+ Active Servers</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>Global Network</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Zap className="w-5 h-5 text-blue-600" />
              <span>100% Network Uptime</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Lock className="w-5 h-5 text-blue-600" />
              <span>DDoS Protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Server Plans */}
        <div className="relative bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-4">Choose Your Server</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Select the perfect server configuration for your needs. All servers include enterprise-grade hardware and 24/7 support.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {servers.map((server, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${
                    server.highlight ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  {server.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{server.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-6">
                      ${server.price}
                      <span className="text-lg text-gray-500 font-normal">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {Object.entries(server.specs).map(([key, value]) => (
                        <li key={key} className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      server.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Configure & Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Configuration?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our server experts for a personalized configuration that meets your specific requirements.
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