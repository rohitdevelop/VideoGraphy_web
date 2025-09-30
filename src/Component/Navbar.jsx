"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Camera } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Track sections
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // fires when section is centered
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const menuItems = ["Home", "About", "Service", "Portfolio", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed w-full  z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
               <div className="relative bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-xl shadow-lg">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="">
              <h3
                className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-gray-100" : "text-white"
                }`}
              >
                Mr. Devesh & Team
              </h3>
              <p
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-100" : "text-gray-300"
                }`}
              >
                Photography & Videography
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                      scrolled
                        ? "text-gray-200 hover:text-red-500"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span
                      className={`relative z-10 text-sm xl:text-base ${
                        activeSection === id ? "text-red-500" : ""
                      }`}
                    >
                      {item}
                    </span>
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-transform duration-300 origin-left ${
                        activeSection === id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}

            {/* CTA Button */}
            <li className="ml-2">
              <a href={`#contact`}>
              <button className="relative group bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base overflow-hidden transition-all duration-300  hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Book Now
                </span>
               </button>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? "text-gray-200 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiOutlineX className="text-3xl transition-transform duration-300 rotate-90" />
            ) : (
              <HiOutlineMenu className="text-3xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`backdrop-blur-xl border-t transition-colors duration-300 ${
            scrolled
              ? "bg-white/95 border-gray-200/50"
              : "bg-black/80 border-white/10"
          }`}
        >
          <ul className="px-4 sm:px-6 py-6 space-y-1">
            {menuItems.map((item, index) => {
              const id = item.toLowerCase();
              return (
                <li
                  key={id}
                  className={`transform transition-all duration-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === id
                        ? "text-red-500"
                        : scrolled
                        ? "text-gray-700 hover:bg-red-50 hover:text-red-500"
                        : "text-white hover:bg-white/10 hover:text-red-400"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}

            {/* Mobile CTA */}
            <li
              className={`pt-4 transform transition-all duration-300 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                <Camera className="w-5 h-5" />
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
