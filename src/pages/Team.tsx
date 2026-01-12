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
import prakash from '../assets/prakash.jfif';
import SEO from '../components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ankit Kumar',
      role: 'Founder & CEO',
      bio: 'Seasoned Public Relations professional with over nine years of experience in the core PR industry. Successfully managed communication strategies for prominent brands including Paytm, Videocon, ASUS, Mercedes-Benz, and several other industry leaders.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Public Relations', 'Brand Positioning', 'Strategic Communication'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ankit@vconnect360.com'
      },
      fullBio: 'Ankit Kumar is a seasoned Public Relations professional with over nine years of experience in the core PR industry. Over the course of his career, he has successfully managed communication strategies for some of the country\'s most prominent brands, including Paytm, Videocon, ASUS, Mercedes-Benz, and several other industry leaders. His deep understanding of media relations, brand positioning, and strategic storytelling has helped organizations build strong, credible public narratives. Driven by passion and an unwavering work ethic, Ankit\'s approach to PR goes beyond visibility—he believes in creating meaningful, long-term impact through authentic communication. In 2021, he founded his company with a clear vision: to redefine the PR landscape by bringing organic, value-driven public relations back to its roots. Since inception, the firm has worked with more than 300 clients across national and international markets, spanning diverse industries and business scales. Ankit\'s leadership is grounded in integrity, innovation, and a client-first mindset. His mission is to restore trust and credibility in public relations by focusing on genuine media engagement, strategic insight, and measurable outcomes.'
    },
    {
      name: 'Prakash Manipuri',
      role: 'Co-Founder & CTO',
      bio: 'Media and communications professional with over nine years of experience across journalism, editing, public relations, and digital marketing. A technologist at heart with deep understanding of media dynamics and digital transformation.',
      image: prakash,
      expertise: ['Digital Marketing', 'Media Strategy', 'Technology Integration'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'prakash@vconnect360.com'
      },
      fullBio: 'Prakash Manipuri is a media and communications professional with over nine years of experience across journalism, editing, public relations, and digital marketing. A technologist at heart, he developed a strong understanding of media dynamics early in his career, beginning as a journalist and gaining firsthand exposure to newsrooms, content creation, and storytelling. This foundation enabled him to transition seamlessly into the larger editing and corporate communications space, where he worked with leading global organizations such as Wipro and HCL. Known for his sharp thinking and adaptability, Prakash has consistently stayed ahead of industry shifts, especially as the PR landscape evolved alongside digital transformation. Recognizing the need for integrated, results-driven communication, he founded his own PR and digital marketing company in 2021. Since then, his entrepreneurial journey has been marked by steady growth and high-impact collaborations. Under his leadership, the firm has partnered with prestigious brands including Adani Airports, HP, Zomato, ITC Hotels, and several others across diverse sectors. Prakash is widely regarded as a straightforward, strategic thinker with a deep understanding of the marketing ecosystem.'
    }
  ];

  const stats = [
    { icon: Users, value: '300+', label: 'Clients Served' },
    { icon: Briefcase, value: '9+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Media Publications' },
    { icon: Star, value: '100%', label: 'Success Rate' }
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
    "name": "VConnect360",
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
        title="Our Team - Meet the Experts Behind VConnect360"
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
              <span className="bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] bg-clip-text text-transparent">
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
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders with 9+ years in PR, media, and digital marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
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

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#4f6ff2] font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#4f6ff2]/10 to-[#1fa1df]/10 text-[#4f6ff2] text-sm font-medium rounded-full border border-[#4f6ff2]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={index === 0 ? "/team/ankit-kumar" : "/team/prakash-manipuri"}
                    className="text-[#4f6ff2] font-medium hover:text-[#1fa1df] transition-colors duration-300"
                  >
                    Read More →
                  </Link>
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
                <div className="bg-gradient-to-r from-[#1486e5] to-[#2abbd8]rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] rounded-full"></div>
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
                    <button className="px-4 py-2 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-200">
                      Apply
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Digital Marketing Specialist</h4>
                      <p className="text-gray-600">Full-time • New York</p>
                    </div>
                    <button className="px-4 py-2 bg-[#4f6ff2] text-white rounded-lg hover:bg-[#03045e] transition-colors duration-200">
                      Apply
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Don't see a position that fits? We'd still love to hear from you!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white font-semibold rounded-lg hover:from-[#03045e] hover:to-[#1fa1df] transition-all duration-300"
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