"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import useThemeStore from "@/store/themeStore"; // Import Zustand store

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Zustand theme store
  const { darkMode, toggleDarkMode, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, []);

  useEffect(() => {
    const sections = ["home", "about-us", "services", "faq", "contact", "testimonials", "call-to-action"];

    const detectActiveSection = () => {
      let currentSection = "home"; // Default to "home" on first load

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Activate section when at least 30% is visible
          const offset = window.innerHeight * 0.3;

          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Run on mount to set active section
    detectActiveSection();

    // Add scroll event listener
    window.addEventListener("scroll", detectActiveSection);
    return () => window.removeEventListener("scroll", detectActiveSection);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-[#F4F0F9]"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className={`text-xl font-bold cursor-pointer ${darkMode ? "text-white" : "text-black"}`} onClick={() => scrollToSection("home")}>
          Logo
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} darkMode={darkMode} />
          <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} darkMode={darkMode} />
          <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} darkMode={darkMode} />

          {/* Dropdown for More Info */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center space-x-1 transition ${
                activeSection === "faq" || activeSection === "contact" ? "text-[#5B408C]" : "hover:text-[#5B408C]"
              }`}
            >
              <span className={darkMode ? "text-white" : "text-black"}>More Info</span>
              <ChevronDown size={16} className={darkMode ? "text-white" : "text-black"} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                <button onClick={() => scrollToSection("faq")} className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                  FAQ
                </button>
                <button onClick={() => scrollToSection("contact")} className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                  Contact
                </button>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="hover:text-[#5B408C]">
            {darkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-black" />}
          </button>

          {/* Auth Buttons */}
          <button onClick={() => window.location.href = "/login"} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
            Login
          </button>
          <button onClick={() => window.location.href = "/signup"} className="px-4 py-2 bg-[#5B408C] text-white rounded-lg hover:bg-[#4A3577]">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button & Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="hover:text-[#5B408C]">
            {darkMode ? <Sun size={28} className="text-white" /> : <Moon size={28} className="text-black" />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} className="text-[#5B408C]" /> : <Menu size={28} className="text-[#5B408C]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white dark:bg-gray-900 shadow-lg flex flex-col space-y-6 py-8 px-6 z-50"
            ref={mobileMenuRef}
          >
            <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} darkMode={darkMode} />
            <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} darkMode={darkMode} />
            <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} darkMode={darkMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavItem = ({ text, sectionId, active, onClick, darkMode }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <button onClick={() => onClick(sectionId)} className={`transition-all duration-300 ${active ? "text-[#5B408C] font-semibold" : darkMode ? "text-white" : "text-black"}`}>
      {text}
    </button>
  </motion.div>
);