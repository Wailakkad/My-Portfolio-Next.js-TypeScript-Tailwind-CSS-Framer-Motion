"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
      id: 1,
      description: "Full Stack Web Application Development",
      details: "Complete web application development including frontend, backend, and database implementation using modern frameworks and technologies",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      estimatedTimeframe: "2-6 months",
      priceRange: "$5,000 - $25,000"
    },
    {
      id: 2,
      description: "API Development and Integration",
      details: "Design and development of RESTful APIs, third-party API integration, and API documentation",
      technologies: ["REST", "GraphQL", "Swagger", "Postman"],
      estimatedTimeframe: "2-4 weeks",
      priceRange: "$2,000 - $8,000"
    },
    {
      id: 3,
      description: "Database Design and Optimization",
      details: "Database architecture design, optimization, migration, and maintenance for both SQL and NoSQL databases",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      estimatedTimeframe: "1-3 weeks",
      priceRange: "$1,500 - $6,000"
    },
    {
      id: 4,
      description: "Cloud Infrastructure Setup",
      details: "Setting up and configuring cloud infrastructure, deployment pipelines, and DevOps practices",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      estimatedTimeframe: "1-2 weeks",
      priceRange: "$2,000 - $5,000"
    },
    {
      id: 5,
      description: "Frontend Development and UI/UX Implementation",
      details: "Creating responsive, modern user interfaces with focus on user experience and performance",
      technologies: ["React", "Vue.js", "CSS3", "HTML5"],
      estimatedTimeframe: "2-8 weeks",
      priceRange: "$3,000 - $15,000"
    },
    {
      id: 6,
      description: "Security Implementation and Audit",
      details: "Implementation of security best practices, authentication systems, and security audits",
      technologies: ["OAuth", "JWT", "HTTPS", "Security Headers"],
      estimatedTimeframe: "1-3 weeks",
      priceRange: "$2,500 - $7,000"
    },
    {
      id: 7,
      description: "Maintenance and Support",
      details: "Ongoing maintenance, bug fixes, feature updates, and technical support for existing applications",
      technologies: ["Git", "Jira", "Testing Frameworks", "Monitoring Tools"],
      estimatedTimeframe: "Ongoing",
      priceRange: "$1,000 - $3,000/month"
    }
  ];

  export const Services = () => {
    const [activeService, setActiveService] = useState<number | null>(null);
  
    return (
      <section id="services" className="text-white py-20 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
          {/* Left Section - Sticky Header */}
          <motion.div
            className="md:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true}}
          >
            <h1 className="text-5xl lg:text-6xl text-purple-600 font-extrabold sticky top-20">
              Services
              <span className="block mt-2 text-lg font-normal text-gray-400">
                Full Stack Development Solutions
              </span>
            </h1>
          </motion.div>
  
          {/* Right Section - Services List */}
          <div className="md:w-3/4 space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-[#212529] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setActiveService(activeService === service.id ? null : service.id)
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 items-start">
                      <span className="text-purple-600 text-4xl font-bold">
                        {String(service.id).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-200">
                          {service.description}
                        </h3>
                        <p className="text-gray-400 mt-2">{service.details}</p>
                      </div>
                    </div>
                    <span
                      className={`text-purple-600 text-4xl transform transition-transform duration-300 ${
                        activeService === service.id ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </div>
  
                  {/* Expanded Content */}
                  {activeService === service.id && (
                    <motion.div
                      className="mt-6 pt-6 border-t border-gray-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-400 mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-purple-100 text-black font-bold rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="mb-4">
                            <h4 className="font-semibold text-white mb-1">
                              Timeframe
                            </h4>
                            <p className="text-gray-400">
                              {service.estimatedTimeframe}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              Investment
                            </h4>
                            <p className="text-gray-400">{service.priceRange}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Services;