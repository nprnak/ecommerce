"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../toggle-theme";

const categorySubcategories = {
  tops: [
    "Shirts",
    "Silk Tops",
    "T-Shirts",
    "Basic T-Shirts",
    "Crop Tops",
    "Chiffon Tops",
    "Cotton Tops",
    "Hoodies & Sweatshirt",
    "Sweater",
  ],
  bottoms: [
    "Jeans",
    "Trousers",
    "Leggings",
    "Shorts",
    "Skirts",
    "Palazzo Pants",
    "Culottes",
    "Joggers",
    "Formal Pants",
  ],
  dresses: [
    "Casual Dresses",
    "Formal Dresses",
    "Party Dresses",
    "Maxi Dresses",
    "Mini Dresses",
    "Midi Dresses",
    "Cocktail Dresses",
    "Summer Dresses",
    "Evening Gowns",
  ],
  outerwears: [
    "Jackets",
    "Coats",
    "Blazers",
    "Cardigans",
    "Hoodies",
    "Vests",
    "Ponchos",
    "Shrugs",
    "Windbreakers",
  ],
  shoes: [
    "Heels",
    "Flats",
    "Sneakers",
    "Boots",
    "Sandals",
    "Loafers",
    "Wedges",
    "Pumps",
    "Athletic Shoes",
  ],
  bags: [
    "Handbags",
    "Shoulder Bags",
    "Tote Bags",
    "Crossbody Bags",
    "Clutches",
    "Backpacks",
    "Wallets",
    "Purses",
    "Travel Bags",
  ],
  "active-wear": [
    "Sports Bras",
    "Yoga Pants",
    "Athletic Shorts",
    "Tank Tops",
    "Track Suits",
    "Gym Wear",
    "Swimwear",
    "Running Gear",
    "Fitness Accessories",
  ],
  men: [
    "Men's Shirts",
    "Men's T-Shirts",
    "Men's Jeans",
    "Men's Trousers",
    "Men's Jackets",
    "Men's Shoes",
    "Men's Accessories",
    "Men's Underwear",
    "Men's Suits",
  ],
};

const mainCategories = [
  { name: "Tops", href: "/tops", hasDropdown: true, key: "tops" },
  { name: "Bottoms", href: "/bottoms", hasDropdown: true, key: "bottoms" },
  { name: "Dresses", href: "/dresses", hasDropdown: true, key: "dresses" },
  {
    name: "Outerwears",
    href: "/outerwears",
    hasDropdown: true,
    key: "outerwears",
  },
  { name: "Shoes", href: "/shoes", hasDropdown: true, key: "shoes" },
  { name: "Bags", href: "/bags", hasDropdown: true, key: "bags" },
  {
    name: "Active Wear",
    href: "/active-wear",
    hasDropdown: true,
    key: "active-wear",
  },
  { name: "Men", href: "/men", hasDropdown: true, key: "men" },
];

