"use client"

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Camera, Award, Users, Heart } from "lucide-react";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const clientsays = [
        {
            id: 1,
            name: "Rohit Kumar",
            clientpicture: "https://randomuser.me/api/portraits/men/32.jpg",
            plan: "Wedding Photography",
            rating: 5,
            feedback: "Excellent service and stunning photography! Highly recommend Mr. Devesh & Team for capturing special moments. They made our wedding day unforgettable.",
        },
        {
            id: 2,
            name: "Priya Sharma",
            clientpicture: "https://randomuser.me/api/portraits/women/44.jpg",
            plan: "Corporate Event",
            rating: 5,
            feedback: "Professional team with incredible attention to detail. The photos from our corporate event exceeded all expectations. Truly remarkable work!",
        },
        {
            id: 3,
            name: "Amit Patel",
            clientpicture: "https://randomuser.me/api/portraits/men/52.jpg",
            plan: "Wedding Photography",
            rating: 5,
            feedback: "Amazing experience from start to finish! The team was friendly, creative, and delivered breathtaking photos. Worth every penny!",
        },
        {
            id: 4,
            name: "Sneha Reddy",
            clientpicture: "https://randomuser.me/api/portraits/women/68.jpg",
            plan: "Event Coverage",
            rating: 5,
            feedback: "Captured every emotion perfectly! The team was unobtrusive yet managed to get all the important moments. Absolutely loved the final album.",
        },
        {
            id: 5,
            name: "Rajesh Singh",
            clientpicture: "https://randomuser.me/api/portraits/men/75.jpg",
            plan: "Birthday Photography",
            rating: 5,
            feedback: "Made our daughter's birthday special with beautiful photos! The team was patient with kids and very professional. Highly recommended!",
        },
        {
            id: 6,
            name: "Neha Gupta",
            clientpicture: "https://randomuser.me/api/portraits/women/23.jpg",
            plan: "Wedding Photography",
            rating: 4,
            feedback: "Great photography and wonderful team! They captured our wedding beautifully. Very happy with the results and would definitely recommend.",
        },
    ];

    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            count: "500+",
            label: "Happy Clients",
            gradient: "from-blue-500/20 to-cyan-500/20",
            iconColor: "blue-400"
        },
        {
            icon: <Camera className="w-8 h-8" />,
            count: "1000+",
            label: "Events Captured",
            gradient: "from-purple-500/20 to-pink-500/20",
            iconColor: "purple-400"
        },
        {
            icon: <Award className="w-8 h-8" />,
            count: "98%",
            label: "Satisfaction Rate",
            gradient: "from-orange-500/20 to-red-500/20",
            iconColor: "orange-400"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            count: "250+",
            label: "5-Star Reviews",
            gradient: "from-pink-500/20 to-red-500/20",
            iconColor: "pink-400"
        },
    ];

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % clientsays.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, clientsays.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % clientsays.length);
        setIsAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + clientsays.length) % clientsays.length);
        setIsAutoPlay(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlay(false);
    };

    return (
        <section id="testimonials" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-500/50 rounded-full backdrop-blur-sm mb-4">
                        <Quote className="w-4 h-4 text-pink-400" />
                        <span className="text-pink-300 text-sm font-medium">Client Stories</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        What Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our happy clients have to say about their experience with us.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative mb-16 lg:mb-20">
                    {/* Main carousel container */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>

                        {/* Carousel wrapper */}
                        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                            {/* Testimonials */}
                            <div className="relative min-h-[400px] sm:min-h-[350px]">
                                {clientsays.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`absolute inset-0 p-8 sm:p-12 transition-all duration-700 ${
                                            index === currentSlide
                                                ? "opacity-100 translate-x-0"
                                                : index < currentSlide
                                                ? "opacity-0 -translate-x-full"
                                                : "opacity-0 translate-x-full"
                                        }`}
                                    >
                                        {/* Quote icon */}
                                        <div className="absolute top-8 left-8 opacity-10">
                                            <Quote className="w-20 h-20 text-pink-400" />
                                        </div>

                                        <div className="relative flex flex-col items-center text-center">
                                            {/* Client image */}
                                            <div className="relative mb-6">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
                                                <img
                                                    src={testimonial.clientpicture}
                                                    alt={testimonial.name}
                                                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/20 object-cover"
                                                />
                                            </div>

                                            {/* Stars */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${
                                                            i < testimonial.rating
                                                                ? "fill-yellow-400 text-yellow-400"
                                                                : "text-gray-600"
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Feedback */}
                                            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl">
                                                "{testimonial.feedback}"
                                            </p>

                                            {/* Client info */}
                                            <div>
                                                <h3 className="text-white font-bold text-xl mb-1">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-pink-400 text-sm font-medium">
                                                    {testimonial.plan}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-pink-500 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-pink-500 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Dots navigation */}
                        <div className="flex justify-center gap-2 mt-8">
                            {clientsays.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentSlide
                                            ? "w-8 h-3 bg-gradient-to-r from-pink-500 to-purple-500"
                                            : "w-3 h-3 bg-white/20 hover:bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group bg-gradient-to-br ${stat.gradient} backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:scale-105 transition-all duration-300 hover:border-${stat.iconColor}/50`}
                        >
                            <div className={`flex items-center justify-center w-16 h-16 bg-${stat.iconColor}/20 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 text-${stat.iconColor}`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-2">
                                {stat.count}
                            </h3>
                            <p className="text-gray-400 text-sm lg:text-base text-center">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        </section>
    );
};

export default Testimonials;