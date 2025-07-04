import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const ProductShowcase = () => {
  const categories = [
    {
      id: 1,
      title: "Dress Forms",
      slug: "dress-forms",
      image: "/images/happy new year.png",
      description: "Professional dress forms for fashion design and tailoring",
      buttonText: "SHOP NOW",
    },
    {
      id: 2,
      title: "Sewing Baskets & Storage",
      slug: "sewing-baskets",
      image: "/images/sewing.jpg",
      description:
        "Organize your sewing supplies with beautiful storage solutions",
      buttonText: "SHOP NOW",
    },
    {
      id: 3,
      title: "Elastics",
      slug: "dress-forms",
      image: "/images/elastic.jpg",
      description: "High-quality elastic bands for all your sewing projects",
      buttonText: "SHOP NOW",
    },
    {
      id: 4,
      title: "Knitting Needles",
      slug: "dress-forms",
      image: "/images/needle.jpg",
      description: "Premium knitting needles for all skill levels",
      buttonText: "SHOP NOW",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-wide">
            EXPLORE BY CATEGORY
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <Link href={`/products/${category.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      {category.buttonText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Discover our complete collection of premium sewing and crafting
              supplies. From professional-grade tools to beautiful storage
              solutions, we have everything you need to bring your creative
              vision to life.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
