import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Logo import karo yahan
import logo2 from "../assets/logo2.png";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/portfolio', label: 'Portfolio' },
  ];

  const services = [
    'Brand Strategy',
    'Digital Marketing',
    'Web Design',
    'Content Creation',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 font-serif">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 mt-16"
          >
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <img
                src={logo2}
                alt="VConnect360 Logo"
                className="h-14 w-14 object-contain group-hover:opacity-90 transition-opacity duration-300"
              />
              <span className="text-3xl font-bold text-[#1486e5] tracking-wide">VConnect360</span>
            </Link>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#1e40af]" />
                <span>123 Business Ave, Suite 100, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#1e40af]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#1e40af]" />
                <span>hello@VConnect360.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold mb-6   pb-2 text-[#1486e5]">Quick Links</h3>
            <ul className="space-y-3 text-base">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.to}
                    className="hover:underline text-gray-300 transition"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold mb-6   pb-2 text-[#1486e5]">Services</h3>
            <ul className="space-y-3 text-base">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold mb-6   pb-2 text-[#1486e5]">Stay Connected</h3>
            <p className="text-gray-400 mb-5 text-sm">
              Get the latest updates and insights delivered to your inbox.
            </p>
            {/* Newsletter Signup */}
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#1e40af] text-white placeholder-gray-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1486e5] hover:bg-[#1d48c2] text-white rounded-r-lg transition font-semibold text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-6 text-gray-500">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg hover:text-[#1486e5] transition-colors duration-200"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-20 pt-10 text-center text-gray-500 text-sm font-light tracking-wide"
        >
          <p>
            © {currentYear} VConnect360. All rights reserved. |{' '}
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
