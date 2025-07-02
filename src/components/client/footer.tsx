"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Food and Grocery", href: "/food-grocery" },
    { name: "Puja Items", href: "/puja-items" },
    { name: "Clothing & Accessories", href: "/clothing-accessories" },
    { name: "Health & Beauty", href: "/health-beauty" },
    { name: "New Items", href: "/new-items" },
    { name: "Bundle & Save", href: "/bundle-save" },
    { name: "Find Products", href: "/find-products" },
    { name: "Noodles", href: "/noodles" },
    { name: "TITAURAS", href: "/titauras" },
    { name: "Kitcheware", href: "/kitcheware" },
  ];

  const informations = [
    { name: "Custom Orders", href: "/custom-orders" },
    { name: "Contact Us", href: "/contact" },
    { name: "Location", href: "/location" },
    { name: "Discounts", href: "/discounts" },
    { name: "Blogs", href: "/blogs" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Return Policy", href: "/return-policy" },
    { name: "Shipping Terms", href: "/shipping-terms" },
    { name: "Terms and Conditions", href: "/terms-conditions" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-rose-500/5" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Showroom Information */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-pink-100 relative">
                SHOWROOM
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
              </h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-pink-200 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg px-3 py-1 inline-block">
                  WE HAVE MOVED
                </p>
                <address className="text-sm not-italic leading-relaxed text-gray-300">
                  11250 HARRY HINES BLVD
                  <br />
                  SUITE 208
                  <br />
                  DALLAS TX 75229
                </address>
                <p className="text-sm pt-2 text-gray-300">
                  <span className="font-medium text-pink-200">Phone:</span>{" "}
                  972-316-0700
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-emerald-100">
                Quick Links
              </h3>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-emerald-200 hover:text-emerald-100 hover:underline transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Informations */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-emerald-100">
                Informations
              </h3>
              <nav className="space-y-2">
                {informations.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="block text-sm text-emerald-200 hover:text-emerald-100 hover:underline transition-colors duration-200"
                  >
                    {info.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Policies */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-emerald-100">
                Policies
              </h3>
              <nav className="space-y-2">
                {policies.map((policy, index) => (
                  <a
                    key={index}
                    href={policy.href}
                    className="block text-sm text-emerald-200 hover:text-emerald-100 hover:underline transition-colors duration-200"
                  >
                    {policy.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-emerald-100">
                Subscribe To Our Emails
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-emerald-50 border-emerald-300 text-emerald-900 placeholder:text-emerald-600 focus:border-emerald-400 focus:ring-emerald-400"
                  />
                  <Button
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-700 hover:bg-emerald-600 text-emerald-50 p-2"
                    onClick={() => console.log("Subscribe clicked")}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="p-2 bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-emerald-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-300">
              <p>&copy; 2024 Showroom. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Designed with ❤️ for our community</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
