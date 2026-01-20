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
import beauty from '../assets/beauty.jfif';
import entrepreneurship from '../assets/entrepreneurship.jfif';
import edu1 from '../assets/edu1.jfif';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'lifestyle', label: 'Lifestyle & Fashion' },
    { id: 'branding', label: 'Branding & PR' }
  ];

  const projects = [
    {
      id: 1,
      title: 'GlammOnn Miss & Mrs India Worldwide 2025',
      category: 'lifestyle',
      tags: ['LIFESTYLE', 'FASHION', 'ENTERTAINMENT'],
      description: 'We secured national-level coverage in The Tribune via ANI for the prestigious GlammOnn Miss & Mrs India Worldwide 2025, spotlighting Nehaa Shastri\'s crowning moment.',
      image: beauty,
      results: {
        coverage: 'National',
        platform: 'ANI + Tribune',
        reach: 'Pan-India'
      },
      year: '2025',
      client: 'GlammOnn',
      featured: true,
      publication: 'The Tribune (via ANI)',
      segment: 'Beauty, Fashion, Events & Personal Brands',
      coverageType: 'National News + Image Building PR'
    },
    {
      id: 2,
      title: 'ENTREPRENEURSHIP & STARTUPS',
      category: 'branding',
      tags: ['ENTREPRENEURSHIP', 'STARTUPS', 'FUNDING'],
      description: 'BabyOrgano — ₹20 Cr Funding Announcement, Piramal / Lacto Calamine — Brand Refresh & Growth Vision, Centre For Sight — Celebrity Campaign Launch',
      image: entrepreneurship,
      results: {
        funding: '₹20 Cr',
        publications: '3 Major',
        campaigns: 'Celebrity'
      },
      year: '2024',
      client: 'Multiple Startups',
      featured: true,
      publication: 'Entrepreneur India + Business Standard + Adgully',
      segment: 'Startups, Healthcare & Consumer Brands',
      coverageType: 'Funding + Campaign + Leadership'
    },
    {
      id: 3,
      title: 'EDUCATION, POLICY & GOVERNMENT',
      category: 'branding',
      tags: ['EDUCATION', 'POLICY', 'GOVERNMENT'],
      description: 'FIIB Student at United Nations (UNGA 2025), Aviation Infrastructure Update — IndiGo & Navi Mumbai Airport',
      image: edu1,
      results: {
        coverage: 'National',
        publications: 'ANI + Hindu',
        sectors: 'Multi-Sector'
      },
      year: '2025',
      client: 'Education & Aviation',
      featured: true,
      publication: 'ANI + The Hindu + ET Brand Equity',
      segment: 'Education, Aviation & Luxury',
      coverageType: 'Strategic PR + National Coverage'
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
              className="grid gap-8 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-700"
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

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4f6ff2] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-[#4f6ff2] mb-1">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={project.id === 1 ? "/case-study/glammonn" : project.id === 2 ? "/case-study/entrepreneurship" : project.id === 3 ? "/case-study/education" : "#"}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white font-semibold rounded-lg hover:from-[#03045e] hover:to-[#1fa1df] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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