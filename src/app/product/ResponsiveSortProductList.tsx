"use client";

import Dropdown from "@/component/DropdownFilter";
import { Product } from "@/types/products";
import { Check, SortDesc } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const ListSort = [
  { title: "همه", value: "all" },
  { title: "بیشترین تخفیف ها", value: "highest_discount" },
  { title: "پر بازدید ترین", value: "most_viewed" },
  { title: "ارزان ترین", value: "lowest_price" },
  { title: "گران ترین", value: "highest_price" },
  { title: "منتخب ها", value: "featured" },
  { title: "جدید ترین", value: "newest" },
  { title: "پرفروش ترین", value: "best_selling" },
];

interface TuniqueCategory {
  activeDropdown: string | null;
  toggleDropdown: (id: string) => void;
  products: Product[];
}

export default function ResponsiveSortProductList({
  activeDropdown,
  toggleDropdown,
  products,
}: TuniqueCategory) {
  // ترجمه
  const sortMap: { [key: string]: string } = {
    all: "همه",
    highest_discount: "بیشترین تخفیف ها",
    most_viewed: "پربازدید ترین ها",
    lowest_price: "ارزان ترین ها",
    highest_price: "گران ترین ها",
    featured: "منتخب ها",
    newest: "جدید ترین ها",
    best_selling: "پرفروش ترین ها",
  };

  const router = useRouter();
  const sortParams = useSearchParams();

  const sortValue = sortParams.get("sort") || "all";

  const handleSort = (sortValue: string) => {
    const currentSortParams = new URLSearchParams(sortParams.toString());
    currentSortParams.set("sort", sortValue.toString());
    router.push(`/product?${currentSortParams}`);
  };

  return (
    <>
      {/* در حالت ریسپانسیو */}
      <div className="md:hidden flex justify-between items-center gap-5 w-full">
        <Dropdown
          title={sortValue !== "all" ? sortMap[sortValue] : "مرتب سازی"}
          icon={<SortDesc className="text-(--color-Gray) w-6 h-6" />}
          id="sort"
          productLength={products.length}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
        >
          <div className="flex flex-col justify-start items-start  p-5 ">
            {ListSort.map((item, index) => (
              <span
                key={index}
                className={`${
                  item.value === sortValue
                    ? "text-(--color--Blue-700)"
                    : "text-gray-700"
                } flex justify-between items-center py-3 border-b border-gray-200 cursor-pointer w-full  text-xl hover:text-gray-900 transition-colors last:border-none `}
                onClick={() => handleSort(item.value)}
              >
                {item.title}
                {item.value === sortValue && (
                  <Check className="w-6 h-6 text-(--color--Blue-700)" />
                )}
              </span>
            ))}
          </div>
        </Dropdown>
      </div>
    </>
  );
}
