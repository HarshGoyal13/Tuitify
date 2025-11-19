import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

const DreamJobBanner = () => {
  const Navigate = useNavigate()
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white py-14 px-6 lg:px-20 mt-14 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl shadow-2xl hover:shadow-[0_0_50px_10px_rgba(59,130,246,0.5)] transition-all duration-500"
    >
      {/* Banner Text */}
      <div className="text-center lg:text-left max-w-xl relative">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight relative inline-block">
          Land{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200">
              Your Dream Job
            </span>

            {/* Marker highlight effect */}
            <span
              className="
              absolute left-0 bottom-1 w-full h-3 
              bg-yellow-400/40 
              rounded-md 
              -z-0 
              skew-x-[-12deg]
            "
            ></span>
          </span>
        </h2>

        <p className="text-blue-100 text-lg lg:text-xl mb-4">
          Master the skills, clear interviews, and boost your career with confidence.
        </p>

        <div className="hidden lg:block h-1 w-24 bg-yellow-300 rounded-full animate-pulse mb-2"></div>
      </div>

      {/* CTA Button */}
      <motion.button
      onClick={()=> Navigate('/courses')}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px 5px rgba(255, 215, 0, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full flex items-center gap-3 hover:bg-blue-50 transition-all duration-300"
      >
        Start Learning
        <FaArrowRight className="text-blue-700" />
      </motion.button>
    </motion.section>
  );
};

export default DreamJobBanner;
