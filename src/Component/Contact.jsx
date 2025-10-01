"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Camera } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    venue: "",
    guestCount: "",
    budget: "",
    services: [],
    message: "",
  });

  // Handle text/select input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox input
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, services: [...prev.services, value] };
      } else {
        return {
          ...prev,
          services: prev.services.filter((service) => service !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    alert("✅ Thank you for your booking request! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      eventType: "",
      venue: "",
      guestCount: "",
      budget: "",
      services: [],
      message: "",
    });
  };

  const servicesOptions = [
    "Wedding Photography",
    "Wedding Videography",
    "Corporate Events",
    "Birthday Parties",
    "Portrait Sessions",
    "Drone Coverage",
    "Event Highlights",
    "Product Photography",
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact &{" "}
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Booking
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? Get in touch with us to
            discuss your requirements and receive a personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-red-400 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg mb-2">Phone</p>
                    <a
                      href="tel:+916654566844"
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 block"
                    >
                      +91 66545 668444
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 block"
                    >
                      +91 98765 432100
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-purple-400 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg mb-2">Email</p>
                    <a
                      href="mailto:something@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block"
                    >
                      something@gmail.com
                    </a>
                    <a
                      href="mailto:info@something.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block"
                    >
                      info@something.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-pink-400 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg mb-2">
                      Location
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Varanasi, Uttar Pradesh <br /> Serving Pan India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Call Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Map */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-red-500/50 transition-all duration-500">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.106!2d83.006!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2fdf!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>

            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg shadow-red-500/50">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Book Your Session
                </h2>
              </div>

               <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone + Date */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Event Type + Venue */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Event Type <span className="text-red-400">*</span>
        </label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-white/20"
          required
        >
          <option value="" className="bg-gray-900">Select event type</option>
          <option value="wedding-photo" className="bg-gray-900">Wedding Photography</option>
          <option value="wedding-video" className="bg-gray-900">Wedding Videography</option>
          <option value="corporate" className="bg-gray-900">Corporate Event</option>
          <option value="birthday" className="bg-gray-900">Birthday Party</option>
          <option value="portrait" className="bg-gray-900">Portrait Session</option>
          <option value="drone" className="bg-gray-900">Drone Coverage</option>
          <option value="product" className="bg-gray-900">Product Photography</option>
        </select>
      </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Venue
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="Event venue or location"
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Guest Count + Budget */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
  <label className="block text-sm font-semibold text-gray-300 mb-2">
    Expected Guest Count
  </label>
  <select
    name="guestCount"
    value={formData.guestCount}
    onChange={handleChange}
    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
               focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent 
               transition-all duration-300 hover:border-white/20"
  >
    <option value="" className="bg-gray-900">Select Guest Count</option>
    <option value="1-200" className="bg-gray-900">1-200 Guests</option>
    <option value="200-500" className="bg-gray-900">200-500 Guests</option>
    <option value="500+" className="bg-gray-900">500+ Guests</option>
    <option value="1000+" className="bg-gray-900">1000+ Guests</option>
  </select>
</div>

<div>
  <label className="block text-sm font-semibold text-gray-300 mb-2">
    Budget Range
  </label>
  <select
    name="budget"
    value={formData.budget}
    onChange={handleChange}
    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
               focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent 
               transition-all duration-300 hover:border-white/20"
  >
    <option value="" className="bg-gray-900">Select Budget Range</option>
    <option value="50k-2L" className="bg-gray-900">₹50,000 - ₹2,00,000</option>
    <option value="2L-5L" className="bg-gray-900">₹2,00,000 - ₹5,00,000</option>
    <option value="5L+" className="bg-gray-900">₹5,00,000+</option>
  </select>
</div>

                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Services Required
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {servicesOptions.map((service, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 text-gray-300 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleCheckboxChange}
                          className="accent-red-500"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us more about your event, special requirements..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group cursor-pointer relative w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Booking Request
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    </section>
  );
};

export default Contact;
