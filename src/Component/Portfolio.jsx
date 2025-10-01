"use client"

import React, { useState } from 'react'
import { Camera, X, ZoomIn, Heart } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const imgdetails = [
        {
            id: 1,
            category: "wedding",
            img: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
            title: "Elegant Wedding Ceremony",
            description: "Beautiful outdoor wedding with romantic lighting",
        },
        {
            id: 2,
            category: "wedding",
            img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
            title: "Traditional Wedding",
            description: "Capturing traditional moments with cultural essence",
        },
        {
            id: 3,
            category: "wedding",
            img: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
            title: "Romantic Couple Shoot",
            description: "Intimate moments in golden hour lighting",
        },
        {
            id: 4,
            category: "corporate",
            img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
            title: "Business Conference",
            description: "Professional corporate event coverage",
        },
        {
            id: 5,
            category: "corporate",
            img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
            title: "Team Building Event",
            description: "Dynamic team collaboration moments",
        },
        {
            id: 6,
            category: "portrait",
            img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
            title: "Professional Headshot",
            description: "Studio portrait with creative lighting",
        },
        {
            id: 7,
            category: "portrait",
            img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
            title: "Fashion Portrait",
            description: "Editorial style portrait photography",
        },
        {
            id: 8,
            category: "events",
            img: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
            title: "Birthday Celebration",
            description: "Joyful moments from birthday party",
        },
        {
            id: 9,
            category: "events",
            img: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
            title: "Cultural Festival",
            description: "Vibrant cultural event documentation",
        },
    ];

    const filters = [
        { name: "All Works", value: "all", count: 9 },
        { name: "Wedding", value: "wedding", count: 3 },
        { name: "Corporate", value: "corporate", count: 2 },
        { name: "Portraits", value: "portrait", count: 2 },
        { name: "Events", value: "events", count: 2 },
    ];

    const filteredImages = activeFilter === "all" 
        ? imgdetails 
        : imgdetails.filter(img => img.category === activeFilter);

    const visibleImages = filteredImages.slice(0, visibleCount);
    const hasMore = visibleCount < filteredImages.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    return (
        <section id="portfolio" className="relative bg-black py-16 sm:py-20 lg:py-28 overflow-hidden">
 

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                   
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">Portfolio</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Explore our collection of captured moments, from intimate weddings to grand celebrations, each telling its unique story.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => {
                                setActiveFilter(filter.value);
                                setVisibleCount(6);
                            }}
                            className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                                activeFilter === filter.value
                                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50"
                                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-pink-500/50 hover:text-white backdrop-blur-sm"
                            }`}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {filter.name}
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    activeFilter === filter.value
                                        ? "bg-white/20"
                                        : "bg-white/10"
                                }`}>
                                    {filter.count}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {visibleImages.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                            style={{
                                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                            }}
                            onClick={() => setSelectedImage(item)}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                
                                {/* Zoom icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn className="w-5 h-5 text-white" />
                                </div>

                                {/* Category badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full">
                                    <span className="text-white text-xs font-semibold uppercase">{item.category}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom hover line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="text-center">
                        <button
                            onClick={handleLoadMore}
                            className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Load More Works
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                )}
            </div>

            {/* Full Screen Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-red-500 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 z-50"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Image container */}
                    <div 
                        className="relative max-w-6xl w-full max-h-[90vh] animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Main image */}
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                            <img
                                src={selectedImage.img}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            
                            {/* Image info overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase mb-2">
                                            {selectedImage.category}
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                            {selectedImage.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm sm:text-base">
                                            {selectedImage.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.4s ease-out;
                }
            `}</style>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        </section>
    );
};

export default Portfolio;