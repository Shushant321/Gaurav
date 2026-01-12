import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import entrepreneurship from '../assets/entrepreneurship.jfif';
import entrepreneurship2 from '../assets/entrepreneurship 2.jfif';
import entrepreneurship3 from '../assets/Entrepreneurship 3.jfif';

const CaseStudyEntrepreneurship = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'BabyOrgano — ₹20 Cr Funding Announcement',
      publication: 'Entrepreneur India',
      client: 'BabyOrgano (Ayurvedic Kids Wellness Brand)',
      coverageType: 'Funding Announcement + Growth Story',
      image: entrepreneurship,
      description: 'We secured premium coverage in Entrepreneur India for BabyOrgano\'s ₹20 Cr funding round, positioning the brand as a high-growth, investor-backed startup in the kids wellness and ayurvedic nutrition space.',
      details: 'The story not only announced the funding but also highlighted the company\'s growth roadmap, vision, and its target of reaching ₹100 Cr in revenue by FY2027, strengthening both investor confidence and market credibility.',
      benefits: [
        'Trust with investors',
        'Authority in their industry', 
        'Strong brand narrative',
        'Visibility among founders, VCs & business leaders'
      ],
      deliverables: [
        'Premium startup media placement',
        'Funding announcement amplification',
        'Brand positioning as a scalable business',
        'Investor & market credibility',
        'Long-term Google visibility',
        'Business & founder profiling'
      ]
    },
    {
      id: 2,
      title: 'Centre For Sight — Celebrity Campaign Launch',
      publication: 'Business Standard',
      client: 'Centre For Sight',
      coverageType: 'Campaign Launch + Celebrity Association',
      celebrity: 'Milind Soman',
      image: entrepreneurship2,
      description: 'We secured national-level coverage in Business Standard for Centre For Sight\'s cataract awareness campaign featuring Milind Soman, positioning the brand as a progressive, patient-first healthcare leader breaking stereotypes around eye surgery and aging.',
      details: 'The campaign was presented as a light-hearted, high-impact public awareness initiative, helping the brand connect emotionally with audiences while also driving strong credibility and recall through a trusted celebrity face.',
      benefits: [
        'Build massive brand trust',
        'Give credibility to the medical campaign',
        'Create national visibility for the initiative',
        'Strengthen the hospital\'s leadership positioning in eye care'
      ]
    },
    {
      id: 3,
      title: 'Strategic PR & Leadership Communication',
      publication: 'Adgully',
      clientSegment: 'Corporate, Healthcare & Consumer Brands',
      service: 'Strategic PR, Leadership Communication & Brand Storytelling',
      image: entrepreneurship3,
      description: 'We helped position the brand\'s leadership and strategic vision through an in-depth industry feature and leadership interview on Adgully, one of India\'s leading marketing and advertising publications.',
      details: 'This type of coverage strengthens corporate credibility, leadership visibility, and industry authority, while clearly communicating the brand\'s long-term vision, growth roadmap, and strategic direction.',
      benefits: [
        'Strong leadership positioning',
        'Corporate credibility & trust',
        'Industry authority and recognition',
        'Clear brand vision communication',
        'High-quality stakeholder perception'
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Entrepreneurship & Startups - Case Studies",
    "description": "Multiple case studies showcasing successful PR campaigns for startups and entrepreneurship ventures including BabyOrgano funding announcement, Centre For Sight celebrity campaign, and strategic leadership communication.",
    "image": entrepreneurship,
    "datePublished": "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": "VConnect360"
    }
  };

  return (
    <>
      <SEO
        title="Entrepreneurship & Startups - Case Studies"
        description="Multiple case studies showcasing successful PR campaigns for startups including BabyOrgano ₹20 Cr funding announcement, Centre For Sight celebrity campaign, and strategic leadership communication."
        keywords={['entrepreneurship', 'startups', 'funding announcement', 'celebrity campaigns', 'PR case studies']}
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
              {['ENTREPRENEURSHIP', 'STARTUPS', 'FUNDING'].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ENTREPRENEURSHIP & STARTUPS
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BabyOrgano — ₹20 Cr Funding Announcement, Piramal / Lacto Calamine — Brand Refresh & Growth Vision, Centre For Sight — Celebrity Campaign Launch
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
                      className="w-full h-64 lg:h-full object-cover object-top"
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-gray-500">Publication:</span>
                          <div className="font-semibold text-gray-900">{study.publication}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Client:</span>
                          <div className="font-semibold text-gray-900">{study.client || study.clientSegment}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Coverage Type:</span>
                          <div className="font-semibold text-gray-900">{study.coverageType}</div>
                        </div>
                        {study.celebrity && (
                          <div>
                            <span className="text-gray-500">Celebrity:</span>
                            <div className="font-semibold text-gray-900">{study.celebrity}</div>
                          </div>
                        )}
                        {study.service && (
                          <div className="md:col-span-2">
                            <span className="text-gray-500">Service:</span>
                            <div className="font-semibold text-gray-900">{study.service}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {study.details}
                    </p>
                    
                    {study.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {study.id === 1 ? 'This kind of media placement helps startups build:' : 'This coverage helped:'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start">
                              <Star className="h-4 w-4 text-[#4f6ff2] mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {study.deliverables && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What We Delivered</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[#4f6ff2] mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{deliverable}</span>
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
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">₹20 Cr</div>
                <div className="text-lg opacity-90">Funding Announced</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">3 Major</div>
                <div className="text-lg opacity-90">Publications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">Celebrity</div>
                <div className="text-lg opacity-90">Campaigns</div>
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
              Ready to Scale Your Startup?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you secure premium media coverage, announce your funding rounds, 
              and build your brand's reputation in the startup ecosystem.
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

export default CaseStudyEntrepreneurship;