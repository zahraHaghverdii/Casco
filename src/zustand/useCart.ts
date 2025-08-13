import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TCartItem {
  id: number;
  qty: number;
}

interface CartState {
  cartItems: TCartItem[];
  handleIncreaseCartProduct: (id: number) => void;
  handleReduceCartProduct: (id: number) => void;
  handelRemoveItem: (id: number) => void;
  countItemCartProduct: (id: number) => number;
  setCartItems: (cartItems: TCartItem[]) => void;
  clearCart: () => void;
  getTotalCartQty: () => number;
}

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      handleIncreaseCartProduct: (id) =>
        set((state) => {
          const existingProduct = state.cartItems.find(
            (item) => item.id === id
          );
          if (existingProduct) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { id, qty: 1 }],
            };
          }
        }),

      handleReduceCartProduct: (id) =>
        set((state) => {
          const existingProduct = state.cartItems.find(
            (item) => item.id === id
          );
          if (existingProduct && existingProduct.qty > 1) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === id ? { ...item, qty: item.qty - 1 } : item
              ),
            };
          } else {
            return {
              cartItems: state.cartItems.filter((item) => item.id !== id),
            };
          }
        }),

      handelRemoveItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),

      countItemCartProduct: (id) => {
        const product = get().cartItems.find((item) => item.id === id);
        return product ? product.qty : 0;
      },

      setCartItems: (cartItems) => set({ cartItems }),

      clearCart: () => set({ cartItems: [] }),

      getTotalCartQty: () =>
        get().cartItems.reduce((total, item) => total + item.qty, 0),
    }),
    {
      name: "cart-store",
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => sessionStorage)
          : undefined, // برای SSR
    }
  )
);

export { useCart };
