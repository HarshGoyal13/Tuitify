import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-blue-800/30 blur-3xl -z-10"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center space-y-8">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight relative inline-block"
        >
          Learn. Code.{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-400">Evolve.</span>
            {/* Marker Highlight */}
            <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-500 blur-[2px] -rotate-1 rounded-md"></span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl"
        >
          Upgrade your coding skills with real-world projects, live mentorship,
          and a community that helps you grow faster than ever.
        </motion.p>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={()=> navigate('/courses')}
           className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-[0_0_30px_#2563ebaa]">
            Start Learning
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Floating Code Symbol */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-16 right-16 p-2 bg-gray-900/80 text-green-400 font-mono rounded select-none"
      >
        {'console.log("Hi 🪻")'}
      </motion.div>

      {/* Subtle Gradient Rings (decoration) */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-700/20 to-transparent blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl bottom-10 right-20 animate-pulse"></div>
    </section>
  );
};

export default Hero;
