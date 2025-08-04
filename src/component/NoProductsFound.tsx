"use client";

import { SearchIcon } from "lucide-react";

export default function NoProductsFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 space-y-4 w-1/2 p-10 my-5 mx-auto">
      <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
        <SearchIcon className="w-8 h-8 text-(--color-Gray-0)" />
      </div>
      <h2 className="text-xl font-semibold text-gray-700">محصولی یافت نشد</h2>
      <p className="text-(--color-Gray-200)">
        هیچ محصولی مطابق با جستجوی شما پیدا نشد. لطفاً عبارت دیگری را امتحان
        کنید.
      </p>
      <span
        onClick={() => window.location.reload()}
        className="px-4 py-2 underline text-2xl text-(--color-Gray) cursor-pointer"
      >
        جستجوی مجدد
      </span>
    </div>
  );
}
