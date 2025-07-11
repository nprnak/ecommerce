"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Eye, Star } from "lucide-react";
import Image from "next/image";

// Type definitions
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  initialTime?: TimeLeft;
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

interface CountdownItemProps {
  value: number;
  label: string;
}

// Separate Timer Component
const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime = { days: 3, hours: 23, minutes: 19, seconds: 56 },
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-xs font-medium text-slate-600 mb-1">{label}</div>
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm border">
        <span className="text-2xl font-bold text-slate-900">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      <CountdownItem value={timeLeft.days} label="Days" />
      <div className="text-red-500 text-3xl font-bold">:</div>
      <CountdownItem value={timeLeft.hours} label="Hours" />
      <div className="text-red-500 text-3xl font-bold">:</div>
      <CountdownItem value={timeLeft.minutes} label="Minutes" />
      <div className="text-red-500 text-3xl font-bold">:</div>
      <CountdownItem value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

// Separate Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Product Image Area */}
      <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          -{product.discount}%
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 rounded-full transition-all duration-200 ${
              isWishlisted
                ? "bg-red-500 text-white shadow-md"
                : "bg-white hover:bg-red-50 text-slate-600 hover:text-red-500"
            } shadow-sm`}
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button className="p-2 bg-white hover:bg-slate-50 text-slate-600 rounded-full shadow-sm transition-all duration-200">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Add to Cart Button - Using group-hover */}
        <div className="absolute bottom-0 left-0 right-0 transform transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full bg-slate-900 text-white py-3 font-medium hover:bg-slate-800 transition-colors duration-200">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-slate-900 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-red-500">
            ${product.price}
          </span>
          <span className="text-slate-500 line-through">
            ${product.originalPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-slate-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

// Main Carousel Component
const FlashSalesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const products: Product[] = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
      colors: ["bg-red-500", "bg-blue-500"],
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.0,
      reviews: 75,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      colors: ["bg-slate-800", "bg-slate-600"],
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.5,
      reviews: 99,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      colors: ["bg-black", "bg-red-600"],
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.5,
      reviews: 99,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      colors: ["bg-orange-100", "bg-orange-200"],
    },
    {
      id: 5,
      name: "Gaming Headset Pro",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
      colors: ["bg-purple-500", "bg-pink-500"],
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 bg-slate-50">
      {/* Header Section */}
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-6">
          {/* Section Indicator */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-semibold text-lg">
              Today&apos;s
            </span>
          </div>

          {/* Title and Countdown */}
          <div className="flex items-center gap-12">
            <h1 className="text-4xl font-bold text-slate-900">Flash Sales</h1>

            {/* Countdown Timer Component */}
            <CountdownTimer />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/4 flex-shrink-0 px-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(maxIndex + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-red-500 scale-125"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSalesCarousel;
