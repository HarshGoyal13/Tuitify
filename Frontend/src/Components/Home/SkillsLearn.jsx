import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  SiWeb3Dotjs,
  SiHtml5, SiCss3, SiJavascript, SiJquery, SiTailwindcss, SiReactbootstrap,
  SiMongodb, SiExpress, SiReact, SiEthereum, SiSolidity, SiSolana,
  SiRust, SiPython, SiMysql, SiPostgresql, SiTableau,
  SiFigma, SiAdobephotoshop, SiR, SiSass,
  SiAdobeillustrator, SiSketch, SiBlender, SiApachespark, SiJupyter, SiGooglesheets,
  SiGoogleanalytics, SiGooglesearchconsole, SiMailchimp, SiMeta, SiContentful,
  SiTypescript, SiGoogleads
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

// -------------------- SKILLS LIST --------------------
const skills = [
  { icon: <SiHtml5 size={40} />, title: "HTML5" },
  { icon: <SiCss3 size={40} />, title: "CSS3" },
  { icon: <SiJavascript size={40} />, title: "JavaScript" },
  { icon: <SiTypescript size={40} />, title: "TypeScript" },
  { icon: <SiJquery size={40} />, title: "jQuery" },
  { icon: <SiTailwindcss size={40} />, title: "TailwindCSS" },
  { icon: <SiReactbootstrap size={40} />, title: "Bootstrap" },
  { icon: <SiReact size={40} />, title: "React" },
  { icon: <DiNodejs size={40} />, title: "Node.js" },
  { icon: <SiExpress size={40} />, title: "Express.js" },
  { icon: <SiMongodb size={40} />, title: "MongoDB" },

  { icon: <SiEthereum size={40} />, title: "Ethereum" },
  { icon: <SiWeb3Dotjs size={40} />, title: "Web3" },
  { icon: <SiSolidity size={40} />, title: "Solidity" },
  { icon: <SiSolana size={40} />, title: "Solana" },
  { icon: <SiRust size={40} />, title: "Rust" },

  { icon: <SiPython size={40} />, title: "Python" },
  { icon: <SiMysql size={40} />, title: "MySQL" },


];

// -------------------- ANIMATION VARIANTS --------------------
const fadeFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 14 }
  }
};

// -------------------- COMPONENT --------------------
const WhyChooseUs = () => {
  return (
    <section
      className="w-11/12 mx-auto bg-gradient-to-b from-black via-gray-900 to-black
                 text-white py-28 px-6 lg:px-20 rounded-3xl relative overflow-hidden">

      {/* background effects */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-900/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-700/20 blur-3xl rounded-full"></div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Skills <span className="text-blue-400">You Will Learn</span>
        </h2>
        <p className="text-blue-200 text-lg mt-3 max-w-3xl mx-auto">
          Master in-demand development, blockchain, data, marketing
          and design skills through hands-on real projects.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, i) => (
          <InViewCard key={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};

// --------------------CARD ANIMATION ON SCROLL--------------------
const InViewCard = ({ skill }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeFromLeft}
      initial="hidden"
      animate={controls}
      className="bg-gray-900/70 p-6 rounded-2xl flex flex-col items-center
                 border border-blue-400/20
                 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/70
                 transition-all duration-300"
    >
      {skill.icon}
      <p className="mt-2 text-sm font-semibold">{skill.title}</p>
    </motion.div>
  );
};

export default WhyChooseUs;
