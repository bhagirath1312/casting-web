// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about-us", "services", "faq", "contact"];
//       let currentSection = "";

//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 160 && rect.bottom >= 160) {
//             currentSection = section;
//           }
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Function for Smooth Scrolling with Offset
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 100; // Adjust this based on your navbar height
//       const elementPosition = element.offsetTop - offset;
//       window.scrollTo({ top: elementPosition, behavior: "smooth" });

//       // Close mobile menu after clicking (if open)
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F0F9]">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h2 className="text-xl font-bold text-black cursor-pointer" onClick={() => scrollToSection("home")}>
//           Logo
//         </h2>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 text-black font-medium">
//           <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} />
//           <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} />
//           <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} />

//           {/* Dropdown for More Info */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className={`flex items-center space-x-1 ${
//                 activeSection === "faq" || activeSection === "contact" ? "text-[#5B408C]" : "hover:text-[#5B408C]"
//               } transition`}
//             >
//               <span>More Info</span>
//               <ChevronDown size={16} />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
//                 <button onClick={() => scrollToSection("faq")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
//                   FAQ
//                 </button>
//                 <button onClick={() => scrollToSection("contact")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
//                   Contact
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Buttons */}
//           <button onClick={() => window.location.href = "/login"} className="px-4 py-2 text-black border border-gray-300 rounded-lg hover:bg-gray-200">
//             Login
//           </button>
//           <button onClick={() => window.location.href = "/signup"} className="px-4 py-2 bg-[#5B408C] text-white rounded-lg hover:bg-[#4A3577]">
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
//           {isOpen ? <X size={28} className="text-[#5B408C]" /> : <Menu size={28} className="text-[#5B408C]" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden flex flex-col items-center space-y-4 py-6 bg-[#F4F0F9] text-black"
//         >
//           <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} />
//           <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} />
//           <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} />
//           <NavItem text="FAQ" sectionId="faq" active={activeSection === "faq"} onClick={scrollToSection} />
//           <NavItem text="Contact" sectionId="contact" active={activeSection === "contact"} onClick={scrollToSection} />
//           <button onClick={() => window.location.href = "/login"} className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
//             Login
//           </button>
//           <button onClick={() => window.location.href = "/signup"} className="px-5 py-2 bg-[#5B408C] text-white rounded-lg hover:bg-[#4A3577]">
//             Sign Up
//           </button>
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// // Navbar Item Component with Active State & Smooth Scroll
// const NavItem = ({ text, sectionId, active, onClick }) => (
//   <motion.div whileHover={{ scale: 1.05 }}>
//     <button
//       onClick={() => onClick(sectionId)}
//       className={`transition-all duration-300 ${
//         active ? "text-[#5B408C] font-semibold" : "hover:text-[#5B408C]"
//       }`}
//     >
//       {text}
//     </button>
//   </motion.div>
// );





// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const sections = ["home", "about-us", "services", "faq", "contact"];

//     // Function to detect the current active section
//     const detectActiveSection = () => {
//       let currentSection = "";
//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 160 && rect.bottom >= 160) {
//             currentSection = section;
//           }
//         }
//       });

//       setActiveSection(currentSection || ""); // Prevent defaulting to home if not found
//     };

//     // Run detection on scroll
//     window.addEventListener("scroll", detectActiveSection);

//     // Run detection on page load after a slight delay
//     setTimeout(detectActiveSection, 100);

//     return () => {
//       window.removeEventListener("scroll", detectActiveSection);
//     };
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Function for Smooth Scrolling with Offset
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 100; // Adjust based on navbar height
//       const elementPosition = element.offsetTop - offset;
//       window.scrollTo({ top: elementPosition, behavior: "smooth" });

//       // Close mobile menu after clicking
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F0F9]">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h2 className="text-xl font-bold text-black cursor-pointer" onClick={() => scrollToSection("home")}>
//           Logo
//         </h2>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 text-black font-medium">
//           <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} />
//           <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} />
//           <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} />

