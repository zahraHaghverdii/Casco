"use client";

import Dropdown from "./DropdownFilter";
import { Product } from "@/types/products";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface TProducts {
  products: Product[];
  activeDropdown: string | null;
  toggleDropdown: (id: string) => void;
}

export default function PriceRangeFilter({
  products,
  activeDropdown,
  toggleDropdown,
}: TProducts) {
  const router = useRouter();
  const filterPriceParams = useSearchParams();

  const minPriceFromUrl = filterPriceParams?.get("minPrice") || "";
  const maxPriceFromUrl = filterPriceParams?.get("maxPrice") || "";

  const maxProductPrice = Math.max(
    ...products.map((p) => p.discount || p.price)
  );
  const minProductPrice = Math.min(
    ...products.map((p) => p.discount || p.price)
  );

  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });

  useEffect(() => {
    setPriceRange({
      min: minPriceFromUrl || "",
      max: maxPriceFromUrl || "",
    });
  }, [minPriceFromUrl, maxPriceFromUrl]);

  const formatNumber = (value: string) => {
    if (!value) return "";
    return new Intl.NumberFormat("en-US").format(
      Number(value.replace(/\D/g, ""))
    );
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
  };

  const applyPriceFilter = () => {
    if (!filterPriceParams) return;
    const filterPricenewParams = new URLSearchParams(
      filterPriceParams.toString()
    );
    if (priceRange.min) filterPricenewParams.set("minPrice", priceRange.min);
    if (priceRange.max) filterPricenewParams.set("maxPrice", priceRange.max);
    router.push(`/product?${filterPricenewParams}`);
  };

  return (
    <Dropdown
      id="filterPrice"
      icon=""
      title="محدوده قیمت"
      productLength={products.length}
      activeDropdown={activeDropdown}
      toggleDropdown={toggleDropdown}
    >
      <div className="flex items-center gap-4 flex-col p-5">
        <div className="flex justify-between items-center flex-col w-full mt-5 gap-5">
          <div className="flex text-right w-full justify-between items-center gap-3 border-b border-gray-300">
            <span className="text-xl text-gray-500">از</span>
            <input
              placeholder={minProductPrice.toLocaleString("en-US")}
              type="text"
              name="min"
              value={priceRange.min ? formatNumber(priceRange.min) : ""}
              onChange={(e) => handlePriceChange(e)}
              className="text-right rounded-md py-1 px-2 text-gray-800 w-full focus:outline-none"
            />
            <span className="text-sm text-gray-400">تومان</span>
          </div>
          <div className="flex text-right w-full justify-between items-center border-b border-gray-300">
            <span className="text-xl text-gray-500">تا</span>
            <input
              placeholder={maxProductPrice.toLocaleString("en-US")}
              type="text"
              name="max"
              value={priceRange.max ? formatNumber(priceRange.max) : ""}
              onChange={(e) => handlePriceChange(e)}
              className="text-right rounded-md py-1 px-2 text-gray-800 w-full focus:outline-none"
            />
            <span className="text-sm text-gray-400">تومان</span>
          </div>
        </div>

        <span
          onClick={applyPriceFilter}
          className="text-xl bg-gray-200 hover:bg-gray-300 p-3 rounded-3xl border border-gray-400 w-full text-center cursor-pointer text-gray-800"
        >
          اعمال فیلتر
        </span>
      </div>
    </Dropdown>
  );
}
