import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight, MessageSquare, HeadphonesIcon, Send } from 'lucide-react';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our experts",
      action: "+90 216 909 95 26",
      link: "tel:+902169099526",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      action: "bilgi@kambilisim.com",
      link: "mailto:bilgi@kambilisim.com",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const officeLocations = [
    {
      city: "Istanbul",
      address: "123 Tech Street, Business District",
      phone: "+90 216 909 95 26",
      email: "istanbul@kambilisim.com",
      hours: "Monday - Friday: 9:00 - 18:00"
    },
    {
      city: "Ankara",
      address: "456 Innovation Avenue, Tech Park",
      phone: "+90 312 XXX XX XX",
      email: "ankara@kambilisim.com",
      hours: "Monday - Friday: 9:00 - 18:00"
    }
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
              Let's Connect
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get in touch with our experts for personalized IT solutions that drive your business forward
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={`${method.bgColor} rounded-full w-12 h-12 flex items-center justify-center mb-6 ${method.color}`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              {method.link ? (
                <a
                  href={method.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  {method.action}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              ) : (
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  {method.action}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="space-y-8">
              {officeLocations.map((office, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">{office.city} Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Integration Placeholder */}
            <div className="mt-8 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our technical support team is available 24/7 to help you with any questions
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+902169099526"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
            >
              <HeadphonesIcon className="w-5 h-5 mr-2" />
              Call Support Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}