//           {/* Dropdown for More Info */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className={`flex items-center space-x-1 ${
//                 activeSection === "faq" || activeSection === "contact" ? "text-[#5B408C]" : "hover:text-[#5B408C]"
//               } transition`}
//             >
//               <span>More Info</span>
//               <ChevronDown size={16} />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
//                 <button onClick={() => scrollToSection("faq")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
//                   FAQ
//                 </button>
//                 <button onClick={() => scrollToSection("contact")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
//                   Contact
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Buttons */}
//           <button onClick={() => window.location.href = "/login"} className="px-4 py-2 text-black border border-gray-300 rounded-lg hover:bg-gray-200">
//             Login
//           </button>
//           <button onClick={() => window.location.href = "/signup"} className="px-4 py-2 bg-[#5B408C] text-white rounded-lg hover:bg-[#4A3577]">
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
//           {isOpen ? <X size={28} className="text-[#5B408C]" /> : <Menu size={28} className="text-[#5B408C]" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden flex flex-col items-center space-y-4 py-6 bg-[#F4F0F9] text-black"
//         >
//           <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} />
//           <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} />
//           <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} />
//           <NavItem text="FAQ" sectionId="faq" active={activeSection === "faq"} onClick={scrollToSection} />
//           <NavItem text="Contact" sectionId="contact" active={activeSection === "contact"} onClick={scrollToSection} />
//           <button onClick={() => window.location.href = "/login"} className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
//             Login
//           </button>
//           <button onClick={() => window.location.href = "/signup"} className="px-5 py-2 bg-[#5B408C] text-white rounded-lg hover:bg-[#4A3577]">
//             Sign Up
//           </button>
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// // Navbar Item Component with Active State & Smooth Scroll
// const NavItem = ({ text, sectionId, active, onClick }) => (
//   <motion.div whileHover={{ scale: 1.05 }}>
//     <button
//       onClick={() => onClick(sectionId)}
//       className={`transition-all duration-300 ${
//         active ? "text-[#5B408C] font-semibold" : "hover:text-[#5B408C]"
//       }`}
//     >
//       {text}
//     </button>
//   </motion.div>
// );


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
  const [clientDarkMode, setClientDarkMode] = useState(false); // Default to light mode

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
    setClientDarkMode(darkMode); // Update after Zustand loads
  }, [darkMode, initializeTheme]);

  useEffect(() => {
    const sections = ["home", "about-us", "services", "faq", "contact"];
    const detectActiveSection = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection || "");
    };

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${clientDarkMode ? "bg-gray-900" : "bg-[#F4F0F9]"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className={`text-xl font-bold cursor-pointer ${clientDarkMode ? "text-white" : "text-black"}`} onClick={() => scrollToSection("home")}>
          Logo
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} darkMode={clientDarkMode} />
          <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} darkMode={clientDarkMode} />
          <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} darkMode={clientDarkMode} />

          {/* Dropdown for More Info */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center space-x-1 transition ${activeSection === "faq" || activeSection === "contact" ? "text-[#5B408C]" : "hover:text-[#5B408C]"}`}>
              <span className={clientDarkMode ? "text-white" : "text-black"}>More Info</span>
              <ChevronDown size={16} className={clientDarkMode ? "text-white" : "text-black"} />
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
            {clientDarkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-black" />}
          </button>

          {/* Auth Buttons */}
          <button onClick={() => window.location.href = "/login"} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
            Login
          </button>
          <button onClick={() => window.location.href = "/signup"} className="px-4 py-2 bg-[#5B408C] text-white rounded-lg hover:bg-[#4A3577]">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} className="text-[#5B408C]" /> : <Menu size={28} className="text-[#5B408C]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg flex flex-col space-y-6 py-8 px-6 z-50 ${clientDarkMode ? "dark:bg-gray-900" : ""}`}
            ref={mobileMenuRef}
          >
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <X size={28} className="text-[#5B408C]" />
            </button>

            <NavItem text="Home" sectionId="home" active={activeSection === "home"} onClick={scrollToSection} darkMode={clientDarkMode} />
            <NavItem text="About Us" sectionId="about-us" active={activeSection === "about-us"} onClick={scrollToSection} darkMode={clientDarkMode} />
            <NavItem text="Services" sectionId="services" active={activeSection === "services"} onClick={scrollToSection} darkMode={clientDarkMode} />

            {/* Mobile Dropdown */}
            <div>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex justify-between items-center w-full px-2 py-2 ${clientDarkMode ? "text-white" : "text-black"}`}>
                More Info <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="pl-4">
                  <button onClick={() => scrollToSection("faq")} className="block py-2">FAQ</button>
                  <button onClick={() => scrollToSection("contact")} className="block py-2">Contact</button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="hover:text-[#5B408C]">
              {darkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-black" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavItem = ({ text, sectionId, active, onClick, darkMode }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <button
      onClick={() => onClick(sectionId)}
      className={`transition-all duration-300 ${active ? "text-[#5B408C] font-semibold" : darkMode ? "text-white" : "text-black"
        }`}
    >
      {text}
    </button>
  </motion.div>
);