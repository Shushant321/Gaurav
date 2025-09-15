import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Zap, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Every decision is guided by clear strategy and measurable objectives.'
    },
    {
      icon: Heart,
      title: 'Authentic Passion',
      description: 'We genuinely care about your success and pour our hearts into every project.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of trends and embrace cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, not just a vendor.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Humble Beginnings',
      description: 'Started as a small creative studio with big dreams and three passionate founders.'
    },
    {
      year: '2019',
      title: 'First Major Win',
      description: 'Landed our first Fortune 500 client and doubled our team size.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Pivoted to full-service digital agency during the global pandemic.'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Won "Best Creative Agency" at the National Marketing Awards.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened offices in London and Toronto, serving clients worldwide.'
    },
    {
      year: '2023',
      title: 'Today',
      description: 'Leading brand transformation agency with 500+ successful projects.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Industries Served' },
    { number: '98%', label: 'Client Retention' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About VConnect360",
    "description": "Learn about VConnect360's mission, values, and the passionate team behind our award-winning branding and marketing services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "VConnect360",
      "foundingDate": "2018",
      "founders": [
        {
          "@type": "Person",
          "name": "Sarah Mitchell"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="About Us - Our Story & Mission"
        description="Learn about VConnect360's mission, values, and the passionate team behind our award-winning branding and marketing services."
        keywords={['about us', 'company story', 'mission', 'values', 'team']}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Brands That{' '}
              <span className="bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] bg-clip-text text-transparent">
                Matter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're not just another agency. We're your strategic partners in building 
              brands that resonate, inspire, and drive meaningful business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018 by a group of creative visionaries and strategic minds, 
                  VConnect360 emerged from a simple belief: every business deserves a brand 
                  that truly represents its values and connects with its audience.
                </p>
                <p>
                  What started as a small creative studio has evolved into a full-service 
                  branding and marketing agency. We've had the privilege of working with 
                  startups finding their voice and Fortune 500 companies reinventing themselves.
                </p>
                <p>
                  Our journey has been marked by countless late nights, creative breakthroughs, 
                  and the joy of seeing our clients succeed. Each project teaches us something new, 
                  and we bring that collective wisdom to every brand we touch.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team collaborating"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Brands Transformed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we approach 
              every project and client relationship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#1486e5] to-[#2abbd8]rounded-lg mb-4 group-hover:from-[#4f6ff2] group-hover:to-[#1fa1df] transition-all duration-300">
                  <value.icon className="h-6 w-6 text-[#4f6ff2] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader, here's how we've grown and evolved 
              to better serve our clients.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-gray-50 p-6 rounded-xl ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-2xl font-bold text-[#4f6ff2] mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] rounded-full mx-4"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's collaborate and create something extraordinary for your brand. 
              Your success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#4f6ff2] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Start Your Project
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4f6ff2] transition-all duration-300 shadow-lg"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;