import BestSellingProducts from "@/components/client/bestsellingproduct";
import BrowseCategories from "@/components/client/browsecategory";
import FlashSalesCarousel from "@/components/client/flashsales";
import React from "react";
export default function Home() {
  return (
    <>
      <FlashSalesCarousel />
      <BrowseCategories />
      <BestSellingProducts />
    </>
  );
}
