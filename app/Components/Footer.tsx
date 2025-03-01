// components/Footer.tsx

import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-gray-300 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Follow Us on Social Media
        </h2>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition text-3xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition text-3xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Cradlers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
