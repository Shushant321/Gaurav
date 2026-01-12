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
import edu1 from '../assets/edu1.jfif';
import edu2 from '../assets/edu2.jfif';
import edu3 from '../assets/edu3.jfif';

const CaseStudyEducation = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'FIIB Student at United Nations (UNGA 2025)',
      publication: 'ANI (India\'s Leading Multimedia News Agency)',
      clientSegment: 'Education, Institutions & Leadership Programs',
      service: 'Strategic PR & National Media Coverage',
      image: edu1,
      description: 'We secured national-level media coverage on ANI to highlight the institution\'s international representation and leadership presence at a global platform like the United Nations General Assembly (UNGA).',
      details: 'This type of coverage plays a crucial role in building institutional credibility, public trust, and national recognition. It positions the organization as globally active, socially responsible, and academically impactful.',
      benefits: [
        'National credibility & authority',
        'Strong institutional reputation',
        'Trust among students, parents & stakeholders',
        'High-impact visibility on major news platforms',
        'Long-term brand and image building'
      ]
    },
    {
      id: 2,
      title: 'Aviation Infrastructure Update — IndiGo & Navi Mumbai Airport',
      publication: 'The Hindu',
      clientSegment: 'Aviation, Infrastructure & Large-Scale Enterprises',
      service: 'Strategic PR & National News Coverage',
      image: edu2,
      description: 'We helped secure mainstream national coverage in The Hindu, one of India\'s most trusted and respected newspapers, to announce a major operational and connectivity development.',
      details: 'Such coverage plays a critical role in building public trust, informing large audiences, and strengthening institutional credibility. It ensures that important announcements reach not just niche audiences, but the entire country through a highly credible platform.',
      benefits: [
        'Nationwide visibility & trust',
        'Strong public and institutional credibility',
        'High-impact announcement amplification',
        'Mass audience reach',
        'Long-term reputation building'
      ]
    },
    {
      id: 3,
      title: 'Luxury Brand Strategic Positioning',
      publication: 'ET Brand Equity',
      clientSegment: 'Luxury',
      service: 'Strategic PR & Article Placement',
      image: edu3,
      description: 'We helped the brand secure in-depth editorial coverage on a premium business platform like ET Brand Equity to position them as a serious, credible, and future-focused company in their industry.',
      details: 'This type of coverage is not just news — it builds authority, trust, and investor/customer confidence.',
      benefits: [
        'High-end brand positioning',
        'Credibility among business audiences',
        'Strong digital footprint & Google presence',
        'Long-term reputation value'
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Education, Policy & Government - Case Studies",
    "description": "Multiple case studies showcasing successful PR campaigns for education, policy and government sectors including FIIB UN representation, aviation infrastructure updates, and luxury brand positioning.",
    "image": edu1,
    "datePublished": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "VConnect360"
    }
  };

  return (
    <>
      <SEO
        title="Education, Policy & Government - Case Studies"
        description="Multiple case studies showcasing successful PR campaigns for education, policy and government sectors including FIIB UN representation, aviation infrastructure updates, and luxury brand positioning."
        keywords={['education PR', 'government communications', 'policy coverage', 'institutional branding', 'aviation PR']}
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
              {['EDUCATION', 'POLICY', 'GOVERNMENT'].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              EDUCATION, POLICY & GOVERNMENT
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FIIB Student at United Nations (UNGA 2025), Aviation Infrastructure Update — IndiGo & Navi Mumbai Airport
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
                          <span className="text-gray-500">Service:</span>
                          <div className="font-semibold text-gray-900">{study.service}</div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {study.details}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        What this achieves:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {study.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start">
                            <Star className="h-4 w-4 text-[#4f6ff2] mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                <div className="text-4xl font-bold mb-2">National</div>
                <div className="text-lg opacity-90">Coverage Level</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">ANI + Hindu</div>
                <div className="text-lg opacity-90">Publications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold mb-2">Multi-Sector</div>
                <div className="text-lg opacity-90">Coverage</div>
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
              Ready for Strategic PR Coverage?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you secure premium media coverage for your educational institution, 
              policy initiatives, or government communications.
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

export default CaseStudyEducation;