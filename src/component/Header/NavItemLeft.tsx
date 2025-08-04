"use client";
import Image from "next/image";
import React from "react";
import DropdownNav from "./DropdownNav";
import Link from "next/link";
import Modal from "../Modal";
import Search from "../Search";
import { useCart } from "@/zustand/useCart";

export default function NavItemLeft({
  activeDropdown,
  setActiveDropdown,
  showModal,
  setShowModal,
}: {
  showModal: string;
  setShowModal: (id: string) => void;
  activeDropdown: string;
  setActiveDropdown: (id: string) => void;
}) {
  const DropdownLogin = [
    { text: "پروفایل من", icon: "/icons/user.svg", link: "/" },
    { text: "پیگیری سفارش", icon: "/icons/user.svg", link: "/" },
    { text: "آدرس های من", icon: "/icons/user.svg", link: "/" },
    { text: "خروج", icon: "/icons/user.svg", link: "/" },
  ];

  const totalCartQty = useCart((state) => state.getTotalCartQty?.()) || 0;

  return (
    <div className="flex justify-end items-center gap-4">
      {/* search */}
      <div className="cursor-pointer bg-gray-200 rounded-2xl w-12 h-12 flex justify-center items-center md:w-14 md:h-14 relative">
        {/* Modal search */}
        <Modal
          title="جستوجو"
          showModal={showModal}
          setShowModal={setShowModal}
          SetactivElse={setActiveDropdown}
          id={"modalSearch"}
          button={
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <Image
                src={"/icons/search.svg"}
                alt="جستجو"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          }
        >
          <Search />
        </Modal>
      </div>

      {/* Cart */}
      <Link
        href={"/cart"}
        className="relative md:flex hidden bg-gray-200 rounded-2xl w-12 h-12  md:justify-center md:items-center md:w-14 md:h-14"
      >
        <div className="relative w-6 h-6 md:w-7 md:h-7">
          <Image
            src={"/icons/buxbuy.svg"}
            alt="سبد خرید"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {totalCartQty > 0 && (
          <div className="text-xl w-6 h-6 text-(--color-White) absolute left-0 top-0 bg-(--color--Primary-700) p-2 rounded-full flex items-center justify-center">
            <span className="text-center">{totalCartQty}</span>
          </div>
        )}
      </Link>

      {/* Login */}
      <div className="relative bg-gray-200 rounded-2xl w-12 h-12 flex justify-center items-center md:w-14 md:h-14">
        <DropdownNav
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id={"signUp"}
          title={
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <Image
                src={"/icons/user.svg"}
                alt="ورود"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          }
        >
          {DropdownLogin.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex justify-start items-center gap-3 border-b border-gray-200 pb-3 last:pb-2 first:pt-2 last:border-none last:text-blue-700"
            >
              <span className="relative w-6 h-6">
                <Image
                  src={item.icon}
                  alt={item.text}
                  objectFit="contain"
                  priority
                  fill
                />
              </span>
              <span className="text-xl md:text-base text-gray-600">
                {item.text}
              </span>
            </Link>
          ))}
        </DropdownNav>
      </div>
    </div>
  );
}
