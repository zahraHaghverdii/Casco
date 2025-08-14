"use client";

import { Product } from "@/types/products";
import ErrorModal from "@/ui/ErrorMoadal";
import SuccessfulModal from "@/ui/SuccessfulModal";
import { formatNumber } from "@/utils/NumberFormatter";
import { useCart } from "@/zustand/useCart";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CartPriceTotale() {
  const { cartItems } = useCart();
  const [data, setData] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [finaliPrice, setFinaliPrice] = useState<number>(0);
  const [codeDiscount, setCodeDiscount] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [successful, setSuccessful] = useState<string | null>(null);

  // PriceTotal
  const PriceTotal: number = cartItems.reduce((total, item) => {
    const price = data.find((product) => product.id == item.id);
    return (
      total +
      (price?.off === 0 ? price?.price : price?.discount || 0) * item.qty
    );
  }, 0);

  // fetch data
  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_API_BAS}/products`)
      .then((result) => {
        const { data } = result;
        setData(data);
      })
      .catch((err: { alert(message?: string): void }) => {
        alert(err);
      });
  }, []);

  // discounts
  function handelDicountCode() {
    axios(`${process.env.NEXT_PUBLIC_API_BAS}/discounts?code=${codeDiscount}`)
      .then((result) => {
        const data = result.data;

        if (!codeDiscount || !data) {
          setError("کد تخفیف وارد شده درست نیست");
          setDiscount(0);
          setFinaliPrice(0);
          return;
        }

        setError(null); // پاک کردن خطای قبلی

        const discountAmount = Math.round(
          (PriceTotal * data[0].discound) / 100
        );
        const finaliPrice = PriceTotal - discountAmount;

        if (codeDiscount) {
          setSuccessful(`کد تخفیف ${data[0].code} اعمال شد`);
          setDiscount(discountAmount);
          setFinaliPrice(finaliPrice);
          return;
        }
      })
      .catch(() => {
        setError("مشکلی در ارتباط با سرور پیش آمد");
      });
  }

  return (
    <>
      <div className="bg-(--color-Gray-100) border border-gray-100 rounded-2xl md:w-[40%] w-full h-[400px] pb-8 md:sticky top-40 flex flex-col justify-between overflow-hidden">
        <div className="w-full bg-gray-100 text-2xl text-center text-(--color-Gray-200) p-8">
          جزئیات قیمت
        </div>

        {/* قیمت ها */}
        <div className="flex flex-col gap-5 px-8">
          {/* قیمت کلی */}
          <div className="flex justify-between items-center border-b border-(--color-Gray-50) pb-5">
            <span className="text-(--color-Dark-10) text-2xl">
              قیمت محصولات:
            </span>
            <span className="text-(--color-Dark-20) text-3xl">
              {formatNumber(PriceTotal)}
              <span className="text-sm text-(--color-Gray-200)">تومان</span>
            </span>
          </div>
          {/* قیمت با سود */}
          <div className="flex justify-between items-center border-b border-(--color-Gray-50) pb-5">
            <span className="text-(--color-Dark-10) text-2xl">
              سود شما از این خرید:
            </span>
            <span className="text-(--color-Dark-20) text-3xl">
              {formatNumber(discount)}
              <span className="text-sm text-(--color-Gray-200)">تومان</span>
            </span>
          </div>
          {/* قیمت نهایی */}
          <div className="flex justify-between items-center pb-5">
            <span className="text-(--color-Dark-10) text-2xl">
              قیمت نهایی:{" "}
            </span>
            <span className="text-(--color-Dark-20) text-3xl">
              {formatNumber(finaliPrice)}
              <span className="text-sm text-(--color-Gray-200)">تومان</span>
            </span>
          </div>
          {/* اعمال کد تخفیف */}
          <div className="grid grid-cols-6 items-center gap-x-5 ">
            <input
              type="text"
              placeholder="کد تخفیف"
              className="border border-gray-200 px-5 py-4 text-center rounded-2xl col-span-4"
              onChange={(e) => setCodeDiscount(e.target.value)}
            />
            <span
              onClick={handelDicountCode}
              className="px-5 py-4 text-center text-(--color-White) text-xl border border-(--color--Blue-700) bg-(--color--Blue-700) hover:bg-(--color--Blue-600) cursor-pointer rounded-xl transition-all duration-200 ease-in-out col-span-2"
            >
              اعمال کد تخفیف
            </span>
          </div>
        </div>

        {/* تائید و ادامه */}
        <span className="w-[93%] mx-auto py-5 flex justify-center items-center text-(--color-White) text-xl border border-(--color--Blue-300) bg-(--color--Blue-300) hover:bg-(--color--Blue-600) cursor-pointer rounded-xl transition-all duration-200 ease-in-out">
          تائید و ادامه
        </span>
      </div>

      {error && <ErrorModal message={error} onClose={() => setError(null)} />}
      {successful && (
        <SuccessfulModal
          message={successful}
          onClose={() => setSuccessful(null)}
        />
      )}
    </>
  );
}
