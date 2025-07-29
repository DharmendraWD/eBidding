// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-2 px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">AMDA</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <nav className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">About Us</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400 mb-2">Email: info@yourcompany.com</p>
          <p className="text-gray-400">Phone: +1 234 567 8900</p>
        </div>
      </div> */}
        <h1 className='text-center'>LoremLorem</h1>

      {/* Copyright */}
      <div className="mt-1 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TTIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;