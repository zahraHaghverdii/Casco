"use client";
import { useCart } from "@/zustand/useCart";
import CartProduct from "./CartProduct";

export default function CartProducts() {
  const { cartItems } = useCart();

  console.log(cartItems);

  return (
    <div className="flex flex-col gap-y-5 border border-gray-100  rounded-2xl md:w-[60%]  w-full p-8 ">
      {cartItems.length <= 0 ? (
        <p>محصولی موجود نیست</p>
      ) : (
        cartItems.map((item) => <CartProduct key={item.id} {...item} />)
      )}
    </div>
  );
}
