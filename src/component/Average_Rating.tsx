"use client";

import { useProductAllComments } from "@/hooks/useProductComments";
import { Product } from "@/types/products";
import StarRating from "@/utils/StarRating ";

interface TproductProps {
  product: Product;
}
interface Comment {
  productId: string;
  rating: number;
}

export default function AverageRating({ product }: TproductProps) {
  // فرض کنید داده‌ها به صورت کامنت‌ها دریافت می‌شوند
  const comments = useProductAllComments() as Comment[];

  // تعریف شیء برای دسته‌بندی کامنت‌ها
  const ratingsByProduct: Record<string, number[]> = {};

  // forEach: به ازای هر کامنت:
  // اگر محصولی قبلاً در ratingsByProduct نباشد، یک آرایه جدید برایش ایجاد می‌شود.
  // سپس امتیاز (rating) آن محصول به آرایه اضافه می‌شود.
  comments.forEach(({ productId, rating }) => {
    if (!ratingsByProduct[productId]) {
      ratingsByProduct[productId] = [];
    }
    ratingsByProduct[productId].push(rating);
  });

  // محاسبه میانگین هر محصول
  const averages: Record<string, number> = Object.keys(ratingsByProduct).reduce(
    (acc, key) => {
      const ratings = ratingsByProduct[key];
      const average =
        ratings.reduce((sum, value) => sum + value, 0) / ratings.length;
      acc[key] = parseFloat(average.toFixed(1)); // میانگین با دو رقم اعشار
      return acc;
    },
    {} as Record<string, number>
  );

  // میانگین مربوط به محصول فعلی
  const averageRating = averages[product.id] || 0;

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex items-center">
        {/* نمایش ستاره‌ها */}
        <StarRating rating={averageRating} />
      </div>

      <div>{averageRating.toFixed(1)}</div>

      <span className="text-lg text-gray-400">({product.reviews} نظر)</span>
    </div>
  );
}
