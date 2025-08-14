// import { Product } from "@/types/products";
// import Products from "./Products";
// import { fetchAllProducts, fetchProductsList } from "@/api/fetch_products";
// import { Suspense } from "react";
// import LoadingModal from "@/ui/LoadingModal";
// import ErrorServerPage from "@/ui/ErrorServerPage";

// export const metadata = {
//   title: {
//     default: "محصولات",
//     template: "لوازم دیجیتالی | %s",
//   },
//   description: "لوازم دیجیتالی",
// };

// interface TProductListProps {
//   searchParams: Promise<{
//     page?: string;
//     per_page?: string;
//     name?: string;
//     sort?: string;
//     category?: string;
//     minPrice?: string;
//     maxPrice?: string;
//   }>;
//   reset: () => React.ReactNode;
// }

// async function page({
//   searchParams: searchParamsPromise,
//   reset,
// }: TProductListProps) {
//   try {
//     // ✅ await کردن searchParams (رفع خطای Next.js 15)
//     const searchParams = await searchParamsPromise;

//     const page = Number(searchParams.page ?? "1");
//     const per_page = Number(searchParams.per_page ?? "8");
//     const name = searchParams.name ?? "";
//     const sort = searchParams.sort ?? "";
//     const category = searchParams.category ?? "";
//     const minPrice = searchParams.minPrice ?? "";
//     const maxPrice = searchParams.maxPrice ?? "";

//     // ✅ گرفتن دیتا
//     const allProducts = await fetchProductsList({
//       page: "1",
//       per_page: "1000",
//       name,
//       sort: "",
//       category: "",
//       maxPrice: "1000000",
//       minPrice: "100000",
//     });

//     console.log(allProducts);

//     if (!allProducts) {
//       return <LoadingModal />;
//     }

//     // فیلتر کردن محصولات
//     let filteredProducts = allProducts;

//     if (sort) {
//       filteredProducts = filteredProducts.sort((a: Product, b: Product) => {
//         const Discount = a.off || b.off || 0;

//         //بیشترین به کمترین (تخفیف)
//         if (sort === "highest_discount") {
//           const aDiscount = a.off || 0;
//           const bDiscount = b.off || 0;
//           return bDiscount - aDiscount;
//         }

//         //بیشترین به کمترین (پرفروش)
//         if (sort === "best_selling") {
//           const aSalesCount = a.sales_count || 0;
//           const bSalesCount = b.sales_count || 0;
//           return bSalesCount - aSalesCount;
//         }

//         //بیشترین به کمترین (منتخب)
//         if (sort === "featured") {
//           const aReviews = a.reviews || 0;
//           const bReviews = b.reviews || 0;
//           return bReviews - aReviews;
//         }

//         //کمترین به بیشترین (ارزان ترین)
//         if (sort === "lowest_price") {
//           const Price = Discount ? a.discount - b.discount : a.price - b.price;
//           return Price;
//         }

//         //بیشترین به کمترین (گران ترین)
//         if (sort === "highest_price") {
//           const Price = Discount ? b.discount - a.discount : b.price - a.price;
//           return Price;
//         }

//         //بیشترین به کمترین (جدید ترین)
//         if (sort === "newest") {
//           return (
//             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//           );
//         }

//         return 0; // ترتیب پیش‌فرض
//       });
//     }

//     // دسته بندی محصولات
// const products = (await fetchAllProducts()) as Product[];
// const categoryA = products.map((item) => item.general_category);
// const uniqueCategory = [...new Set(categoryA)];
// if (category) {
//   filteredProducts = filteredProducts.filter((item: Product) => {
//     // بررسی اینکه آیا category در categoryA وجود دارد
//     if (categoryA.includes(category)) {
//       return item.general_category === category;
//     }
//     return true;
//   });
// }

//     // فیلتر کردن رنج قیمت
//     if (minPrice || maxPrice) {
//       filteredProducts = filteredProducts.filter((item: Product) => {
//         const price = item.discount ? item.discount : item.price;
//         // اگر فقط حداقل قیمت مشخص شده باشد
//         if (minPrice && !maxPrice) {
//           return price >= parseFloat(minPrice);
//         }
//         // اگر فقط حداکثر قیمت مشخص شده باشد
//         if (maxPrice && !minPrice) {
//           return price <= parseFloat(maxPrice);
//         }
//         // اگر هر دو مقدار مشخص شده باشند
//         if (minPrice && maxPrice) {
//           return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
//         }
//         // در صورت نبودن شرط خاص، همه محصولات بازگردانده می‌شوند
//         return true;
//       });
//     }

