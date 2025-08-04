"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Dropdown from "./DropdownFilter";
import { Check } from "lucide-react";
import { Product } from "@/types/products";

interface TuniqueCategory {
  uniqueCategory: string[];
  activeDropdown: string | null;
  products: Product[];
  toggleDropdown: (id: string) => void;
}

export default function Category({
  uniqueCategory,
  toggleDropdown,
  activeDropdown,
  products,
}: TuniqueCategory) {
  // ترجمه
  const categoryMap: { [key: string]: string } = {
    headphones: "هندزفری",
    home_appliances: "کالای دیجیتالی",
    smartwatch: "ساعت هوشمند",
    laptop: "لپ تاپ",
    smart_home: "خانه هوشمند",
    game_console: "کنسول بازی",
    digital_goods: "کالای دیجیتال",
    camera: "دوربین دیجیتالی",
    projector: "پروژکتور",
    computer_parts: "قطعات کامپیوتر",
    accessories: "اکسسوری",
    audio_devices: "دستگاه های صوتی",
    computer_peripherals: "لوازم جانبی کامپیوتر",
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryValue = searchParams.get("category");
  const sortValue = searchParams.get("sort");
  const minPriceValue = searchParams.get("minPrice");
  const maxPriceValue = searchParams.get("maxPrice");

  const handelCategory = (categoryValue: string) => {
    if (sortValue && minPriceValue && maxPriceValue) {
      router.push(
        `/product?sort=${sortValue}&category=${categoryValue}&minPrice=${minPriceValue}&maxPrice=${maxPriceValue}`
      );
    } else {
      router.push(`/product?category=${categoryValue}`);
    }
  };

  return (
    <Dropdown
      title="دسته بندی"
      icon=""
      id="category"
      productLength={products.length}
      activeDropdown={activeDropdown}
      toggleDropdown={toggleDropdown}
    >
      <div className="flex flex-col justify-start items-start p-5 h-[300px] overflow-y-auto scrollbar-style">
        {uniqueCategory.map((item, index) => (
          <span
            key={index}
            className={`${
              categoryValue === item
                ? "text-(--color--Blue-700)"
                : "text-gray-700"
            } flex justify-between items-center py-3 border-b border-gray-200 cursor-pointer w-full  text-xl hover:text-gray-900 transition-colors last:border-none `}
            onClick={() => handelCategory(item)}
          >
            {categoryMap[item]}
            {categoryValue === item && (
              <Check className="w-6 h-6 text-(--color--Blue-700)" />
            )}
          </span>
        ))}
      </div>
    </Dropdown>
  );
}
