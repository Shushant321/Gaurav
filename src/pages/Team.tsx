import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award,
  Users,
  Briefcase,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in brand strategy and business development.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Brand Strategy', 'Business Development', 'Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@brandcraft.com'
      }
    },
    {
      name: 'David Chen',
      role: 'Creative Director',
      bio: 'Award-winning designer passionate about creating memorable brand experiences.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Visual Design', 'Brand Identity', 'Art Direction'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@brandcraft.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Strategy',
      bio: 'Strategic thinker who transforms complex challenges into clear solutions.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Strategic Planning', 'Market Research', 'Analytics'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@brandcraft.com'
      }
    },
    {
      name: 'Michael Thompson',
      role: 'Digital Marketing Lead',
      bio: 'Data-driven marketer who creates campaigns that convert and engage.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Digital Marketing', 'SEO/SEM', 'Social Media'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@brandcraft.com'
      }
    },
    {
      name: 'Jessica Wu',
      role: 'UX/UI Designer',
      bio: 'User-centered designer creating intuitive and beautiful digital experiences.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['UX Design', 'UI Design', 'User Research'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jessica@brandcraft.com'
      }
    },
    {
      name: 'Ryan O\'Connor',
      role: 'Brand Consultant',
      bio: 'Strategic consultant helping brands find their voice and connect with audiences.',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Brand Consulting', 'Positioning', 'Messaging'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ryan@brandcraft.com'
      }
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Briefcase, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Collaboration',
      description: 'We believe the best work comes from diverse perspectives working together.'
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.'
    },
    {
      title: 'Excellence',
      description: 'We set high standards and strive to exceed expectations in everything we do.'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BrandCraft",
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.bio,
      "image": member.image,
      "knowsAbout": member.expertise,
      "email": member.social.email
    }))
  };

  return (
    <>
      <SEO
        title="Our Team - Meet the Experts Behind BrandCraft"
        description="Meet our talented team of strategists, designers, and marketers who are passionate about creating exceptional brand experiences."
        keywords={['our team', 'brand experts', 'marketing professionals', 'creative team']}
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
              Meet Our{' '}
              <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming your brand 
              and driving your business forward.
            </p>
          </motion.div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-100 to-amber-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-teal-600" />
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

      {/* Team Members */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts who guide our mission to create 
              exceptional brand experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture.
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
                className="text-center"
              >
                <div className="bg-gradient-to-r from-teal-100 to-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full"></div>
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

      {/* Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented individuals who share our passion 
                for exceptional work and innovative solutions.
              </p>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Current Opportunities
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Senior Brand Strategist</h4>
                      <p className="text-gray-600">Full-time • Remote</p>
                    </div>
                    <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                      Apply
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Digital Marketing Specialist</h4>
                      <p className="text-gray-600">Full-time • New York</p>
                    </div>
                    <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
                      Apply
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Don't see a position that fits? We'd still love to hear from you!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-amber-500 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-amber-600 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Us Your Resume
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;