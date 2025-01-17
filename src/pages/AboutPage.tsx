import React from 'react';
import { Award, Users, Building, CheckCircle2, Globe, Zap, Shield, ArrowRight, Trophy, Target, Lightbulb, Rocket } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { value: '2010', label: 'Founded', description: 'Years of excellence in IT solutions' },
    { value: '10K+', label: 'Clients', description: 'Trusted by businesses worldwide' },
    { value: '50+', label: 'Experts', description: 'Certified IT professionals' },
    { value: '99.9%', label: 'Uptime', description: 'Guaranteed service reliability' }
  ];

  const values = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every solution we deliver, ensuring the highest quality standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, driving our innovation and service delivery."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously evolve and adapt to bring the latest technology solutions to our clients."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth",
      description: "We're committed to growing alongside our clients, helping them achieve their business goals."
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small IT consultancy with big dreams'
    },
    {
      year: '2015',
      title: 'Major Expansion',
      description: 'Expanded services to include cloud solutions and enterprise IT'
    },
    {
      year: '2018',
      title: 'Global Reach',
      description: 'Established presence in multiple countries'
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as a leading IT solutions provider'
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
              Transforming Business Through Technology
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Since 2010, we've been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals.
            </p>
            <a
              href="tel:+902169099526"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
            >
              Connect With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape how we deliver value to our clients
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our journey has been defined by continuous growth and innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the experts who drive our vision and ensure excellence in everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              role: "CEO",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            },
            {
              name: "Sarah Johnson",
              role: "Technical Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            },
            {
              name: "Michael Chen",
              role: "Operations Manager",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            }
          ].map((member) => (
            <div key={member.name} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
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