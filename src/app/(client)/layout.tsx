import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";
import EcommerceNavbar from "@/components/client/navbar";
import HeroSlider from "@/components/client/slider";
import Footer from "@/components/client/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EcommerceNavbar />
      <HeroSlider />
      <Footer />
      {children}
    </>
  );
}
