import React, { useState, useEffect, useRef } from "react";

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, courses: 0, hours: 0 });
  const [hoverSide, setHoverSide] = useState("");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const counterRef = useRef(null);

  const targetCounts = { students: 5000, courses: 120, hours: 24000 };

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const start = performance.now();
      const animate = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        setCounts({
          students: Math.floor(progress * targetCounts.students),
          courses: Math.floor(progress * targetCounts.courses),
          hours: Math.floor(progress * targetCounts.hours),
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  // Tilt + hover logic
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((centerX - x) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });

    const distances = {
      top: y,
      bottom: rect.height - y,
      left: x,
      right: rect.width - x,
    };
    const side = Object.keys(distances).reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );
    setHoverSide(side);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoverSide("");
  };

  return (
    <section
      ref={counterRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out, box-shadow 0.4s ease-out",
      }}
      className="relative w-11/12 mx-auto text-white py-16 sm:py-20 flex justify-center items-center overflow-hidden mt-16 sm:mt-24 rounded-3xl border border-transparent hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]"
    >
      {/* Shiny reactive border */}
      <div
        className={`absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 ease-out border-[2px] ${
          hoverSide === "top"
            ? "border-t-blue-400 shadow-[0_-10px_25px_#3b82f6aa]"
            : hoverSide === "bottom"
            ? "border-b-blue-400 shadow-[0_10px_25px_#3b82f6aa]"
            : hoverSide === "left"
            ? "border-l-blue-400 shadow-[-10px_0_25px_#3b82f6aa]"
            : hoverSide === "right"
            ? "border-r-blue-400 shadow-[10px_0_25px_#3b82f6aa]"
            : "border-transparent shadow-none"
        }`}
        style={{
          boxShadow:
            hoverSide &&
            "0 0 30px rgba(96,165,250,0.6), inset 0 0 20px rgba(59,130,246,0.3)",
        }}
      ></div>

      {/* Counters */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 text-center w-full max-w-6xl px-4 sm:px-8">
        {[
          { value: counts.students, label: "Active Students" },
          { value: counts.courses, label: "Courses" },
          { value: counts.hours, label: "Hours of Study" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-2xl border border-blue-800/40 hover:border-blue-400/70 backdrop-blur-sm 
            transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_#3b82f6aa]"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 drop-shadow-[0_0_10px_#2563eb]">
              {item.value.toLocaleString()}+
            </h2>
            <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Subtle animation */}
      <style>
        {`
          @keyframes glowPulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
          section:hover > div:first-child {
            animation: glowPulse 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default CounterSection;
