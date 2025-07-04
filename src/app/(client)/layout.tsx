import React from "react";
import EcommerceNavbar from "@/components/client/navbar";
import Footer from "@/components/client/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EcommerceNavbar />
      {children}
      <Footer />
    </>
  );
}
