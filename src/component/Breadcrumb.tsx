"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname(); // دریافت مسیر فعلی

  const pathSegments = pathname.split("/").filter((segment) => segment); // تقسیم مسیر به بخش‌ها

  const breadcrumbMap: { [key: string]: string } = {
    product: "محصولات",
    cart: "سبد خرید",
  };

  return (
    <div className="md:my-15 mt-15 mb-10 overflow-x-auto overflow-y-hidden md:whitespace-normal whitespace-nowrap  scrollbar-style rtl ">
      <nav aria-label="breadcrumb" className="text-gray-600 my-4">
        <ol className="flex items-center space-x-2">
          {/* لینک خانه */}
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              فروشگاه دیجیتالی
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            // مسیر کامل برای هر بخش
            const segmentPath =
              "/" + pathSegments.slice(0, index + 1).join("/");

            return (
              <li key={index} className="flex items-center ">
                <span className="mx-2">/</span>
                {index === pathSegments.length - 1 ? (
                  <span className="text-gray-800 capitalize md:line-clamp-1  md:w-3xl w-full">
                    {breadcrumbMap[segment] || decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link
                    href={segmentPath}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {breadcrumbMap[segment] || decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
