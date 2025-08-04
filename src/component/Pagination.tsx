"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface TproductPage {
  pageCount: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ pageCount, onPageChange }: TproductPage) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // دریافت صفحه فعلی
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // تغییر صفحه
  const handlePageChange = (page: number) => {
    if (page < 1 || page > pageCount) return; // جلوگیری از خروج از محدوده

    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "8");
    router.push(`/product?${currentSearchParams}`);

    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-full mb-3 mt-10 flex justify-center items-center gap-5 ltr">
      {/* دکمه قبلی */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1} // غیرفعال اگر در صفحه اول باشد
        className={`${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:text(--color-Gray)"
        } rounded`}
      >
        <ChevronLeft className="w-6 h-6 text(--color-Gray)" />
      </button>

      {/* شماره صفحات */}
      {Array.from({ length: pageCount }).map((_, index) => (
        <span
          key={index}
          className={`rounded cursor-pointer ${
            currentPage === index + 1
              ? "text-(--color--Blue-700) font-bold"
              : "text-(--color-Gray)"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </span>
      ))}

      {/* دکمه بعدی */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className={`${
          currentPage === pageCount
            ? "opacity-50 cursor-not-allowed"
            : "hover:text-(--color-Gray)"
        }  rounded`}
      >
        <ChevronRight className="w-6 h-6 text(--color-Gray)" />
      </button>
    </div>
  );
}

// return (
//   <div className="w-full mb-3 mt-10 flex justify-center items-center gap-5">
//     <ReactPaginate
//       breakLabel="..."
//       nextLabel={<ChevronRight className="w-6 h-6" />}
//       previousLabel={<ChevronLeft className="w-6 h-6" />}
//       onPageChange={handlePageClick}
//       pageRangeDisplayed={5}
//       pageCount={pageCount}
//       renderOnZeroPageCount={null}
//       forcePage={currentPage - 1}
//       className="flex justify-center items-center gap-4 cursor-pointer text-(--color-Gray)"
//       pageClassName="hover:text-(--color-Gray-200)"
//       activeClassName="text-(--color-Dark-20)"
//       breakClassName="text-gray-400"
//       nextClassName=" rounded-full flex justify-center items-center bg-(rgba(0, 0, 0, 0.5)) text-(#f0efefc4)"
//       previousClassName=" rounded-full flex justify-center items-center bg-(rgba(0, 0, 0, 0.5)) text-(#f0efefc4)"
//       disabledClassName="cursor-not-allowed text-(#000) bg-(rgba(155, 155, 155, 0.493))"
//     />
//   </div>
// );
// }
