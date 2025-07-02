import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";
import EcommerceNavbar from "@/components/client/navbar";
import HeroSlider from "@/components/client/slider";
import Footer from "@/components/client/footer";
import CategorySection from "@/components/client/product_main";
import ProductShowcase from "@/components/client/product_main";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EcommerceNavbar />
      <HeroSlider />
      <ProductShowcase />
      <Footer />

      {children}
    </>
  );
}
