import React from 'react'
import { Heart, Briefcase, Video, Camera, Users, Sparkles, Phone, Mail, Check } from "lucide-react";

const Services = () => {
    const details = [
        {
            id: 1,
            icon: <Heart className="w-8 h-8" />,
            title: "Wedding Photography",   
            description: "Capturing the magic of your special day with timeless wedding photography that tells your unique love story.",
            points: [
                "Pre-Wedding Shoots",
                "Full-Day Coverage",
                "Candid & Posed Shots",
                "Landscape Shots",
            ],
            gradient: "from-red-500/20 to-pink-500/20",
            borderColor: "red-500/30",
            hoverBorder: "red-500/60",
            iconBg: "red-500/20",
            iconColor: "red-400"
        },
        {
            id: 2,
            icon: <Briefcase className="w-8 h-8" />,
            title: "Corporate Events",   
            description: "Professional coverage of conferences, seminars, and corporate gatherings that showcase your brand excellence.",
            points: [
                "Conference Coverage",
                "Team Building Events",
                "Product Launches",
                "Award Ceremonies",
            ],
            gradient: "from-blue-500/20 to-cyan-500/20",
            borderColor: "blue-500/30",
            hoverBorder: "blue-500/60",
            iconBg: "blue-500/20",
            iconColor: "blue-400"
        },
        {
            id: 3,
            icon: <Video className="w-8 h-8" />,
            title: "Cinematic Videography",   
            description: "Creating stunning visual narratives with high-quality cinematic videography that brings your story to life.",
            points: [
                "4K Video Production",
                "Drone Footage",
                "Professional Editing",
                "Color Grading",
            ],
            gradient: "from-purple-500/20 to-pink-500/20",
            borderColor: "purple-500/30",
            hoverBorder: "purple-500/60",
            iconBg: "purple-500/20",
            iconColor: "purple-400"
        },
        {
            id: 4,
            icon: <Camera className="w-8 h-8" />,
            title: "Portrait Photography",   
            description: "Professional portraits that capture personality and character, perfect for personal or business use.",
            points: [
                "Studio Sessions",
                "Outdoor Shoots",
                "Family Portraits",
                "Professional Headshots",
            ],
            gradient: "from-orange-500/20 to-red-500/20",
            borderColor: "orange-500/30",
            hoverBorder: "orange-500/60",
            iconBg: "orange-500/20",
            iconColor: "orange-400"
        },
        {
            id: 5,
            icon: <Users className="w-8 h-8" />,
            title: "Event Coverage",   
            description: "Complete documentation of birthdays, anniversaries, and special celebrations with creative storytelling.",
            points: [
                "Birthday Parties",
                "Anniversary Celebrations",
                "Cultural Events",
                "Social Gatherings",
            ],
            gradient: "from-green-500/20 to-teal-500/20",
            borderColor: "green-500/30",
            hoverBorder: "green-500/60",
            iconBg: "green-500/20",
            iconColor: "green-400"
        },
        {
            id: 6,
            icon: <Sparkles className="w-8 h-8" />,
            title: "Fashion & Commercial",   
            description: "High-end fashion shoots and commercial photography that elevate brands with stunning visual content.",
            points: [
                "Fashion Shoots",
                "Product Photography",
                "Brand Campaigns",
                "Editorial Content",
            ],
            gradient: "from-pink-500/20 to-purple-500/20",
            borderColor: "pink-500/30",
            hoverBorder: "pink-500/60",
            iconBg: "pink-500/20",
            iconColor: "pink-400"
        }
    ];

    return (
        <section id="service" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm mb-4">
                        <Camera className="w-4 h-4 text-red-400" />
                        <span className="text-red-300 text-sm font-medium">What We Offer</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        From intimate ceremonies to grand celebrations, we offer comprehensive photography and videography services tailored to your unique needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
                    {details.map((service) => (
                        <div 
                            key={service.id}
                            className={`group bg-gradient-to-br ${service.gradient} backdrop-blur-md border border-${service.borderColor} rounded-2xl p-6 lg:p-8 hover:border-${service.hoverBorder} hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                        >
                            {/* Icon */}
                            <div className={`flex items-center justify-center w-16 h-16 bg-${service.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 text-${service.iconColor}`}>
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                                {service.description}
                            </p>

                            {/* Points List */}
                            <ul className="space-y-2">
                                {service.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-300 text-sm lg:text-base">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover effect line */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                    Learn more →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative">
                    {/* Decorative glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
                    
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
                        <div className="max-w-3xl mx-auto">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-6 shadow-lg shadow-red-500/50">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Ready to Create Something{" "}
                                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    Beautiful?
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
                                Let's discuss your vision and create a customized package that perfectly fits your needs and budget.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        Call Us Now
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>

                                <button className="group border-2 border-red-500 text-red-400 px-8 py-4 rounded-xl font-semibold hover:bg-red-500/10 hover:border-red-400 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    Contact Us
                                </button>
                            </div>

                            {/* Additional info */}
                            <p className="text-gray-500 text-sm mt-6">
                                🎉 Special packages available for multiple bookings
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </section>
    );
};

export default Services;