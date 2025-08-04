"use client";

import BtnCount from "@/component/BtnCount";
import { useCart } from "@/zustand/useCart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BtnCountProduct({ id }: { id: number }) {
  const { handleIncreaseCartProduct, countItemCartProduct } = useCart();
  const qty = countItemCartProduct(id);

  return (
    <>
      {/* add & remove */}
      {/* اگر تعداد اون qty بیشتر از صفر بود دکمه کم و زیاد و نشون بده اگر qty کمتر
      و یا برابر با صفر بود دکمه معمولی و نشون بده */}
      {qty !== 0 ? (
        <div className="flex  items-center w-full gap-x-3 ">
          <Link
            href={"/cart"}
            className="w-full md:w-1/2 py-3 flex justify-center items-center gap-5 text-(--color-White) text-xl border border-(--color--Blue-300) bg-(--color--Blue-300) hover:bg-(--color--Blue-600) cursor-pointer rounded-xl transition-all duration-200 ease-in-out"
          >
            <ShoppingCart className="w-8 h-8 text-(--color-White)" />
            <span className="text-(--color-White)"> سبد خرید</span>
          </Link>

          <BtnCount className="w-full md:w-1/2" id={id} />
        </div>
      ) : (
        <span
          className="w-full  py-5 flex justify-center items-center text-(--color-White) text-xl border border-(--color--Blue-300) bg-(--color--Blue-300) hover:bg-(--color--Blue-600) cursor-pointer rounded-xl transition-all duration-200 ease-in-out"
          onClick={() => handleIncreaseCartProduct(id)}
        >
          افزودن به سبد خرید
        </span>
      )}
    </>
  );
}
