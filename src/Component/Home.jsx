import Head from "next/head";
import Navbar from "@/Component/Navbar";
import Image from "next/image";
import { Camera, Film, Award, Users } from "lucide-react";

const Home = () => {
  return (
    <>
             <Navbar />

      <main className="relative w-full min-h-screen bg-black overflow-hidden">
            
        {/* Background image with advanced overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://studioa.amarramesh.com/wp-content/uploads/2023/01/candid-telugu-wedding-photographer-amarramesh-208.jpg"  
            alt="Event background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[calc(100vh-200px)]">
            
            {/* Left Text Section */}
            <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
              {/* Subtitle badge */}
              

              {/* Main heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                  Professional Event
                  <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mt-2">
                    Photography
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-semibold flex items-center justify-center lg:justify-start gap-3">
                  <Film className="w-6 h-6 lg:w-8 lg:h-8 text-red-500" />
                  Cinematic Videography
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Capturing corporate events, conferences, and special occasions
                with cinematic excellence. From Varanasi to destinations across
                India, we deliver premium visual storytelling that immortalizes your moments.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="group relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Camera className="w-5 h-5" />
                    Book Your Event
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 hover:border-red-400 hover:text-white transition-all duration-300 backdrop-blur-sm">
                  View Portfolio
                </button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 max-w-2xl mx-auto lg:mx-0">
                <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-red-400 mb-2 mx-auto lg:mx-0" />
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-1">500+</h3>
                  <span className="text-gray-400 text-xs lg:text-sm">Happy Clients</span>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-red-400 mb-2 mx-auto lg:mx-0" />
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-1">1000+</h3>
                  <span className="text-gray-400 text-xs lg:text-sm">Events Covered</span>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 text-red-400 mb-2 mx-auto lg:mx-0" />
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-1">15+</h3>
                  <span className="text-gray-400 text-xs lg:text-sm">Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Main image container */}
                <div className="relative h-64 sm:h-80 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-red-500/50 transition-all duration-500">
                  <Image
                    src="https://images.pexels.com/photos/13672870/pexels-photo-13672870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Event Photography"
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-semibold text-sm lg:text-base">✨ Cinematic Excellence</p>
                    <p className="text-gray-400 text-xs lg:text-sm mt-1">Every frame tells a story</p>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-red-500 rounded-tr-2xl opacity-50"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-purple-500 rounded-bl-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </main>
    </>
  );
};

export default Home;