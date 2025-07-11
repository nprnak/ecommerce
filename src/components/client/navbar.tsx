"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import Image from "next/image";

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const bannerImages = [
    {
      id: 1,
      url: "/images/slider1.jpg",
      alt: "iPhone 14 Series Banner",
      title: "iPhone 14 Series",
      description: "Up to 10% off Voucher",
    },
    {
      id: 2,
      url: "/images/slider2.jpg",
      alt: "Summer Collection Banner",
      title: "Summer Collection",
      description: "Up to 30% off Sports",
    },
    {
      id: 3,
      url: "/images/slider3.jpg",
      alt: "Audio Experience Banner",
      title: "Premium Audio",
      description: "Best Sound Quality",
    },
    {
      id: 4,
      url: "/images/slider1.jpg",
      alt: "MacBook Pro Banner",
      title: "MacBook Pro",
      description: "Power Your Creativity",
    },
    {
      id: 5,
      url: "/images/slider2.jpg",
      alt: "Photography Banner",
      title: "Photography Gear",
      description: "Capture Memories",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={image.url}
              alt={image.alt}
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const EcommerceNavbar = () => {
  const { theme, setTheme } = useTheme();

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/signup" },
  ];

  const sidebarCategories = [
    { label: "Woman's Fashion", hasSubmenu: true },
    { label: "Men's Fashion", hasSubmenu: true },
    { label: "Electronics", hasSubmenu: false },
    { label: "Home & Lifestyle", hasSubmenu: false },
    { label: "Medicine", hasSubmenu: false },
    { label: "Sports & Outdoor", hasSubmenu: false },
    { label: "Baby's & Toys", hasSubmenu: false },
    { label: "Groceries & Pets", hasSubmenu: false },
    { label: "Health & Beauty", hasSubmenu: false },
  ];

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-3 text-sm">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <Button variant="link" className="text-white underline ml-2 p-0 h-auto">
          ShopNow
        </Button>
        <div className="absolute right-4 top-3">
          <Select value="English">
            <SelectTrigger className="w-auto border-none bg-transparent text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
              <SelectItem value="French">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">Exclusive</div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-64 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Toggle Theme
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 space-y-2">
            {sidebarCategories.map((category) => (
              <div
                key={category.label}
                className="flex items-center justify-between py-2 text-sm cursor-pointer hover:text-primary transition-colors"
              >
                <span>{category.label}</span>
                {category.hasSubmenu && <ChevronRight className="h-4 w-4" />}
              </div>
            ))}
          </aside>

          {/* Main Banner Carousel */}
          <div className="flex-1">
            <BannerCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceNavbar;
