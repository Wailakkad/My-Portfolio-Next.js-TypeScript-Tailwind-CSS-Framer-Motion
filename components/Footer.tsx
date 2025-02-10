import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full h-auto bg-black py-10 md:py-[100px] px-4 md:px-[400px]">
      {/* Text Section */}
      <div className="mb-6 md:mb-0">
        <h1 className="text-white font-bold text-lg md:text-2xl text-center md:text-left">
          © 2024. All rights reserved.
        </h1>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex space-x-6 md:space-x-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={34} className="text-white hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={34} className="text-white hover:text-blue-400 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/lingo_fix9/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={34} className="text-white hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={34} className="text-white hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href="https://github.com/Wailakkad?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={34} className="text-white hover:text-gray-500 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
}