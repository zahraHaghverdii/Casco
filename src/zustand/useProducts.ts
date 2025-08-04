import { Product } from "@/types/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  isSuccess: boolean;
  isEmpty: boolean;
  setProductsAll: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// ========================================================

// All Product Store
const useAllProductStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [], // مقدار اولیه
      loading: false,
      error: null,
      isSuccess: false,
      isEmpty: false,

      // متد برای تنظیم محصولات و وضعیت‌های مربوطه
      setProductsAll: (products) =>
        set({
          products,
          loading: false,
          error: null,
          isSuccess: true,
          isEmpty: products.length === 0,
        }),

      // متد برای تنظیم وضعیت بارگذاری
      setLoading: (loading) => set({ loading }),

      // متد برای تنظیم خطا
      setError: (error) =>
        set({
          error,
          loading: false,
          isSuccess: false,
          isEmpty: false,
        }),
    }),
    {
      name: "products-store", // کلید برای ذخیره‌سازی در storage
      storage: createJSONStorage(() => sessionStorage), // استفاده از sessionStorage برای ذخیره‌سازی
    }
  )
);

export { useAllProductStore };