//     // محاسبه تعداد کل صفحات و محصولات صفحه جاری
//     const totalItems = filteredProducts.length;
//     const totalPages = Math.ceil(totalItems / per_page);
//     const paginatedProducts = filteredProducts.slice(
//       (page - 1) * per_page,
//       page * per_page
//     );

//     // Return paginated and filtered products
//     return (
//       <>
//         <Suspense fallback={<LoadingModal />}>
//           <Products
//             products={paginatedProducts}
//             pageCount={totalPages}
//             uniqueCategory={uniqueCategory}
//           />
//         </Suspense>
//       </>
//     );
//   } catch (error: unknown) {
//     const errorMessage =
//       error instanceof Error ? error.message : "خطایی رخ داده است";
//     console.error("خطا:", errorMessage);
//     return <ErrorServerPage error={errorMessage} reset={reset} />;
//   }
// }

// export default page;
import { Product } from "@/types/products";
import Products from "./Products";
import { fetchAllProducts, fetchProductsList } from "@/api/fetch_products";
import { Suspense } from "react";
import LoadingModal from "@/ui/LoadingModal";
import ErrorServerPage from "@/ui/ErrorServerPage";

export const metadata = {
  title: {
    default: "محصولات",
    template: "لوازم دیجیتالی | %s",
  },
  description: "لوازم دیجیتالی",
};

interface TProductListProps {
  searchParams: Promise<{
    page?: string;
    per_page?: string;
    name?: string;
    sort?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
  reset: () => React.ReactNode;
}

async function page({
  searchParams: searchParamsPromise,
  reset,
}: TProductListProps) {
  try {
    const searchParams = await searchParamsPromise;

    const page = Number(searchParams.page ?? "1");
    const per_page = Number(searchParams.per_page ?? "8");
    const name = searchParams.name ?? "";
    const sort = searchParams.sort ?? "";
    const category = searchParams.category ?? "";
    const minPrice = searchParams.minPrice ?? "";
    const maxPrice = searchParams.maxPrice ?? "";

    const allProducts = await fetchProductsList({
      page: "1",
      per_page: "1000",
      name,
      sort,
      category,
      maxPrice: maxPrice || "1000000",
      minPrice: minPrice || "100000",
    });

    if (!allProducts) return <LoadingModal />;

    let filteredProducts: Product[] = allProducts;

    // مرتب‌سازی
    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (sort === "highest_discount") return (b.off || 0) - (a.off || 0);
        if (sort === "best_selling")
          return (b.sales_count || 0) - (a.sales_count || 0);
        if (sort === "featured") return (b.reviews || 0) - (a.reviews || 0);
        if (sort === "lowest_price")
          return (a.discount ?? a.price) - (b.discount ?? b.price);
        if (sort === "highest_price")
          return (b.discount ?? b.price) - (a.discount ?? a.price);
        if (sort === "newest")
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        return 0;
      });
    }

    // دسته‌بندی
    // گرفتن همه محصولات فقط برای دسته‌بندی
    const allProductsForCategory = await fetchAllProducts();
    const categoryA = allProductsForCategory.map(
      (item) => item.general_category?.toLowerCase() || ""
    );
    //دسته بندی های تکراری و حذف میکنه و همه و در یک ارایه قرار میده
    const uniqueCategory = [...new Set(categoryA)];
    // فیلتر دسته‌بندی
    if (category) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.general_category?.toLowerCase() === category.toLowerCase()
      );
    }

    // فیلتر قیمت
    if (minPrice || maxPrice) {
      filteredProducts = filteredProducts.filter((item) => {
        const price = item.discount ?? item.price;
        if (minPrice && !maxPrice) return price >= parseFloat(minPrice);
        if (maxPrice && !minPrice) return price <= parseFloat(maxPrice);
        if (minPrice && maxPrice)
          return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
        return true;
      });
    }

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / per_page);
    const paginatedProducts = filteredProducts.slice(
      (page - 1) * per_page,
      page * per_page
    );

    return (
      <Suspense fallback={<LoadingModal />}>
        <Products
          products={paginatedProducts}
          pageCount={totalPages}
          uniqueCategory={uniqueCategory}
        />
      </Suspense>
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "خطایی رخ داده است";
    console.error("خطا:", errorMessage);
    return <ErrorServerPage error={errorMessage} reset={reset} />;
  }
}

export default page;