export default function EcommerceNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const cartItemCount = 0; // This would come from your cart state

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  return (
    <header className="w-full border-b bg-background">
      {/* Top banner */}
      <div className="bg-slate-800 text-white py-2 relative">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-center text-sm md:text-base font-medium flex-1">
            Women's Clothing Store In Kathmandu - Shop The Best Ladies Dress In
            Nepal
          </h1>
          <div className="flex items-center space-x-4">
            {/* Account dropdown in banner */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hidden md:flex items-center space-x-1 text-white hover:text-gray-200 hover:bg-slate-700"
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm">My Account</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Create Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-foreground">EVE WOMENS</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {mainCategories.map((category, index) => (
                  <NavigationMenuItem key={category.name}>
                    {category.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="text-base font-medium hover:text-pink-500 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 relative group">
                          <span className="relative z-10">{category.name}</span>
                          <div
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                              index % 4 === 0
                                ? "from-pink-500 to-rose-500"
                                : index % 4 === 1
                                ? "from-purple-500 to-indigo-500"
                                : index % 4 === 2
                                ? "from-blue-500 to-cyan-500"
                                : "from-emerald-500 to-teal-500"
                            }`}
                          />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[900px] p-8 bg-gradient-to-br from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
                            <div className="mb-6">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {category.name}
                              </h3>
                              <div
                                className={`w-16 h-1 bg-gradient-to-r rounded-full ${
                                  index % 4 === 0
                                    ? "from-pink-500 to-rose-500"
                                    : index % 4 === 1
                                    ? "from-purple-500 to-indigo-500"
                                    : index % 4 === 2
                                    ? "from-blue-500 to-cyan-500"
                                    : "from-emerald-500 to-teal-500"
                                }`}
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                              {categorySubcategories[category.key].map(
                                (item, itemIndex) => (
                                  <NavigationMenuLink key={item} asChild>
                                    <Link
                                      href={`${category.href}/${item
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                        .replace("&", "and")
                                        .replace("'", "")}`}
                                      className="group block p-3 text-sm hover:bg-white dark:hover:bg-gray-800 rounded-xl transition-all duration-200 hover:shadow-md border border-transparent hover:border-pink-100 dark:hover:border-pink-800"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                          {item}
                                        </span>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                )
                              )}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={category.href}
                        className="text-base font-medium hover:text-pink-500 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 relative group"
                      >
                        <span className="relative z-10">{category.name}</span>
                        <div
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                            index % 4 === 0
                              ? "from-pink-500 to-rose-500"
                              : index % 4 === 1
                              ? "from-purple-500 to-indigo-500"
                              : index % 4 === 2
                              ? "from-blue-500 to-cyan-500"
                              : "from-emerald-500 to-teal-500"
                          }`}
                        />
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 transition-all duration-200"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 transition-all duration-200"
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-pink-500 to-rose-500 border-0 animate-pulse"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-pink-50 dark:hover:bg-pink-950"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 p-0 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800"
              >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">EVE WOMENS</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col h-full overflow-y-auto">
                  {/* Mobile Account Section */}
                  <div className="p-4 border-b border-pink-100 dark:border-gray-700">
                    <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">My Account</p>
                        <p className="text-xs text-muted-foreground">
                          Sign in to continue
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Mobile Categories */}
                  <div className="flex-1 p-4 space-y-2">
                    {mainCategories.map((category, index) => (
                      <div key={category.name} className="group">
                        {/* Category Header */}
                        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                          <Link
                            href={category.href}
                            className="flex-1 p-4 text-base font-medium hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 dark:hover:from-pink-900/20 dark:hover:to-purple-900/20 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-2 h-8 rounded-full bg-gradient-to-b ${
                                  index % 4 === 0
                                    ? "from-pink-500 to-rose-500"
                                    : index % 4 === 1
                                    ? "from-purple-500 to-indigo-500"
                                    : index % 4 === 2
                                    ? "from-blue-500 to-cyan-500"
                                    : "from-emerald-500 to-teal-500"
                                }`}
                              />
                              <span className="text-gray-900 dark:text-gray-100">
                                {category.name}
                              </span>
                            </div>
                          </Link>
                          {category.hasDropdown && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleCategory(category.key)}
                              className="p-4 h-auto hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                            >
                              <div
                                className={`transform transition-transform duration-200 ${
                                  expandedCategories[category.key]
                                    ? "rotate-90"
                                    : ""
                                }`}
                              >
                                <ChevronRight className="h-4 w-4 text-pink-500" />
                              </div>
                            </Button>
                          )}
                        </div>

                        {/* Collapsible Subcategories */}
                        {category.hasDropdown &&
                          expandedCategories[category.key] && (
                            <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-300">
                              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-xl p-3">
                                <div className="grid grid-cols-1 gap-1">
                                  {categorySubcategories[category.key].map(
                                    (item, itemIndex) => (
                                      <Link
                                        key={item}
                                        href={`${category.href}/${item
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")
                                          .replace("&", "and")
                                          .replace("'", "")}`}
                                        className="block p-3 text-sm text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:shadow-sm hover:translate-x-1"
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                      >
                                        <div className="flex items-center space-x-2">
                                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60" />
                                          <span>{item}</span>
                                        </div>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="p-4 border-t border-pink-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-white dark:bg-gray-800 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-300 dark:hover:border-pink-700"
                      >
                        <Search className="h-4 w-4 mr-3 text-pink-500" />
                        <span>Search Products</span>
                      </Button>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-white dark:bg-gray-800"
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Wishlist
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-white dark:bg-gray-800"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
