import React from 'react';
import { motion } from 'framer-motion';
import menimage from "../assets/men.png";
import laptop from "../assets/laptop.png";
import { useSEO } from "../Hook/UseSeo";
import GetInTouch from "../Components/GetInTouch";

// REUSABLE SLIDE-IN VARIANTS
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  useSEO({
    title: "About Us | Tuitify",
    description:
      "Learn about Tuitify's mission, vision, journey, and branches across Delhi. We blend technology, mentorship, and hands-on learning to help students build real-world skills.",
    keywords:
      "About Tuitify, Tuitify Delhi branches, Edtech platform, Learn coding, Skill development, Online learning, Career growth",
  });

  return (
    <>
      <div className="text-white min-h-screen px-4 sm:px-10 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">

            {/* HERO IMAGES */}
            <motion.div
              className="relative h-[450px] flex items-center justify-center"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500 to-indigo-500/20 rounded-full blur-3xl animate-pulse -z-0"></div>

              <img
                src={menimage}
                alt="Founder"
                className="absolute w-60 sm:w-72 h-auto rounded-xl shadow-2xl z-10"
                style={{ top: '5%', left: '10%' }}
              />

              <img
                src={laptop}
                alt="Laptop Coding"
                className="absolute w-72 sm:w-96 h-auto rounded-xl shadow-2xl z-20"
                style={{ bottom: '5%', right: '10%' }}
              />
            </motion.div>

            {/* HERO TEXT */}
            <motion.div
              className="p-4"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                Our Story
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                We set out to transform learning into an engaging, hands-on journey. Our founders created a platform where students gain real world experience and skills.
              </p>

              <div className="mt-6 p-4 border-l-4 border-yellow-500 bg-gray-800/30 rounded-lg">
                <p className="font-semibold text-yellow-300 mb-1">Our Commitment:</p>
                <p className="text-gray-300 text-sm">
                  Delivering project-based learning, community support, and career guidance.
                </p>
              </div>
            </motion.div>

          </div>

          {/* VISION SECTION */}
          <motion.div
            className="flex flex-col lg:flex-row lg:gap-16 mt-24 justify-between"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 lg:w-[48%]">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Our Vision
              </h2>

              <p className="text-gray-300 text-lg">
                To redefine learning by blending technology with hands-on experience, preparing learners with job-ready skills.
              </p>
            </div>

            {/* MISSION SECTION */}
            <div className="flex flex-col gap-6 lg:w-[48%] mt-12 lg:mt-0">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Our Mission
              </h2>

              <p className="text-gray-300 text-lg">
                To cultivate a global community of learners who collaborate, innovate, and grow together.
              </p>
            </div>
          </motion.div>

          {/* IMPACT SECTION */}
          <motion.div
            className="mt-24 border-t border-gray-700 pt-12 text-center"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              Learning, Evolved
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              An interactive learning journey powered by community, mentorship, and real-world projects.
            </p>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GetInTouch />
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default About;
