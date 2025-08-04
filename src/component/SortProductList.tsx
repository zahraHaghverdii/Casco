"use client";

import { SortDesc } from "lucide-react";
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

export default function SortProductList({
  lengthProduct,
}: {
  lengthProduct: number;
}) {
  const router = useRouter();
  const sortParams = useSearchParams();

  const sortValue = sortParams.get("sort") || "all";

  const handleSort = (sortValue: string) => {
    const currentSortParams = new URLSearchParams(sortParams.toString());
    currentSortParams.set("sort", sortValue.toString());
    router.push(`/product?${currentSortParams}`);
  };

  return (
    <div className="flex justify-between items-center">
      {/* در حالت دسکتاپ */}
      <div className="hidden md:flex justify-between items-center gap-5 md:pt-6 md:pb-3 md:w-[90%]">
        {/* Sort Title */}
        <div className="flex items-center gap-2 xl:w-[13%] lg:w-[18%] md:w-[23%]">
          <SortDesc className="text-(--color-Gray)" />
          <span className="text-(--color-Gray) font-bold text-xl">
            مرتب سازی:
          </span>
        </div>

        {/* Sort Options */}
        <ul className="flex bg-transparent overflow-hidden justify-start items-center gap-10 w-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-style">
          {ListSort.map((item, index) => (
            <li
              key={index}
              className={`text-xl cursor-pointer ${
                item.value === sortValue
                  ? "text-(--color--Blue-700) font-bold"
                  : "text-(--color-Gray)"
              }`}
              onClick={() => handleSort(item.value)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="md:flex hidden text-(--color-Gray) font-bold text-2xl">
          {lengthProduct} کالا
        </span>
      </div>
    </div>
  );
}
