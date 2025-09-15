import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowRight,
  Filter,
  Award,
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'identity', label: 'Identity' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart Innovation',
      category: 'branding',
      tags: ['Brand Strategy', 'Visual Identity', 'Guidelines'],
      description: 'Complete brand transformation for a cutting-edge tech startup, including strategy, visual identity, and brand guidelines.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        engagement: '+250%',
        recognition: '+180%',
        conversion: '+90%'
      },
      year: '2023',
      client: 'TechStart Inc.',
      featured: true
    },
    {
      id: 2,
      title: 'EcoLux Sustainable Living',
      category: 'web-design',
      tags: ['Web Design', 'E-commerce', 'UX/UI'],
      description: 'Modern e-commerce platform design for sustainable living products with focus on user experience and conversion optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        sales: '+320%',
        traffic: '+150%',
        retention: '+200%'
      },
      year: '2023',
      client: 'EcoLux',
      featured: true
    },
    {
      id: 3,
      title: 'Urban Fitness Revolution',
      category: 'marketing',
      tags: ['Digital Marketing', 'Social Media', 'Content'],
      description: 'Comprehensive digital marketing campaign that transformed a local gym into a fitness community brand.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        membership: '+400%',
        social: '+280%',
        revenue: '+300%'
      },
      year: '2023',
      client: 'Urban Fitness',
      featured: false
    },
    {
      id: 4,
      title: 'Artisan Coffee Co.',
      category: 'identity',
      tags: ['Logo Design', 'Packaging', 'Brand Identity'],
      description: 'Artisanal coffee brand identity that captures the craft and passion behind every cup.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        recognition: '+200%',
        sales: '+180%',
        loyalty: '+150%'
      },
      year: '2022',
      client: 'Artisan Coffee Co.',
      featured: false
    },
    {
      id: 5,
      title: 'MindfulTech Solutions',
      category: 'branding',
      tags: ['Brand Strategy', 'Positioning', 'Messaging'],
      description: 'Strategic brand positioning for a wellness technology company focusing on mental health solutions.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        funding: '+500%',
        users: '+300%',
        awareness: '+250%'
      },
      year: '2022',
      client: 'MindfulTech',
      featured: true
    },
    {
      id: 6,
      title: 'Heritage Restaurant Group',
      category: 'web-design',
      tags: ['Web Design', 'Mobile App', 'Reservations'],
      description: 'Digital transformation for a restaurant group with online reservations and ordering system.',
      image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        reservations: '+280%',
        orders: '+220%',
        satisfaction: '+90%'
      },
      year: '2022',
      client: 'Heritage Group',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "VConnect360 Portfolio",
    "description": "Explore our portfolio of successful branding, design, and marketing projects that have transformed businesses and driven measurable results.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "dateCreated": project.year,
        "creator": {
          "@type": "Organization",
          "name": "VConnect360"
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="Portfolio - Our Best Work & Case Studies"
        description="Explore our portfolio of successful branding, design, and marketing projects that have transformed businesses and driven measurable results."
        keywords={['portfolio', 'case studies', 'branding projects', 'design work', 'marketing campaigns']}
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
              Our{' '}
              <span className="bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their brands and 
              achieve remarkable results through strategic design and marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        project.featured ? 'h-64 md:h-80' : 'h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4 text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {project.client}
                          </div>
                        </div>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white text-xs font-medium rounded-full">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4f6ff2] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-[#4f6ff2]">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center text-[#4f6ff2] font-medium group-hover:text-[#1fa1df] transition-colors duration-300">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
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
              Portfolio Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work speaks for itself through measurable results and client success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: '300%', label: 'Average ROI' },
              { icon: Users, value: '500+', label: 'Happy Clients' },
              { icon: Award, value: '25+', label: 'Awards Won' },
              { icon: ExternalLink, value: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's create something extraordinary together. Your project could be 
              our next featured case study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#4f6ff2] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4f6ff2] transition-all duration-300 shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;