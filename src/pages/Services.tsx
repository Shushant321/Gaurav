import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Palette,
  TrendingUp,
  Globe,
  PenTool,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Users,
  Megaphone,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Services = () => {
  const mainServices = [
    {
      icon: Target,
      title: "Public Relations",
      description:
        "Building strong media connections, shaping public perception, and managing brand reputation with strategic PR campaigns.",
      features: [
        "Press Releases & Media Outreach",
        "Crisis Communication",
        "Brand Reputation Management",
        "Event PR & Media Coverage",
      ],
      image:
        "/ser1.jpg",
    },
    {
      icon: Palette,
      title: "Investor Relations",
      description:
        "Creating transparent communication strategies that strengthen trust and confidence among stakeholders and investors.",
      features: [
        "Investor Presentations",
        "Annual & Financial Reports",
        "Shareholder Communication",
        "Market Insights & Analysis",
      ],
      image:
        "ser2.jpg",
    },
    {
      icon: Globe,
      title: "Internal Communication",
      description:
        "Enhancing workplace engagement through seamless communication channels and collaborative platforms.",
      features: [
        "Employee Newsletters",
        "Intranet & Workplace Portals",
        "Training & Onboarding Materials",
        "Team Collaboration Tools",
      ],
      image:
        "ser5.jpg",
    },
    {
      icon: TrendingUp,
      title: "Media Training",
      description:
        "Preparing leaders and teams to confidently face media interviews, public appearances, and digital communications.",
      features: [
        "Interview Coaching",
        "Crisis Response Training",
        "Presentation Skills",
        "On-Camera Confidence",
      ],
      image:
        "ser3.jpg",
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description:
        "Crafting impactful stories and digital content that attract, educate, and convert your target audience.",
      features: [
        "Blog Writing & Copywriting",
        "Video & Podcast Production",
        "Social Media Content",
        "Infographics & Visual Storytelling",
      ],
      image:
        "ser4.jpg",
    },
    {
      icon: BarChart3,
      title: "Startup Communication",
      description:
        "Helping startups build credibility, attract investors, and connect with audiences through clear and powerful communication.",
      features: [
        "Pitch Deck Design",
        "Investor Messaging",
        "Brand Narrative Development",
        "Growth Communication Strategy",
      ],
      image:
        "ser6.jpg",
    },
  ];

  const process = [
    {
      icon: Lightbulb,
      step: "01",
      title: "Discovery",
      description:
        "We dive deep into your business, goals, and challenges to understand your unique needs.",
    },
    {
      icon: Target,
      step: "02",
      title: "Strategy",
      description:
        "We develop a comprehensive strategy tailored to your objectives and market position.",
    },
    {
      icon: PenTool,
      step: "03",
      title: "Creation",
      description:
        "Our creative team brings the strategy to life with compelling designs and content.",
    },
    {
      icon: Eye,
      step: "04",
      title: "Review",
      description:
        "We collaborate with you to refine and perfect every element before launch.",
    },
    {
      icon: TrendingUp,
      step: "05",
      title: "Launch",
      description:
        "We execute the strategy and ensure everything performs at its highest potential.",
    },
    {
      icon: BarChart3,
      step: "06",
      title: "Optimize",
      description:
        "We continuously monitor and optimize performance to maximize your ROI.",
    },
  ];

  const benefits = [
    "Increased brand recognition and recall",
    "Higher customer engagement rates",
    "Improved conversion and sales performance",
    "Enhanced market positioning",
    "Stronger customer loyalty and retention",
    "Better competitive advantage",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Branding and Marketing Services",
    description:
      "Comprehensive branding and marketing services including brand strategy, creative design, digital marketing, and more.",
    provider: {
      "@type": "Organization",
      name: "VConnect360",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Branding and Marketing Services",
      itemListElement: mainServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Our Services - Brand Strategy, Design & Marketing"
        description="Comprehensive branding and marketing services including brand strategy, creative design, digital marketing, and analytics. Transform your business with our expert solutions."
        keywords={[
          "branding services",
          "marketing services",
          "brand strategy",
          "creative design",
          "digital marketing",
        ]}
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
              Services That{" "}
              <span className="bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] bg-clip-text text-transparent">
                Transform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive solutions
              that elevate your brand and drive measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is designed to work together, creating a cohesive
              approach that maximizes your brand's impact and effectiveness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4f6ff2] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-[#4f6ff2] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-[#4f6ff2] font-medium group-hover:text-[#1fa1df] transition-colors duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers
              exceptional results and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#1486e5] to-[#2abbd8]rounded-lg flex items-center justify-center group-hover:from-[#4f6ff2] group-hover:to-[#1fa1df] transition-all duration-300">
                    <step.icon className="h-6 w-6 text-[#4f6ff2] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-[#4f6ff2] transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#4f6ff2] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive approach delivers tangible results that impact
                your bottom line and long-term success.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-6 w-6 text-[#4f6ff2] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working on strategy"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#4f6ff2] to-[#1fa1df] text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our services can help you achieve your goals and
              take your brand to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#4f6ff2] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4f6ff2] transition-all duration-300 shadow-lg"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
