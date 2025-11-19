import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Floating Icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="text-[140px] md:text-[180px] font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
      >
        404
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-300 mt-3 text-sm md:text-lg max-w-md mx-auto">
          It seems like the page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-6 px-6 md:px-8 py-3 bg-white text-blue-700 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:bg-blue-50 transition"
        >
          <FaArrowLeft />
          Go Back Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Error404;
