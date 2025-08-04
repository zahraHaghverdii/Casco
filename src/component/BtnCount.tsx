"use client";
import { useCart } from "@/zustand/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";

interface BtnCountProps {
  className?: string; // کلاس‌های اضافی
  id: number; //اون محصولی که روش کلیک شده
}

export default function BtnCount({ id, className }: BtnCountProps) {
  const {
    handleIncreaseCartProduct,
    countItemCartProduct,
    handleReduceCartProduct,
  } = useCart();
  const qty = countItemCartProduct(id);

  return (
    <div
      className={`flex justify-around items-center border rounded-2xl border-gray-200 ${className}`}
    >
      {/* دکمه افزایش */}
      <span
        className="cursor-pointer text-2xl"
        onClick={() => handleIncreaseCartProduct(id)}
      >
        <Plus className="w-6 h-6 text-gray-500" />
      </span>

      {/* مقدار */}
      <span className="border-x border-gray-200 py-3 w-1/2 text-center">
        {qty}
      </span>

      {/* دکمه کاهش */}
      <span
        className="cursor-pointer text-4xl"
        onClick={() => handleReduceCartProduct(id)}
      >
        {qty === 1 ? (
          <Trash2 className="w-6 h-6 text-gray-500" />
        ) : (
          <Minus className="w-6 h-6 text-gray-500" />
        )}
      </span>
    </div>
  );
}
