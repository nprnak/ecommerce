"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/images/slider1.jpg",
    title: "New Collection 2024",
    subtitle: "Discover the latest trends in women's fashion",
    buttonText: "Shop Now",
    buttonLink: "/collections/new",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    title: "Summer Sale",
    subtitle: "Up to 50% off on selected items",
    buttonText: "Explore Deals",
    buttonLink: "/sale",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    title: "Premium Dresses",
    subtitle: "Elegant designs for every occasion",
    buttonText: "View Collection",
    buttonLink: "/dresses",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative min-w-full h-full flex items-center justify-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => (window.location.href = slide.buttonLink)}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
