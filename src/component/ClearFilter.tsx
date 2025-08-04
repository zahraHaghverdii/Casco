"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Tstyle {
  color: string;
}

export default function ClearFilter({ color }: Tstyle) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [clearFilter, setClearFilter] = useState(false);
  //
  useEffect(() => {
    const sortValue = searchParams.get("sort");
    const categoryValue = searchParams.get("category");
    const searchValue = searchParams.get("search");
    const pageValue = searchParams.get("page");
    const perPageValue = searchParams.get("per_page");
    const minPriceValue = searchParams.get("minPrice");
    const maxPriceValue = searchParams.get("maxPrice");
    //
    if (
      sortValue ||
      categoryValue ||
      searchValue ||
      pageValue ||
      perPageValue ||
      minPriceValue ||
      maxPriceValue
    ) {
      setClearFilter(true);
    } else {
      setClearFilter(false);
    }
  }, [searchParams]);

  //
  const ClearFilter = () => {
    router.push("/product");
  };

  return (
    clearFilter && (
      <div className="md:border-none md:p-0 md:bg-inherit bg-red-300 p-3 border border-red-400 rounded-2xl">
        <span
          className={`text-${color} text-xl cursor-pointer`}
          onClick={ClearFilter}
        >
          حذف فیلتر ها
        </span>
      </div>
    )
  );
}
