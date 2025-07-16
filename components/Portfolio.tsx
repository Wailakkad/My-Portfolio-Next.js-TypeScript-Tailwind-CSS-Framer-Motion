"use client"
import React, { useState, useEffect } from "react"
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion"
import { ArrowUpRight, Eye, ExternalLink, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import laptop1 from "@/public/travel.jpg"
import laptop2 from "@/public/laptop-mockup.jpg";
import laptop3 from "@/public/laptop3.jpg";
import laptop4 from "@/public/D.jpg";
import laptop5 from "@/public/De.jpg";

// Define the Particle interface
interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

const projects = [
    {
        id: 1,
        year: 2024,
        title: "TravelMap Website",
        description: 'The showcase website for TravelMap, a mobile app designed to make traveling easier, smarter, and more fun! 🎒✈️',
        Image: laptop1,
        link: "https://travel-map-phi.vercel.app",
        category: "Mobile App Showcase",
        tech: ["React", "Next.js", "Tailwind CSS"]
    },
    {
        id: 2,
        year: 2025,
        title: "IT Services Agency",
        description: 'A professional website for an IT services agency, showcasing their expertise and services. The site features a modern design, user-friendly navigation, and sections for services, portfolio, and contact information.',
        Image: laptop2,
        link: "https://it-services-agency-website-next-8dp6sukjp-wailakkads-projects.vercel.app",
        category: "Business Website",
        tech: ["Next.js", "TypeScript", "Framer Motion"]
    },
    {
        id: 3,
        year: 2025,
        title: "Digital Products Showcase",
        description: 'An online platform to showcase and sell digital products. The website features a modern design, user-friendly navigation, and sections for product listings, descriptions, and purchase options.',
        Image: laptop3,
        link: "https://my-digital-products-showcase.vercel.app",
        category: "E-commerce Platform",
        tech: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 4,
        year: 2025,
        title: "Dental Clinic Website with AI Chatbot",
        description: "A modern website for a dental clinic featuring an integrated AI chatbot for answering patient questions, scheduling appointments, and offering dental care guidance.",
        Image: laptop4,
        link: "https://website-dentist-front-end.vercel.app",
        category: "Healthcare & AI",
        tech: ["React", "AI Integration", "Healthcare APIs"]
    },
    {
        id: 5,
        year: 2025,
        title: "Home Decor Product Store",
        description: "A clean and stylish eCommerce website designed to showcase and sell home decor items. The site includes elegant product listings, smooth navigation, and a modern interface.",
        Image: laptop5,
        link: "https://envy-furniture-brand-website.vercel.app",
        category: "E-commerce Design",
        tech: ["React", "Stripe", "Contentful"]
    },
];

const color_tops = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]

// Pre-generate particles to avoid hydration mismatch
const generateParticles = (): Particle[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 13.7) % 100, // Deterministic positioning
    top: (i * 7.3) % 100,
    delay: (i * 0.1) % 2,
    duration: 3 + (i % 3),
  }));
};

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const COLOR = useMotionValue(color_tops[0]);
  
    // Handle client-side hydration
    useEffect(() => {
      setIsClient(true);
      setParticles(generateParticles());
    }, []);

    // Animate the gradient color only on client
    useEffect(() => {
      if (!isClient) return;
      
      const controls = animate(COLOR, color_tops, {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      });
  
      return () => controls.stop();
    }, [COLOR, isClient]);
  
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${COLOR})`;
  
    return (
      <motion.section
        style={isClient ? { backgroundImage } : { background: '#000' }}
        id="portfolio"
        className="py-32 text-white bg-black min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Floating particles - only render on client */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 relative z-10">
          {/* Left Section - Project List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Featured Work</span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Selected{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                  Projects
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Explore a curated collection of my latest work, from web applications to digital experiences.
              </p>
            </div>

            {/* Project List */}
            <div className="space-y-1">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="cursor-pointer group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="border-b border-gray-800 py-6 px-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-400 text-sm font-medium">{project.year}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <motion.div
                        animate={{
                          rotate: hoveredProject === project.id ? 45 : 0,
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </motion.div>
                    </div>
                    
                    <h3 className={`text-2xl lg:text-3xl font-semibold group-hover:text-gray-300 transition-all duration-300 ${
                      selectedProject.id === project.id ? "text-white" : "text-gray-400"
                    }`}>
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Selected Project Details */}
                    {selectedProject.id === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-4 space-y-4"
                      >
                        <motion.div
                          className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <motion.p
                          className="text-gray-400 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <div className="flex gap-3 pt-2">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.link, '_blank');
                            }}
                            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit Site
                          </motion.button>
                          
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              // Add preview functionality here
                            }}
                            className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Eye className="w-4 h-4" />
                            Preview
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Link href="/pages/projects">
                <motion.button
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-semibold border border-gray-700 hover:border-gray-500 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View All Projects
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Project Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-96 lg:h-[600px] group">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 group-hover:border-gray-600 transition-all duration-500">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedProject.Image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Project info overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {selectedProject.category} • {selectedProject.year}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements - only render on client */}
              {isClient && (
                <>
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, -180, -360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
};