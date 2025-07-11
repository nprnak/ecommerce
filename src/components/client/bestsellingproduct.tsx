"use client";
import React, { useState } from "react";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge: string;
}

interface StatItem {
  value: string;
  label: string;
  color: string;
}

const BestSellingProducts: React.FC = () => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const products: Product[] = [
    {
      id: 1,
      name: "The north coat",
      price: 260,
      originalPrice: 360,
      rating: 4.8,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
      category: "Fashion",
      badge: "This Month",
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 4.9,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "Accessories",
      badge: "This Month",
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4.7,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1591238371984-9c98597c8795?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "This Month",
    },
    {
      id: 4,
      name: "Small BookShelf",
      price: 360,
      originalPrice: null,
      rating: 4.6,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      category: "Furniture",
      badge: "This Month",
    },
  ];

  const stats: StatItem[] = [
    {
      value: "1,500+",
      label: "Products Sold",
      color: "text-blue-600",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      color: "text-green-600",
    },
    {
      value: "4.8",
      label: "Average Rating",
      color: "text-purple-600",
    },
  ];

  const toggleFavorite = (productId: number): void => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const calculateDiscount = (price: number, originalPrice: number): number => {
    return Math.round((1 - price / originalPrice) * 100);
  };

  const renderStars = (rating: number): React.ReactElement[] => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-8 bg-red-500 rounded"></div>
              <span className="text-red-500 font-semibold">This Month</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Best Selling Products
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-md">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full shadow-md hover:scale-110 transition-transform ${
                        favorites.has(product.id)
                          ? "bg-red-500 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Heart
                        className="w-4 h-4"
                        fill={
                          favorites.has(product.id) ? "currentColor" : "none"
                        }
                      />
                    </button>

                    <button className="p-2 bg-white text-gray-700 rounded-full shadow-md hover:scale-110 transition-transform hover:bg-gray-50">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                </div>

                {product.originalPrice && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      -{calculateDiscount(product.price, product.originalPrice)}
                      %
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-red-500">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat: StatItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
