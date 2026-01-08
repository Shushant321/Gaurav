import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target,
  Palette,
  BarChart3,
  ArrowRight, 
  Star, 
  Users, 
  Trophy, 
  TrendingUp,
  CheckCircle,
  Quote
} from 'lucide-react';
import SEO from '../components/SEO';

import ser1 from "../assets/ser1.jpg";
import ser2 from "../assets/ser2.jpg";
import ser6 from "../assets/ser6.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Trophy, value: '150+', label: 'Awards Won' },
    { icon: Star, value: '98%', label: 'Success Rate' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
  ];

  const services = [
    {
      icon: Target,
      title: "Public Relations",
      description: 'Building strong media connections, shaping public perception, and managing brand reputation with strategic PR campaigns.',
      features: [
        "Press Releases & Media Outreach",
        "Crisis Communication",
        "Brand Reputation Management",
        "Event PR & Media Coverage",
      ],
      image: ser1,  // imported image use karo
    },
    {
      icon: Palette,
      title: "Investor Relations",
      description: 'Creating transparent communication strategies that strengthen trust and confidence among stakeholders and investors.',
      features: [
        "Investor Presentations",
        "Annual & Financial Reports",
        "Shareholder Communication",
        "Market Insights & Analysis",
      ],
      image: ser2,
    },
    {
      icon: BarChart3,
      title: "Startup Communication",
      description:  'Helping startups build credibility, attract investors, and connect with audiences through clear and powerful communication.',
      features: [
        "Pitch Deck Design",
        "Investor Messaging",
        "Brand Narrative Development",
        "Growth Communication Strategy",
      ],
      image: ser6,
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'VConnect360 transformed our entire brand identity. The results exceeded our expectations.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCorp',
      content: 'Their strategic approach and creative excellence helped us achieve 300% growth.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Innovate Labs',
      content: 'Professional, innovative, and results-driven. VConnect360 is our trusted partner.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VConnect360",
    "url": "https://VConnect360.com",
    "logo": "https://VConnect360.com/logo.png",
    "description": "Professional branding and marketing agency specializing in brand strategy, digital marketing, and creative design.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Ave, Suite 100",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <SEO
        title="Professional Branding & Marketing Agency"
        description="Transform your business with our professional branding and marketing services. We create compelling brand experiences that drive growth and inspire audiences."
        keywords={['branding agency', 'marketing services', 'brand strategy', 'digital marketing', 'creative design']}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Craft Your Brand's{' '}
                <span className="bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] bg-clip-text text-transparent">
                  Success Story
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We transform businesses through strategic branding, innovative marketing, 
                and exceptional design that drives real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white font-semibold rounded-lg hover:from-[#03045e] hover:to-[#1fa1df] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-[#4f6ff2] hover:text-[#4f6ff2] transition-all duration-300 shadow-lg"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-r from-[#0096c7] to-[#00b4d8] rounded-full opacity-15"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1486e5] to-[#2abbd8]rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-[#4f6ff2]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive solutions 
              that elevate your brand and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4f6ff2] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#4f6ff2] font-medium group-hover:text-[#1fa1df] transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what industry leaders say about our work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8 relative"
              >
                <Quote className="h-8 w-8 text-[#4f6ff2] mb-4 opacity-60" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's create something extraordinary together. Get in touch today 
              and discover how we can elevate your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#4f6ff2] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4f6ff2] transition-all duration-300 shadow-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;