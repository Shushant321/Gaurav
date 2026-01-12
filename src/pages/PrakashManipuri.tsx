import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Mail, Award, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import prakash from '../assets/prakash.jfif';

const PrakashManipuri = () => {
  return (
    <>
      <SEO
        title="Prakash Manipuri - Co-Founder & CTO | VConnect360"
        description="Meet Prakash Manipuri, media and communications professional with 9+ years experience, co-founder of VConnect360. Expert in digital marketing and technology integration."
        keywords={['Prakash Manipuri', 'digital marketing', 'co-founder', 'media strategy', 'technology integration']}
      />

      <section className="pt-20 pb-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/team"
            className="inline-flex items-center text-[#4f6ff2] hover:text-[#1fa1df] transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Team
          </Link>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={prakash}
                alt="Prakash Manipuri"
                className="w-full rounded-2xl shadow-2xl object-cover object-top h-96"
              />
              
              <div className="mt-8 flex justify-center space-x-4">
                <a href="#" className="p-3 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="mailto:prakash@vconnect360.com" className="p-3 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Prakash Manipuri
              </h1>
              <p className="text-2xl text-[#4f6ff2] font-semibold mb-8">Co-Founder & CTO</p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Briefcase className="h-8 w-8 text-[#4f6ff2] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-[#4f6ff2] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Major Brands</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="h-8 w-8 text-[#4f6ff2] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Tech</div>
                  <div className="text-sm text-gray-600">Expert</div>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Prakash Manipuri is a media and communications professional with over nine years of experience across journalism, editing, public relations, and digital marketing. A technologist at heart, he developed a strong understanding of media dynamics early in his career, beginning as a journalist and gaining firsthand exposure to newsrooms, content creation, and storytelling.
                </p>
                <p>
                  This foundation enabled him to transition seamlessly into the larger editing and corporate communications space, where he worked with leading global organizations such as Wipro and HCL. Known for his sharp thinking and adaptability, Prakash has consistently stayed ahead of industry shifts, especially as the PR landscape evolved alongside digital transformation.
                </p>
                <p>
                  Recognizing the need for integrated, results-driven communication, he founded his own PR and digital marketing company in 2021. Since then, his entrepreneurial journey has been marked by steady growth and high-impact collaborations.
                </p>
                <p>
                  Under his leadership, the firm has partnered with prestigious brands including Adani Airports, HP, Zomato, ITC Hotels, and several others across diverse sectors. Prakash is widely regarded as a straightforward, strategic thinker with a deep understanding of the marketing ecosystem. His approach combines media insight, technological acumen, and marketing intelligence to deliver authentic, effective brand communication in an increasingly competitive environment.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {['Digital Marketing', 'Media Strategy', 'Technology Integration', 'Content Creation', 'Corporate Communications'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-[#4f6ff2]/10 to-[#1fa1df]/10 text-[#4f6ff2] font-medium rounded-full border border-[#4f6ff2]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrakashManipuri;