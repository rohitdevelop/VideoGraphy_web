"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-6 lg:px-12 bg-black "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Contact & Booking
          </h1>
          <p className="text-white">
            Ready to capture your special moments? Get in touch with us to
            discuss your requirements and receive a personalized quote.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Phone className="text-red-500 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-white">+91 66545 668444</p>
                <p className="text-white">+91 98765 432100</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-red-500 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-white">something@gmail.com</p>
                <p className="text-white">info@something.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-white">
                  Varanasi, Uttar Pradesh <br /> Serving Pan India
                </p>
              </div>
            </div>
          </div>

          {/* Quick Connect Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Call Now
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-green-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>

          {/* Map */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-white">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.106!2d83.006!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2fdf!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gray-600 p-8 rounded-xl shadow-lg border border-white">
          <h2 className="text-2xl font-bold text-white mb-6">
            Book Your Session
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Event Date
              </label>
              <input
                type="date"
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Event Type *
              </label>
              <select
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              >
                <option value="">Select event type</option>
                <option>Wedding Photography</option>
                <option>Wedding Videography</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Portrait Session</option>
                <option>Drone Coverage</option>
                <option>Product Photography</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Venue
              </label>
              <input
                type="text"
                placeholder="Event venue or location"
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Additional Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us more about your event, special requirements..."
                className="w-full mt-2 p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
