import AverageRating from "@/component/Average_Rating";
import { Product } from "@/types/products";
import Image from "next/image";

export default function DescriptionProduct({ product }: { product: Product }) {
  return (
    <div className="bg-(--color-Gray-100) border border-gray-100  rounded-2xl md:w-[70%] w-full p-8 ">
      <div className="flex md:flex-row flex-col items-start gap-x-15">
        {/* عکس محصول */}
        <div className="relative md:w-[40%] w-full h-[300px] flex justify-center items-center ">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        {/* توضیحات */}
        <div className="flex flex-col gap-y-5 mt-20 md:w-[60%] w-full">
          {/* عنوان محصول */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          {/* نظرات */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-600">نظرات:</span>
            <AverageRating product={product} />
          </div>

          <div className="h-1/2 overflow-y-auto scrollbar-style">
            <p className="text-2xl text-(--color-Gray-200)">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
