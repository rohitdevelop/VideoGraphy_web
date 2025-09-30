import React from "react";
import { Camera, Phone, Mail, MapPin, Heart } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand + About */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-xl shadow-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">
                  Mr. Devesh & Team
                </h3>
                <p className="text-sm text-gray-400">
                  Photography & Videography
                </p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Capturing life's most precious moments with artistic vision and professional excellence. Your memories, our passion.
            </p>

            {/* Social Media */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {["About", "Services", "Portfolio", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                "Wedding Photography",
                "Corporate Events",
                "Videography",
                "Drone Coverage",
                "Portrait Sessions"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    → {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+916654566844" className="text-gray-400 hover:text-white transition-colors block">
                    +91 66545 668444
                  </a>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors block">
                    +91 98765 432100
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:something@gmail.com" className="text-gray-400 hover:text-white transition-colors block">
                    something@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">
                  Varanasi, Uttar Pradesh<br />
                  <span className="text-xs text-gray-500">Serving Pan India</span>
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <p>© {currentYear} Mr. Devesh & Team. All rights reserved.</p>
              <span className="hidden sm:inline">•</span>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#privacy" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-red-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top line */}
     </footer>
  );
}