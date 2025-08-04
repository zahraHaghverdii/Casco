import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import AverageRating from "./Average_Rating";
import NumberFormatter from "@/utils/NumberFormatter";

interface TproductProps {
  product: Product;
}

export default function Card({ product }: TproductProps) {
  return (
    <div className="group h-[320px] bg-(--color-White) mix-sm:mx-auto min-sm:w-full overflow-hidden rounded-2xl p-4">
      <div className="relative">
        <div className="relative w-[200px] h-[120px] mx-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* فروش ویژه */}
        {product.sales_count >= 150 && (
          <div className="absolute right-0 top-2 text-(--color--Primary-700) font-bold">
            فروش ویژه
          </div>
        )}
      </div>

      <div className="mt-4 rtl flex flex-col gap-3 justify-between h-66">
        <div className="w-full text-2xl text-right line-clamp-2 max-h-[5rem] leading-[2.5rem]">
          <span>{product.name}</span>
        </div>

        <div className="space-y-2">
          {/* نظرات */}
          <div className="flex justify-start items-center gap-2 text-2xl">
            <AverageRating product={product} />
          </div>

          <div className="flex justify-between items-center mb-5">
            {/* قیمت */}
            <div className="flex flex-col">
              {product.discount !== 0 && (
                <span className="text-2xl flex gap-2">
                  <NumberFormatter value={product.discount} />
                  <span className="text-lg">تومان</span>
                </span>
              )}
              <span
                className={` flex gap-1 ${
                  product.discount !== 0
                    ? "text-gray-400 line-through text-xl"
                    : "text-2xl"
                }`}
              >
                <NumberFormatter value={product.price} />
                <span className="text-lg">تومان</span>
              </span>
            </div>

            {/* تخفیف */}
            {product.off !== 0 && (
              <div className="text-[12px] flex justify-center items-center gap-1 bg-(--color--Primary-700) text-(--color-White) w-[22%] h-[22px] rounded-full">
                <span>%</span>
                {product.off}
              </div>
            )}
          </div>

          {/* دکمه سبد خرید */}
          <Link href={`/product/${product.name}`}>
            <span
              role="button"
              aria-label={`مشاهده جزئیات ${product.name}`}
              className="w-full  py-3 flex justify-center items-center text-(--color-White) text-xl border border-(--color--Blue-300) bg-(--color--Blue-300) hover:bg-(--color--Blue-600) cursor-pointer rounded-xl transition-all duration-200 ease-in-out"
            >
              جزئیات بیشتر
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
