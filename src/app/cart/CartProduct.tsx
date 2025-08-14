"use client";

// import BtnCount from "@/component/BtnCount";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/zustand/useCart";

interface cartProductProps {
  id: number;
  qty: number;
}

function CartProduct({ id, qty }: cartProductProps) {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const {
    handleIncreaseCartProduct,
    handleReduceCartProduct,
    handelRemoveItem,
  } = useCart();

  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_API_BAS}/products/${id}`)
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch(() => {
        alert("خطا در دریافت اطلاعات");
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-(var[--color-Gray-100]) border border-gray-200 p-5 rounded-2xl grid grid-cols-12 sm:gap-x-5 gap-5">
      <div className="relative w-full sm:col-span-2 col-span-12">
        {loading ? (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl" />
        ) : (
          data && (
            <Image
              src={data.image}
              alt={data.name}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          )
        )}
      </div>

      <div className="sm:col-span-10 col-span-12 flex flex-col justify-between items-start gap-y-8">
        <div className="line-clamp-2 leading-[2.5rem] w-full">
          {loading ? (
            <div className="w-2/3 h-6 bg-gray-200 animate-pulse rounded" />
          ) : (
            data?.name
          )}
        </div>

        <div className="flex justify-between items-center gap-x-5 w-full">
          {loading ? (
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded" />
          ) : (
            <>
              {/* btn count */}
              <div
                className={`flex justify-around items-center border rounded-2xl border-gray-200 w-full md:w-1/2 `}
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
                    <Trash2
                      className="w-6 h-6 text-gray-500"
                      onClick={() => handelRemoveItem(id)}
                    />
                  ) : (
                    <Minus className="w-6 h-6 text-gray-500" />
                  )}
                </span>
              </div>
              <span className="text-(--color-Gray-200) text-3xl flex gap-2 items-center">
                {data?.off === 0 ? data?.price : data?.discount}
                <span className="text-xl text-(--color-Gray-200)">تومان</span>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
