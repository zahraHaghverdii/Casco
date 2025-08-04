import { Product } from "@/types/products";
import NumberFormatter from "@/utils/NumberFormatter";
import Image from "next/image";
import Link from "next/link";

interface Titem {
  item: Product;
}

export default function CardCategory({ item }: Titem) {
  return (
    <Link
      href={`/product/${item.name}`}
      className="text-(--color-Gray) overflow-hidden rtl flex items-start  gap-x-5 h-40 last:border-b-0 pt-5 mb-3 last:mb-0 first:pt-0 border-b border-gray-200"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={65}
        height={65}
        style={{ objectFit: "contain" }}
        priority
      />
      <div className="flex flex-col gap-y-4 w-full">
        <p className="text-[13px] line-clamp-2 text-(--color-Gray-200)">
          {item.name}
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            {item.discount !== 0 && (
              <span className="text-2xl flex gap-2 text-(--color--Primary-700)">
                <NumberFormatter value={item.discount} />
                <span className="text-lg">تومان</span>
              </span>
            )}
            <span
              className={`flex gap-1 ${
                item.discount !== 0
                  ? "text-gray-400 line-through text-xl"
                  : "text-(--color--Primary-700) text-2xl"
              }`}
            >
              <NumberFormatter value={item.price} />
              <span className="text-lg">تومان</span>
            </span>
          </div>
          {item.off !== 0 && (
            <div className="text-[12px] flex justify-center items-center gap-1 bg-(--color--Primary-700) text-(--color-White) w-[22%] h-[22px] rounded-full">
              <span>%</span>
              {item.off}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
