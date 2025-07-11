"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

const categories = [
  {
    id: "phones",
    name: "Phones",
    icon: Smartphone,
  },
  {
    id: "computers",
    name: "Computers",
    icon: Monitor,
  },
  {
    id: "smartwatch",
    name: "SmartWatch",
    icon: Watch,
  },
  {
    id: "camera",
    name: "Camera",
    icon: Camera,
  },
  {
    id: "headphones",
    name: "HeadPhones",
    icon: Headphones,
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
  },
  {
    id: "tablets",
    name: "Tablets",
    icon: Monitor,
  },
  {
    id: "audio",
    name: "Audio",
    icon: Headphones,
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: Watch,
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: Smartphone,
  },
];

export default function BrowseCategories() {
  const [activeCategory, setActiveCategory] = useState("camera");
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 6;
  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="flex items-end justify-between mb-12">
          {/* Left Side - Badge and Title */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-gradient-to-b from-red-500 to-red-600 rounded-sm shadow-sm"></div>
              <span className="text-red-500 font-semibold text-lg tracking-wide">
                Categories
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900">
              Browse By Category
            </h1>
          </div>

          {/* Right Side - Navigation */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Categories Carousel */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = category.id === activeCategory;

              return (
                <div key={category.id} className="w-1/6 flex-shrink-0 px-3">
                  <div
                    className={`cursor-pointer transition-all duration-300 border-2 group overflow-hidden rounded-lg ${
                      isActive
                        ? "bg-gradient-to-br from-red-500 to-red-600 text-white border-red-500 shadow-xl scale-105 transform"
                        : "bg-white text-gray-900 border-gray-200 hover:border-red-300 hover:shadow-lg hover:scale-102 transform hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="flex flex-col items-center justify-center p-6 h-32 relative">
                      <IconComponent
                        className={`h-8 w-8 mb-3 stroke-[1.5] transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 group-hover:text-red-500"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium text-center transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-700 group-hover:text-gray-900"
                        }`}
                      >
                        {category.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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

        {/* Selected Category Info */}
        <div className="mt-16 rounded-2xl p-8 shadow-lg border bg-white border-gray-200 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {categories.find((cat) => cat.id === activeCategory)?.name}{" "}
                Collection
              </h2>
              <p className="text-lg text-gray-600">
                Explore our premium{" "}
                {categories
                  .find((cat) => cat.id === activeCategory)
                  ?.name.toLowerCase()}{" "}
                collection
              </p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
