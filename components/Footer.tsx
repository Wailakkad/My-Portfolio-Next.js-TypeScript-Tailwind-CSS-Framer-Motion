"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col  items-center justify-between w-full h-auto bg-black py-10 md:py-[100px] px-4 md:px-[400px]"
    >
            {/* Social Media Icons Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex space-x-6 md:space-x-8 mb-8"
      >
        {[
          
          { href: "https://www.instagram.com/webloom.agency/", icon: <FaInstagram /> },
          { href: "https://www.linkedin.com/in/akkad-ouail-91456a301/", icon: <FaLinkedin /> },
          { href: "https://github.com/Wailakkad?tab=repositories", icon: <FaGithub /> },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-[30px] hover:text-gray-500 transition-colors duration-300"
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 md:mb-0"
      >
        <h1 className="text-white font-bold text-lg md:text-xl text-center md:text-left">
          © 2025. All rights reserved.
        </h1>
      </motion.div>


    </motion.section>
  );
}
