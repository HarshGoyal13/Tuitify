import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTAButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative group px-8 py-3 rounded-full font-semibold flex items-center gap-2 
      overflow-hidden transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/40 hover:scale-105"
          : "border border-blue-400 text-blue-400 hover:bg-blue-500/10 hover:shadow-blue-400/30 hover:scale-105"
      }`}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r 
      from-transparent via-white/20 to-transparent -translate-x-full 
      group-hover:translate-x-full transition-transform duration-700"></span>
  </button>
);

const HighlightText = ({ text }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r 
    from-blue-400 via-indigo-400 to-purple-400 font-bold animate-pulse">
    {text}
  </span>
);

const CodeBlockSection = () => {
  const navigate = useNavigate();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const [hoverSide, setHoverSide] = useState("");

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    rotateX.set(((y - height / 2) / height) * 10);
    rotateY.set(((x - width / 2) / width) * -10);

    const side =
      Math.abs(x - width / 2) > Math.abs(y - height / 2)
        ? x < width / 2
          ? "left"
          : "right"
        : y < height / 2
        ? "top"
        : "bottom";
    setHoverSide(side);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setHoverSide("");
  };

  const codeblock = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>NextGen Code</title>
</head>
<body>
  <h1><a href="/">Welcome Coder</a></h1>
  <nav>
    <a href="/home">Home</a>
    <a href="/courses">Courses</a>
    <a href="/contact">Contact</a>
  </nav>
</body>
</html>`;

  return (
    <div
      className="perspective-[1000px] flex justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.section
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
        }}
        className={`w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-14 
          my-24 text-white relative border-[2px] rounded-2xl p-8 transition-all duration-500 ${
            hoverSide === "top"
              ? "border-t-blue-400 shadow-[0_-8px_30px_#3b82f6aa]"
              : hoverSide === "bottom"
              ? "border-b-blue-400 shadow-[0_8px_30px_#3b82f6aa]"
              : hoverSide === "left"
              ? "border-l-blue-400 shadow-[-8px_0_30px_#3b82f6aa]"
              : hoverSide === "right"
              ? "border-r-blue-400 shadow-[8px_0_30px_#3b82f6aa]"
              : "border-transparent shadow-none"
          }`}
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[50%] flex flex-col gap-8">
          <h2 className="text-5xl font-bold leading-tight text-gray-100">
            Master your <HighlightText text="coding journey" /> with immersive
            courses.
          </h2>

          <p className="text-gray-400 text-lg font-medium w-[90%] -mt-2">
            Learn by building real projects. Boost your skills, confidence, and
            career with expert-led MERN & Blockchain courses.
          </p>

          <div className="flex gap-6 mt-8">
            <CTAButton
              active={true}
              onClick={() => navigate("/courses")}
            >
              Explore Courses
            </CTAButton>

            <CTAButton
              active={false}
              onClick={() => navigate("/contact")}
            >
              Start Now
            </CTAButton>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full lg:w-[500px] rounded-xl p-[2px] group hover: scale-[1.03] transition-all duration-700">
          <div className="rounded-xl bg-gradient-to-br from-gray-900 via-blue-950 to-black p-5 sm:p-7 overflow-hidden shadow-inner group-hover:shadow-[inset_0_0_40px_#2563eb50] transition-all duration-700">

            {/* Window Buttons */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <div className="flex">
              <div className="text-gray-600 text-sm sm:text-base pr-4 select-none leading-relaxed">
                {Array.from({ length: 12 }, (_, i) => (
                  <p key={i}>{i + 1}</p>
                ))}
              </div>

              <div className="font-mono text-sm sm:text-base text-blue-200 leading-relaxed">
                <TypeAnimation
                  sequence={[codeblock, 2000, ""]}
                  repeat={Infinity}
                  speed={60}
                  omitDeletionAnimation={true}
                  cursor={true}
                  style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    textShadow: "0 0 10px #2563eb90",
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 blur-sm opacity-70"></div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CodeBlockSection;
