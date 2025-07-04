"use client"
import React, { useState } from "react"
import { useEffect } from "react"
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion"

import Image from "next/image"
import laptop1 from "@/public/travel.jpg"
import laptop2 from "@/public/laptop-mockup.jpg";
import laptop3 from "@/public/laptop3.jpg";
import laptop4 from "@/public/D.jpg";
import laptop5 from "@/public/De.jpg";

const projects = [
    {
        id: 1,
        year: 2024,
        title: " TravelMap website",
        description: 'the showcase website for TravelMap, a mobile app designed to make traveling easier, smarter, and more fun! 🎒✈️',
        Image: laptop1,
        link: "https://travel-map-phi.vercel.app",
    },
    {
        id: 2,
        year: 2025,
        title: "IT Services Agency",
        description: 'A professional website for an IT services agency, showcasing their expertise and services. The site features a modern design, user-friendly navigation, and sections for services, portfolio, and contact information. Ideal for IT agencies looking to establish a strong online presence.',
        Image: laptop2,
        link: "https://it-services-agency-website-next-8dp6sukjp-wailakkads-projects.vercel.app",
    },
    {
        id: 3,
        year: 2025,
        title: "digital products showcase",
        description: 'An online platform to showcase and sell digital products. The website features a modern design, user-friendly navigation, and sections for product listings, descriptions, and purchase options. Ideal for creators looking to monetize their digital products.',
        Image: laptop3,
        link: "https://my-digital-products-showcase.vercel.app",
    },
   {
    id: 4,
    year: 2025,
    title: "Dental Clinic Website with AI Chatbot",
    description: "A modern website for a dental clinic featuring an integrated AI chatbot for answering patient questions, scheduling appointments, and offering dental care guidance. Designed for user comfort and accessibility, this platform improves communication between patients and the clinic.",
    Image: laptop4,
    link: "https://website-dentist-front-end.vercel.app",
},
{
    id: 5,
    year: 2025,
    title: "Home Decor Product Store",
    description: "A clean and stylish eCommerce website designed to showcase and sell home decor items. The site includes elegant product listings, smooth navigation, and a modern interface to enhance the shopping experience. Perfect for interior design brands and decor enthusiasts.",
    Image: laptop5,
    link: "https://envy-furniture-brand-website.vercel.app",
},

];
const color_tops = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]


export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const COLOR = useMotionValue(color_tops[0]);
  
    // Animate the gradient color
    useEffect(() => {
      const controls = animate(COLOR, color_tops, {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      });
  
      return () => controls.stop();
    }, [COLOR]);
  
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${COLOR})`;
  
    return (
      <motion.section
        style={{ backgroundImage }}
        id="portfolio"
        className="py-32 text-white bg-black min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Left Section - Project List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-10">
              Selected <span className="text-gray-400">Projects</span>
            </h1>
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer mb-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                  <h3
                    className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
                      selectedProject.id === project.id ? "text-gray-200" : ""
                    } duration-300`}
                  >
                    {project.title}
                  </h3>
                  {selectedProject.id === project.id && (
                    <motion.div
                      className="border-b-2 border-gray-200"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {selectedProject.id === project.id && (
                    <div>
                      <motion.p
                      className="text-gray-400 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                    <button 
  onClick={() => window.location.href =`${project.link}`}
  className="bg-white p-2 text-black mt-2 px-4 rounded-md font-bold hover:bg-black hover:text-white transition-all duration-300"
>
  Visit
</button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          {/* Right Section - Project Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src={selectedProject.Image}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };