import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi"; // Mail icon
import Logo from "../assets/logo.png"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="robot_font bg-gray-900 text-gray-300 py-12 sm:py-16">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <img src={Logo} alt="Logo" className="w-36 sm:w-40" />
          <p className="text-gray-400 text-sm sm:text-base">
            Tuitify offers top-notch coding courses to elevate your skills and accelerate your career.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition-colors duration-300">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h3 className="text-lg font-bold text-white">Get in Touch</h3>
          <p className="text-gray-400 text-sm sm:text-base">Email us at:</p>
          <a
            href="mailto:harshgoyal0219@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            <HiOutlineMail size={20} />
            harshgoyal0219@gmail.com
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700"></div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Tuitify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
