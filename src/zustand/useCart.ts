// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

// interface TCartItem {
//   id: number;
//   qty: number;
// }

// interface CartState {
//   cartItems: TCartItem[];
//   handleIncreaseCartProduct: (id: number) => void;
//   handleReduceCartProduct: (id: number) => void;
//   handelRemoveItem: (id: number) => void;
//   countItemCartProduct: (id: number) => number;
//   setCartItems: (cartItems: TCartItem[]) => void;
//   clearCart: () => void;

//   totalCartQty: number;
//   getTotalCartQty: () => number;

//   // totalCartQty: number;
//   // getTotalCartQty: () => number; // 👈 اضافه کن
// }

// const useCart = create<CartState>()(
//   persist(
//     (set, get) => ({
//       cartItems: [],

//       // کم کردن تعداد محصول
//       handleReduceCartProduct: (id) =>
//         set((state) => {
//           const existingProduct = state.cartItems.find(
//             (item) => item.id === id
//           );

//           if (existingProduct) {
//             // اگر محصول موجود بود، تعداد را افزایش می‌دهد
//             return {
//               cartItems: state.cartItems.map((item) =>
//                 item.id === id ? { ...item, qty: item.qty - 1 } : item
//               ),
//             };
//           }
//         }),

//       //افزودن یا افزایش تعداد محصول
//       handleIncreaseCartProduct: (id) =>
//         set((state) => {
//           const existingProduct = state.cartItems.find(
//             (item) => item.id === id
//           );
//           if (existingProduct) {
//             // اگر محصول موجود بود، تعداد را افزایش می‌دهد
//             return {
//               cartItems: state.cartItems.map((item) =>
//                 item.id === id ? { ...item, qty: item.qty + 1 } : item
//               ),
//             };
//           } else {
//             // اگر محصول موجود نبود، آن را اضافه می‌کند
//             return {
//               cartItems: [...state.cartItems, { id, qty: 1 }],
//             };
//           }
//         }),

//       // حذف از سبد خرید
//       handelRemoveItem: (id) => {
//         set((state) => {
//           const b = state.cartItems.filter((item) => item.id !== id);
//           console.log(b);
//           return {
//             cartItems: b,
//           };
//         });
//       },

//       // نمایش تعداد محصولات یک آیتم
//       countItemCartProduct: (id) => {
//         const product = get().cartItems.find((item) => item.id === id);
//         return product ? product.qty : 0;
//       },

//       // محاسبه تعداد کل محصولات
//       totalCartQty: 0, // مقدار اولیه
//       // getTotalCartQty: () =>
//       //   get().cartItems.reduce((total, item) => total + item.qty, 0),

//       getTotalCartQty: () =>
//         get().cartItems.reduce((sum, item) => sum + item.qty, 0),

//       // تنظیم دستی لیست محصولات
//       setCartItems: (cartItems) => {
//         set({ cartItems });
//       },

//       // پاک کردن کل سبد خرید
//       clearCart: () => set({ cartItems: [] }),
//     }),
//     {
//       name: "cart-store", // کلید ذخیره‌سازی
//       storage:
//         typeof window !== "undefined"
//           ? createJSONStorage(() => sessionStorage)
//           : createJSONStorage(() => localStorage), // یا حتی nullstorage
//     }
//   )
// );

// export { useCart };

// "use client";
// import Image from "next/image";
// import React from "react";
// import DropdownNav from "./DropdownNav";
// import Link from "next/link";
// import Modal from "../Modal";
// import Search from "../Search";
// import { useCart } from "@/zustand/useCart";

// export default function NavItemLeft({
//   activeDropdown,
//   setActiveDropdown,
//   showModal,
//   setShowModal,
// }: {
//   showModal: string;
//   setShowModal: (id: string) => void;
//   activeDropdown: string;
//   setActiveDropdown: (id: string) => void;
// }) {
//   const DropdownLogin = [
//     { text: "پروفایل من", icon: "/icons/user.svg", link: "/" },
//     { text: "پیگیری سفارش", icon: "/icons/user.svg", link: "/" },
//     { text: "آدرس های من", icon: "/icons/user.svg", link: "/" },
//     { text: "خروج", icon: "/icons/user.svg", link: "/" },
//   ];

//   const totalCartQty = useCart((state) => state.getTotalCartQty()) || 0;

//   // const totalCartQty =
//   //   useCart((state) =>
//   //     state?.cartItems?.reduce((total, item) => total + item.qty, 0)
//   //   ) || 0;

//   return (
//     <div className="flex justify-end items-center gap-4">
//       {/* search */}
//       <div className="cursor-pointer bg-gray-200 rounded-2xl w-12 h-12 flex justify-center items-center md:w-14 md:h-14 relative">
//         {/* Modal search */}
//         <Modal
//           title="جستوجو"
//           showModal={showModal}
//           setShowModal={setShowModal}
//           SetactivElse={setActiveDropdown}
//           id={"modalSearch"}
//           button={
//             <div className="relative w-6 h-6 md:w-7 md:h-7">
//               <Image
//                 src={"/icons/search.svg"}
//                 alt="جستجو"
//                 layout="fill"
//                 objectFit="contain"
//                 priority
//               />
//             </div>
//           }
//         >
//           <Search />
//         </Modal>
//       </div>

//       {/* Cart */}
//       <Link
//         href={"/cart"}
//         className="relative md:flex hidden bg-gray-200 rounded-2xl w-12 h-12  md:justify-center md:items-center md:w-14 md:h-14"
//       >
//         <div className="relative w-6 h-6 md:w-7 md:h-7">
//           <Image
//             src={"/icons/buxbuy.svg"}
//             alt="سبد خرید"
//             layout="fill"
//             objectFit="contain"
//             priority
//           />
//         </div>

//         {totalCartQty > 0 && (
//           <div className="text-xl w-6 h-6 text-(--color-White) absolute left-0 top-0 bg-(--color--Primary-700) p-2 rounded-full flex items-center justify-center">
//             <span className="text-center">{totalCartQty}</span>
//           </div>
//         )}
//       </Link>

//       {/* Login */}
//       <div className="relative bg-gray-200 rounded-2xl w-12 h-12 flex justify-center items-center md:w-14 md:h-14">
//         <DropdownNav
//           activeDropdown={activeDropdown}
//           setActiveDropdown={setActiveDropdown}
//           id={"signUp"}
//           title={
//             <div className="relative w-6 h-6 md:w-7 md:h-7">
//               <Image
//                 src={"/icons/user.svg"}
//                 alt="ورود"
//                 layout="fill"
//                 objectFit="contain"
//                 priority
//               />
//             </div>
//           }
//         >
//           {DropdownLogin.map((item, index) => (
//             <Link
//               href={item.link}
//               key={index}
//               className="flex justify-start items-center gap-3 border-b border-gray-200 pb-3 last:pb-2 first:pt-2 last:border-none last:text-blue-700"
//             >
//               <span className="relative w-6 h-6">
//                 <Image
//                   src={item.icon}
//                   alt={item.text}
//                   objectFit="contain"
//                   priority
//                   fill
//                 />
//               </span>
//               <span className="text-xl md:text-base text-gray-600">
//                 {item.text}
//               </span>
//             </Link>
//           ))}
//         </DropdownNav>
//       </div>
//     </div>
//   );
// }

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
