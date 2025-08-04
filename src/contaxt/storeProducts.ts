import { create } from "zustand";
import { Product } from "../types/products";
import { fetchAllProducts } from "@/api/fetch_products";

interface DataState {
  data: Product[]; // یا نوع دقیق‌تر برای داده‌های شما
  error: string | null;
  loading: boolean;
  fetchProducts: () => Promise<void>;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

const useDataStore = create<DataState>((set) => ({
  data: [],
  error: null,
  loading: false,
  fetchProducts: async () => await fetchAllProducts(),
  setError: (error) => set({ error, loading: false }),
  setLoading: (loading) => set({ loading }),
}));

export default useDataStore;
