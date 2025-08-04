"use client";

import Category from "./Category";
import PriceRangeFilter from "./PriceRangeFilter";
import { useState } from "react";
import { Product } from "@/types/products";
import ResponsiveSortProductList from "@/app/product/ResponsiveSortProductList";
import ClearFilter from "./ClearFilter";

interface TuniqueCategory {
  uniqueCategory: string[];
  products: Product[];
}

export default function Filter({ uniqueCategory, products }: TuniqueCategory) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex md:flex-col md:border md:border-gray-300 md:rounded-2xl md:sticky md:top-9 md:p-6 md:h-[500px] self-start md:overflow-y-auto md:overflow-x-hidden overflow-y-hidden overflow-x-auto whitespace-nowrap scrollbar-style gap-x-4">
      {/* دکمه حذف فیلتر */}
      <div className="hidden md:flex justify-between items-center mb-13">
        <span className="text-gray-700 text-3xl">فیلتر ها</span>
        {/* حذف فیلتر ها */}
        <ClearFilter color="blue-500" />
      </div>

      <div className="md:hidden flex items-center gap-2">
        <ResponsiveSortProductList
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          products={products}
        />
      </div>

      <Category
        uniqueCategory={uniqueCategory}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        products={products}
      />

      <PriceRangeFilter
        products={products}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
}
