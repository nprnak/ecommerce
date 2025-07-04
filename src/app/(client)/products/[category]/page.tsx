"use client";
import React, { useState } from "react";
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Plus,
  Minus,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Zap,
} from "lucide-react";
import Image from "next/image";

const ProductPage = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const productImages = [
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=700&fit=crop",
  ];

  const variants = [
    { id: 0, name: "Floral Beige", color: "#F5F5DC" },
    { id: 1, name: "Floral Green", color: "#90EE90" },
    { id: 2, name: "Floral Orange", color: "#FFA07A" },
    { id: 3, name: "Floral Yellow", color: "#FFD700" },
    { id: 4, name: "Floral Lime", color: "#32CD32" },
    { id: 5, name: "Floral Grey", color: "#A9A9A9" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">
              Home
            </span>
            <span>/</span>
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">
              Women
            </span>
            <span>/</span>
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">
              Shirts
            </span>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">
              Floral Sheer Button-Down Shirt
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden group">
              <Image
                src={productImages[currentImageIndex]}
                alt="Floral Sheer Button-Down Shirt"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Sale Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                20% OFF
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>

              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index
                      ? "border-blue-500 ring-2 ring-blue-500/20 scale-105"
                      : "border-slate-200 dark:border-slate-700 hover:border-blue-500/50"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                    Floral Sheer Button-Down Shirt
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    by Fashion Brand
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Share2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isWishlisted
                        ? "bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300 dark:text-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  4.0 (128 reviews)
                </span>
                <button className="text-sm text-blue-500 hover:text-blue-600 hover:underline transition-colors">
                  Write a review
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  Rs.2,799
                </span>
                <span className="text-xl text-slate-500 dark:text-slate-400 line-through">
                  Rs.3,499
                </span>
                <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-1 rounded-md text-sm font-medium">
                  Save 20%
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Inclusive of all taxes • Free shipping above Rs.999
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 py-4 border-y border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Free Shipping
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Easy Returns
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  2 Year Warranty
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                This floral sheer shirt brings a touch of romantic elegance to
                any wardrobe. Crafted with a lightweight, breathable fabric, it
                features a classic button-down front and a soft collar for a
                timeless silhouette. The delicate floral pattern adds a feminine
                and graceful vibe, making it perfect for both casual and formal
                occasions.
              </p>
            </div>

            {/* Color Variants */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center text-slate-900 dark:text-white">
                <span className="text-red-500 mr-2">*</span>
                Color: {variants[selectedVariant].name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? "border-blue-500 ring-2 ring-blue-500/20 scale-110"
                        : "border-slate-200 dark:border-slate-700 hover:border-blue-500/50"
                    }`}
                    style={{ backgroundColor: variant.color }}
                  >
                    {selectedVariant === variant.id && (
                      <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center text-slate-900 dark:text-white">
                  <span className="text-red-500 mr-2">*</span>
                  Size: {selectedSize}
                </h3>
                <button className="text-sm text-blue-500 hover:text-blue-600 hover:underline transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-500/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Quantity:
                </span>
                <div className="flex items-center border-2 border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-0 bg-transparent focus:outline-none text-slate-900 dark:text-white"
                    min="1"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
                <span className="text-sm text-green-600 font-medium">
                  Only 3 left in stock!
                </span>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add To Cart</span>
                </button>

                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                  <Zap className="w-5 h-5" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">SKU:</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  FSB-001
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Availability:
                </span>
                <span className="font-medium text-green-600 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  In Stock
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Category:
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  Women&aops;s Clothing
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Tags:
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  Floral, Sheer, Button-Down
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
