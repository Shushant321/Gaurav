import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Award,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import beauty from '../assets/beauty.jfif';
import lifestyle from '../assets/lifestyle.jfif';

const CaseStudyGlammonn = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'GlammOnn Miss & Mrs India Worldwide 2025',
      publication: 'The Tribune (via ANI)',
      clientSegment: 'Beauty, Fashion, Events & Personal Brands',
      coverageType: 'National News + Image Building PR',
      image: beauty,
      description: 'We secured national-level coverage in The Tribune via ANI for the prestigious GlammOnn Miss & Mrs India Worldwide 2025, spotlighting Nehaa Shastri\'s crowning moment in the grand 10th season celebration.',
      details: 'This kind of coverage is not just news — it\'s reputation building, personal brand amplification, and mass visibility through trusted national media platforms. By placing the story on ANI syndication, the news gains pan-India distribution across multiple top publications, ensuring maximum reach and long-term digital presence.',
      deliverables: [
        'National-level credibility for the event & winner',
        'Strong personal branding for public figures',
        'Massive multi-platform visibility via ANI network',
        'High trust factor through The Tribune',
        'Long-term Google & media footprint',
        'Premium positioning for fashion & lifestyle events'
      ]
    },
    {
      id: 2,
      title: 'Luxury Lifestyle Brand Positioning',
      publication: 'GQ India',
      clientSegment: 'Luxury, Lifestyle & Premium Consumer Brands',
      coverageType: 'Strategic PR & Editorial Feature Placement',
      image: lifestyle,
      description: 'We helped position the brand in the luxury and lifestyle space by securing high-impact editorial visibility on a premium platform like GQ India, which is known for influencing aspirational and high-spending audiences.',
      details: 'This kind of placement ensures the brand is not just seen, but associated with taste, quality, and aspiration. It helps build premium perception, strengthens brand image, and places the product in front of the right audience — not just a large audience.',
      benefits: [
        'Premium brand positioning',
        'Strong aspirational value',
        'High-quality audience reach',
        'Long-term image building',
        'Category authority in the lifestyle space'
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "GlammOnn Miss & Mrs India Worldwide 2025 - Case Study",
    "description": "National-level PR coverage secured for GlammOnn Miss & Mrs India Worldwide 2025 through The Tribune via ANI syndication.",
    "image": beauty,
    "datePublished": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "VConnect360"
    }
  };

  return (
    <>
      <SEO
        title="GlammOnn Miss & Mrs India Worldwide 2025 - Case Study"
        description="National-level PR coverage secured for GlammOnn Miss & Mrs India Worldwide 2025 through The Tribune via ANI syndication."
        keywords={['case study', 'PR coverage', 'fashion events', 'lifestyle branding', 'media coverage']}
        structuredData={structuredData}
      />

      {/* Back Button */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-[#4f6ff2] hover:text-[#1fa1df] transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['LIFESTYLE', 'FASHION', 'ENTERTAINMENT'].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LIFESTYLE & FASHION
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GlammOnn Miss & Mrs India Worldwide 2025 and Luxury Lifestyle Brand Positioning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="mb-6">
                      <div className="text-sm text-[#4f6ff2] font-semibold mb-2">
                        Case Study {study.id}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h2>
                      
                      <div className="grid grid-cols-1 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-gray-500">Publication:</span>
                          <div className="font-semibold text-gray-900">{study.publication}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Client Segment:</span>
                          <div className="font-semibold text-gray-900">{study.clientSegment}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Coverage Type:</span>
                          <div className="font-semibold text-gray-900">{study.coverageType}</div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {study.details}
                    </p>
                    
                    {study.deliverables && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What This Coverage Delivers</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {study.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[#4f6ff2] mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {study.benefits && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What this achieves:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {study.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[#4f6ff2] mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-[#4f6ff2] to-[#1fa1df]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Campaign Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">National</div>
                <div className="text-lg opacity-90">Coverage Level</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">Premium</div>
                <div className="text-lg opacity-90">Brand Positioning</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready for Premium Coverage?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you secure premium media coverage and build your brand's reputation 
              through trusted national platforms and luxury lifestyle publications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white font-semibold rounded-lg hover:from-[#03045e] hover:to-[#1fa1df] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your PR Campaign
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-[#4f6ff2] hover:text-[#4f6ff2] transition-all duration-300 shadow-lg"
              >
                View More Cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyGlammonn;