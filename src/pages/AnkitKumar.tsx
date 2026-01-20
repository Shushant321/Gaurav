import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Mail, Award, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ankit from '../assets/ankit.jfif'


const AnkitKumar = () => {
  return (
    <>
      <SEO
        title="Ankit Kumar - Founder & CEO | VConnect360"
        description="Meet Ankit Kumar, seasoned PR professional with 9+ years experience, founder of VConnect360. Expert in brand positioning and strategic communication."
        keywords={['Ankit Kumar', 'PR professional', 'founder', 'brand positioning', 'strategic communication']}
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
                src={ankit}
                alt="Ankit Kumar"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <div className="mt-8 flex justify-center space-x-4">
                <a href="#" className="p-3 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="mailto:ankit@vconnect360.com" className="p-3 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-300">
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
                Ankit Kumar
              </h1>
              <p className="text-2xl text-[#4f6ff2] font-semibold mb-8">Founder & CEO</p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Briefcase className="h-8 w-8 text-[#4f6ff2] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-[#4f6ff2] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="h-8 w-8 text-[#4f6ff2] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Major Brands</div>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Ankit Kumar is a seasoned Public Relations professional with over nine years of experience in the core PR industry. Over the course of his career, he has successfully managed communication strategies for some of the country's most prominent brands, including Paytm, Videocon, ASUS, Mercedes-Benz, and several other industry leaders.
                </p>
                <p>
                  His deep understanding of media relations, brand positioning, and strategic storytelling has helped organizations build strong, credible public narratives. Driven by passion and an unwavering work ethic, Ankit's approach to PR goes beyond visibility—he believes in creating meaningful, long-term impact through authentic communication.
                </p>
                <p>
                  In 2021, he founded his company with a clear vision: to redefine the PR landscape by bringing organic, value-driven public relations back to its roots. Since inception, the firm has worked with more than 300 clients across national and international markets, spanning diverse industries and business scales.
                </p>
                <p>
                  Ankit's leadership is grounded in integrity, innovation, and a client-first mindset. His mission is to restore trust and credibility in public relations by focusing on genuine media engagement, strategic insight, and measurable outcomes. Through his work, he continues to set new benchmarks for ethical and effective PR practices in a rapidly evolving industry.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {['Public Relations', 'Brand Positioning', 'Strategic Communication', 'Media Relations', 'Crisis Management'].map((skill, index) => (
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

export default AnkitKumar;