"use client";
import { useAllProductStore } from "@/zustand/useProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [textError, setTextError] = useState("");

  const router = useRouter();
  const { products } = useAllProductStore();

  // تابع سرچ
  const handelSearch = () => {
    if (!search.trim()) {
      // اگر ورودی خالی بود، صفحه تغییر نمی‌کند.
      setTextError("لطفاً یک عبارت برای جستجو وارد کنید.");
      return;
    }

    // بررسی وجود محصول
    const productExists = products.some((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (productExists) {
      // محصول موجود است، به صفحه مربوطه بروید
      setTextError(""); // پاک کردن پیام خطا
      router.push(`/product?name=${search}`);
    } else {
      // محصول وجود ندارد، نمایش پیام خطا
      setTextError(
        "محصولی با این نام یافت نشد. لطفاً عبارت دیگری را امتحان کنید."
      );
    }
  };

  // مدیریت رویداد Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handelSearch();
    }
  };

  return (
    <div className="md:w-1/2 w-full mx-auto mt-8 space-y-15">
      <div className="text-center w-full text-[#353535] mx-auto">
        <span> لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</span>
      </div>

      <div className="flex justify-between items-center h-[40px] text-xl text-(--color-Gray-200) w-full gap-2 rounded-[5px] border-[1px] border-[#8080802a] px-[5px] ">
        <input
          type="text"
          className="w-[100%] h-[38px] outline-none  text-right "
          placeholder={"جستوجو ..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Image
          src="/icons/search.svg"
          width={18}
          height={18}
          alt="جستجو"
          onClick={handelSearch}
        />
      </div>

      <span className="text-center text-xl w-full text-(--color--Primary-700) mx-auto">
        {textError}
      </span>
    </div>
  );
}
