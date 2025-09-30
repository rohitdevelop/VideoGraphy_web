import React from 'react'
import { Camera, Award, Heart, Sparkles, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative bg-black py-16 sm:py-20 lg:py-28 overflow-hidden">
   
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
         
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Mr. Devesh & Team</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Story Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-red-500/50 transition-all duration-300">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 mb-4 flex items-center gap-2">
                OUR STORY
              </h2>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                With over 8 years of experience in the photography and videography industry, Mr. Devesh leads a passionate team of creative professionals dedicated to capturing life's most precious moments.
              </p>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg mt-4">
                Our journey began with a simple belief: every moment tells a story, and every story deserves to be told beautifully. From intimate weddings to grand corporate events, we bring artistry and technical excellence to every project.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="group bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-white text-center mb-1">500+</p>
                <p className="text-gray-400 text-sm lg:text-base text-center">Events Captured</p>
              </div>
              
              <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-white text-center mb-1">98%</p>
                <p className="text-gray-400 text-sm lg:text-base text-center">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative group">
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Image container */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-red-500/50 transition-all duration-500">
              <img 
                src="https://cdn-blog.superprof.com/blog_in/wp-content/uploads/2020/01/in-photo-photo-1.jpg"
                alt="Mr. Devesh - Lead Photographer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Photographer badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex-shrink-0">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Mr. Devesh</p>
                      <p className="text-gray-400 text-sm">Lead Photographer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-4 border-r-4 border-red-500 rounded-tr-2xl opacity-50"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-4 border-l-4 border-purple-500 rounded-bl-2xl opacity-50"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              What Drives Us
            </h2>
            <p className="text-gray-400 text-lg">Our core values that define every capture</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Creative Vision */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-red-500/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Creative Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                We see beyond the lens, capturing not just images but emotions and stories that last a lifetime.
              </p>
            </div>

            {/* Excellence */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Every project receives our complete attention to detail and commitment to delivering exceptional results.
              </p>
            </div>

            {/* Passion */}
            <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-pink-500/50 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Passion</h3>
              <p className="text-gray-400 leading-relaxed">
                Our love for photography and videography drives us to constantly innovate and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-16"></div>
    </section>
  )
}

export default About