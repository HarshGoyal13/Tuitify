import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaProjectDiagram 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Highlighted text component
const HighlightText = ({ text }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-bold">
    {text}
  </span>
);

// CTA button component with navigate
const CTAButton = ({ active, linkto, children }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(linkto)}
      className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 ${
        active ? "bg-blue-600 text-white" : "border border-blue-400 text-blue-400"
      }`}
    >
      {children}
    </button>
  );
};

// Features/timeline items for "Why Choose Us"
const features = [
  {
    icon: <FaLaptopCode size={30} className="text-blue-400" />,
    heading: "Practical Learning",
    description: "Learn by building real-world projects and solving challenges hands-on."
  },
  {
    icon: <FaChalkboardTeacher size={30} className="text-green-400" />,
    heading: "Expert Guidance",
    description: "Get mentorship from experienced industry professionals for faster growth."
  },
  {
    icon: <FaUsers size={30} className="text-yellow-400" />,
    heading: "Community & Networking",
    description: "Connect with peers, collaborate on projects, and expand your coding network."
  },
  {
    icon: <FaProjectDiagram size={30} className="text-pink-400" />,
    heading: "Career Support",
    description: "Prepare for interviews, improve your portfolio, and get career guidance."
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-11/12 mx-auto py-28 px-6 lg:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white rounded-3xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Auto-scroll features */}
        <div className="w-full lg:w-1/2 relative h-96 overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-8 relative"
          >
            {features.concat(features).map((feature, index) => (
              <div key={index} className="relative flex gap-6 items-start bg-gray-900/50 rounded-2xl p-6 border border-blue-500/20">
                
                {/* Icon */}
                <div className="flex flex-col items-center relative">
                  <div className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-gray-800 z-10">
                    {feature.icon}
                  </div>
                </div>

                <div className="pl-6">
                  <h3 className="font-semibold text-lg">{feature.heading}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-100">
            Why <HighlightText text="Choose Us" /> for your coding journey?
          </h2>

          <p className="text-gray-400 text-lg font-medium w-[90%] -mt-2">
            We combine practical experience, expert guidance, and a supportive community 
            to make learning effective, engaging, and career-oriented. Build skills that get 
            you noticed in the tech industry.
          </p>

          <div className="flex gap-6 mt-8">
            <CTAButton active={true} linkto="/contact">
              Get Started
            </CTAButton>
            <CTAButton active={false} linkto="/courses">
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
