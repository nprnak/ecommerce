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
} from "lucide-react";

const ProductPage = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productImages = [
    "/api/placeholder/600/700",
    "/api/placeholder/600/700",
    "/api/placeholder/600/700",
    "/api/placeholder/600/700",
    "/api/placeholder/600/700",
  ];

  const variants = [
    { id: 0, name: "Floral Beige", image: "/api/placeholder/80/80" },
    { id: 1, name: "Floral Green", image: "/api/placeholder/80/80" },
    { id: 2, name: "Floral Orange", image: "/api/placeholder/80/80" },
    { id: 3, name: "Floral Yellow", image: "/api/placeholder/80/80" },
    { id: 4, name: "Floral Lime", image: "/api/placeholder/80/80" },
    { id: 5, name: "Floral Grey", image: "/api/placeholder/80/80" },
  ];

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Floral Sheer Button-Down Shirt"
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index
                      ? "border-primary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
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
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Floral Sheer Button-Down Shirt
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">0 reviews</span>
                <button className="text-sm text-primary hover:underline">
                  Write a review
                </button>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-muted-foreground">
                  Product Code:
                </span>
                <span className="text-sm font-medium">Shirt</span>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <span className="text-sm text-muted-foreground">
                  Availability:
                </span>
                <span className="text-sm font-medium text-green-600">
                  In Stock
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-foreground">
                Rs.2,799
              </span>
              <span className="text-lg text-muted-foreground line-through">
                Rs.3,499
              </span>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This floral sheer shirt brings a touch of romantic elegance to
                any wardrobe. Crafted with a lightweight, breathable fabric, it
                features a classic button-down front and a soft collar for a
                timeless silhouette. The delicate floral pattern adds a feminine
                and graceful vibe, making it ideal for pairing with tailored
                trousers, skirts, or layering over a camisole for a chic daytime
                or evening look.
              </p>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-red-500 mr-2">*</span>
                Variant3
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedVariant === variant.id
                        ? "border-primary ring-2 ring-primary ring-offset-2"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedVariant === variant.id && (
                      <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Qty</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-0 focus:ring-0 focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add To Cart</span>
                </button>

                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  Buy Now
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-md border-2 transition-colors ${
                    isWishlisted
                      ? "bg-red-50 border-red-200 text-red-600"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
