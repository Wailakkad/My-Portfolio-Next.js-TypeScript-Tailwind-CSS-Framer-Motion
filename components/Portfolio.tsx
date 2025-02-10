"use client"
import React, { useState } from "react"
import { useEffect } from "react"
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion"

import Image from "next/image"
import laptop1 from "@/public/laptop-screen-premium-mockup_165789-1031.avif"
import laptop2 from "@/public/laptop-mockup.jpg";
import laptop3 from "@/public/07.jpg";

const projects = [
    {
        id: 1,
        year: 2024,
        title: "AI Grammar Checker",
        description: 'An advanced AI-powered grammar checker tool designed to help users improve their writing. It uses natural language processing (NLP) to detect grammatical errors, suggest corrections, and enhance overall writing quality. Perfect for students, professionals, and content creators.',
        Image: laptop1
    },
    {
        id: 2,
        year: 2024,
        title: "Community Web Application",
        description: 'A comprehensive web application built to foster community engagement. It includes features like forums, event management, and user profiles to connect people with shared interests. Ideal for local communities, organizations, and online groups looking to build a strong digital presence.',
        Image: laptop2
    },
    {
        id: 3,
        year: 2024,
        title: "AI-Powered Chatbot",
        description: 'A cutting-edge chatbot powered by artificial intelligence, designed to provide instant customer support and automate responses. It integrates seamlessly with websites and messaging platforms, offering personalized interactions and improving user experience. Suitable for businesses looking to enhance customer service efficiency.',
        Image: laptop3
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
                    <motion.p
                      className="text-gray-400 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
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