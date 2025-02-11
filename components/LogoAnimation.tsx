"use client";
import Image from "next/image";
import mysql from "@/public/mysql.png";
import postman from "@/public/postman.png";
import docker from "@/public/docker.png";
import jwt from "@/public/jwt.png";
import figma from "@/public/figma.png";
import { motion } from "framer-motion";

const images = [
  { src: docker, alt: "docker" },
  { src: figma, alt: "figma" },
  { src: mysql, alt: "mysql" },
  { src: postman, alt: "postman" },
  { src: jwt, alt: "jwt" },
  { src: docker, alt: "docker" },
  { src: figma, alt: "figma" },
  { src: mysql, alt: "mysql" },
  { src: postman, alt: "postman" },
  { src: docker, alt: "docker" },
  { src: figma, alt: "figma" },
  { src: mysql, alt: "mysql" },
  { src: postman, alt: "postman" },
];

const duplicatedImages = [...images, ...images]; // Duplicate images for smooth looping

export const LogoAnimation = () => {
  return (
    <div className="py-12 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 items-center flex-none pr-14 h-[200px]" // Increased height
            animate={{ translateX: "-50%" }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }} // Hover effect: scale up by 20%
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 w-[300px] h-[200px] flex items-center bg-black justify-center" // Fixed size
              >
                <Image
                  src={image.src}
                  alt={`${image.alt}-${index}`}
                  width={100} // Fixed width
                  height={50} // Fixed height
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
