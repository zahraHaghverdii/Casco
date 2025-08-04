"use client";

import Container from "@/component/container";
import { Product } from "@/types/products";
import Image from "next/image";
import { useState } from "react";
import SliderOffers from "./SliderOffers";

interface OffersProps {
  products: Product[];
}

export default function Offers({ products }: OffersProps) {
  const [category_item, setCategoryItem] = useState("");
  // فیلتر کردن داده‌ها
  const filteredProducts = products
    .filter((product) => product.general_category === "home_appliances")
    .map((product) => product);

  const filteredCategoryProducts =
    category_item === ""
      ? filteredProducts
      : filteredProducts.filter((item) => item.category_fa === category_item);

  //category
  const category = [
    ...new Set(filteredProducts.map((item) => item.category_fa)),
  ];

  return (
    <Container>
      <div className="relative my-20 rtl">
        <div className="w-full md:h-[450px] h-[545px] relative overflow-hidden rounded-4xl">
          <Image
            src="/image_project/accessory/Asset-3-3.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority // برای بارگزاری سریع
          />
        </div>

        <div className="absolute left-0 right-0 top-0 px-8 py-5">
          {/* title */}
          <div className="w-[100%] md:h-[60px] h-[50px] relative">
            <Image
              src="/image_project/accessory/Asset-3-1.svg"
              alt=""
              fill
              priority // برای بارگزاری سریع
            />
            <p className="md:text-4xl text-3xl text-[#717171] font-bold absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center md:h-[60px] h-[50px]">
              کالای دیجیتالی
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-around items-stretch gap-5 mt-7">
            <div className="text-(--color-White) md:w-[25%] w-[100%] overflow-hidden">
              {/* <span className="font-bold text-4xl">لوازم برقی و خانگی</span> */}
              <div className="md:mt-7 flex md:flex-col md:overflow-y-auto md:h-97 md:gap-y-5 md:p-0 overflow-x-auto w-full whitespace-nowrap py-10">
                <span
                  className={`inline-block px-4 py-2 cursor-pointer ${
                    category_item === ""
                      ? "bg-gray-400/50 md:py-3 px-6 border-b border-b-gray-300/50 rounded-2xl"
                      : "bg-inherit border-none"
                  }`}
                  onClick={() => setCategoryItem("")}
                >
                  همه
                </span>
                {category.map((category, index) => (
                  <span
                    key={index}
                    className={`inline-block px-4 py-2 cursor-pointer ${
                      category === category_item
                        ? "bg-gray-400/50 md:py-3 px-6 border-b border-b-gray-300/50 rounded-2xl"
                        : "bg-inherit border-none"
                    }`}
                    onClick={() => setCategoryItem(category)}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-[75%] w-full">
              <SliderOffers filterProduct={filteredCategoryProducts} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
