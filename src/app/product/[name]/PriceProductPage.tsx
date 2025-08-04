import { Product } from "@/types/products";
import NumberFormatter from "@/utils/NumberFormatter";
import { Truck } from "lucide-react";
import BtnCountProduct from "./BtnCountProduct";

export default function PriceProductPage({ product }: { product: Product }) {
  return (
    <div className="bg-(--color-Gray-100) border border-gray-100 rounded-2xl md:w-[30%] w-full p-8 flex flex-col gap-y-11 overflow-hidden">
      <div className="flex items-start gap-3 border-b border-gray-200 pb-5">
        <Truck className="w-8 h-8 text-(--color-Gray)" />
        <span className="text-(--color-Gray) text-xl">
          ارسال رایگان به سراسر ایران با خرید حداقل500٬000 تومان
        </span>
      </div>

      {/* بخش قیمت‌ها */}
      <div className="flex justify-between items-center gap-x-4 my-5 flex-wrap">
        <div className="flex justify-start items-center gap-x-4 my-5 flex-wrap">
          <span className="text-2xl font-medium text-gray-700">قیمت: </span>
          <div className="flex gap-2 items-center">
            {/* قیمت با تخفیف */}
            {product.discount !== 0 && (
              <span className="text-3xl font-bold text-(--color-Dark-20) mb-1">
                <NumberFormatter value={product.discount} />
              </span>
            )}
            {/* قیمت اصلی */}
            <span
              className={`${
                product.discount !== 0
                  ? "text-gray-400 line-through text-xl"
                  : "text-3xl font-bold text-(--color-Dark-20)"
              }`}
            >
              <NumberFormatter value={product.price} />
            </span>
          </div>
          {/* تومان */}
          <span className="text-xl font-medium text-gray-700">تومان</span>
        </div>

        {/* درصد تخفیف */}
        {product.off !== 0 && (
          <div className="w-[15%] text-[12px] flex justify-center items-center gap-1 bg-(--color--Primary-700) text-(--color-White) h-[22px] rounded-xl">
            <span>%</span>
            {product.off}
          </div>
        )}
      </div>

      {/* btn */}
      <BtnCountProduct id={product.id} />
    </div>
  );
}
