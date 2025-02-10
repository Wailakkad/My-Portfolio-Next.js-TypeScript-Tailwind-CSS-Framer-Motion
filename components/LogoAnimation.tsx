"use client"
import Image from "next/image";
import fiver from "@/public/fiver.png";
import figma from "@/public/figma.png";
import { motion } from "framer-motion";



const images = [
  { src: fiver, alt: "fiver" },
  { src: figma, alt: "figma" },
  { src: fiver, alt: "fiver" },
  { src: figma, alt: "figma" },
  { src: fiver, alt: "fiver" },
  { src: figma, alt: "figma" },
  { src: fiver, alt: "fiver" },
  { src: figma, alt: "figma" },
  { src: fiver, alt: "fiver" },
  { src: figma, alt: "figma" },
  { src: fiver, alt: "fiver" },
  { src: figma, alt: "figma" },
];

const duplicatedImages = [...images, ...images]; //

export const LogoAnimation = () => {
  return (
    <div className="py-8 bg-black opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden
        ">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: '-50%' }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "loop" , ease : "linear" }}
          >
            {duplicatedImages.map((image, index) => (
              <Image key={index} src={image.src} alt={`${image.alt}-${index}`} width={40}/>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};