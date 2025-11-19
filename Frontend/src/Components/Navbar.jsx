import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav
        className={`w-full   left-0  transition-all duration-500 ${
          scrolled
            ? "bg-black/90 shadow-lg backdrop-blur-md"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-[1001]">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Tutify Logo"
              className="h-12 w-[120px] object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-lg font-medium transition-all duration-500 ${
                    isActive ? "text-blue-400" : "text-white"
                  } group`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"
                        : "w-0 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 group-hover:w-1/2"
                    }`}
                  ></span>
                  <span
                    className={`absolute right-0 -bottom-1 h-[2px] rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"
                        : "w-0 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 group-hover:w-1/2"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-125 z-[2000]"
          >
            {isOpen ? <X size={34} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full h-[calc(100%-4rem)] bg-black/70 backdrop-blur-xl z-[1500] flex flex-col justify-center items-center space-y-8 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white z-[1600] hover:text-blue-400 transition-all duration-300"
        >
          <X size={40} />
        </button>

        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-all duration-500 ${
                isActive ? "text-blue-400" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
