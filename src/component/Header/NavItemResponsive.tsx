"use client";

import Overlay from "@/ui/Overlay";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  HomeIcon,
  PhoneCall,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const menuVariants = {
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  closed: {
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

interface TcategoryMap {
  link: string;
  text: string;
}

export default function NavItemResponsive({
  setShowNavbar,
  showNavbar,
  categoryMap,
}: {
  setShowNavbar: (boolean: boolean) => void;
  showNavbar: boolean;
  categoryMap: TcategoryMap[];
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setShowNavbar(!showNavbar);
  };

  // بستن زیرمنو هنگام تغییر مسیر
  useEffect(() => {
    setShowNavbar(false);
  }, [setShowNavbar, pathname]);

  // تابع بررسی فعال بودن لینک
  const isActive = (path: string) => pathname === path;

  const categoriParams = useSearchParams();
  const categoriValue = categoriParams.get("category");

  return (
    <div className="relative">
      {/* Sliding Menu */}
      <motion.div
        initial="closed"
        animate={showNavbar ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg border-l border-gray-200 z-50"
      >
        {/* Header Menu */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link
            href={"/"}
            className="flex justify-center md:justify-start items-center gap-2"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/image_project/logo/logo.png"
                alt="فروشگاه دیجیتالی"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 hidden sm:flex">
              فروشگاه دیجیتالی
            </span>
          </Link>
          <span
            className="p-2 text-(--color-Gray-200) cursor-pointer"
            onClick={toggleMenu}
          >
            ✕
          </span>
        </div>
        {/* Main Menu */}
        <ul className="p-4 space-y-4 h-[550px] overflow-y-auto scrollbar-style">
          {/* home page */}
          <li className={`border-b border-gray-200 pb-4`}>
            <Link
              href={"/"}
              className="flex justify-start items-center gap-x-3"
            >
              <HomeIcon
                width={15}
                height={15}
                className={`text-${
                  isActive("/") ? "(--color--Blue-700)" : "(--color-Gray)"
                }`}
              />
              <span
                className={`text-xl text-${
                  isActive("/") ? "(--color--Blue-700)" : "(--color-Gray)"
                }`}
              >
                صفحه اصلی
              </span>
            </Link>
          </li>

          {/* products */}
          <li
            className={`border-b border-gray-200 pb-4 `}
            onClick={() => setShowDropdown((show) => !show)}
          >
            <div className="flex justify-between items-center w-full cursor-pointer">
              <div className="flex justify-start items-center gap-x-3 ">
                <ShoppingBag
                  width={15}
                  height={15}
                  className={`text-${
                    isActive("/product")
                      ? "(--color--Blue-700)"
                      : "(--color-Gray)"
                  }`}
                />
                <span
                  className={`text-xl text-${
                    isActive("/product")
                      ? "(--color--Blue-700)"
                      : "(--color-Gray)"
                  }`}
                >
                  محصولات
                </span>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-400 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {showDropdown && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`scrollbar-style
              bg-gray-50 text-(--color-Gray) w-full h-[150px] overflow-y-auto flex flex-col justify-start items-right gap-y-6 text-xl p-4 rounded-3xl mt-7 my-3 cursor-pointer gap-2 z-30 relative`}
              >
                {categoryMap.map((category, index) => (
                  <Link
                    href={`product?category=${category.link}`}
                    key={index}
                    onClick={() => setShowNavbar(false)}
                    className={`border-b border-gray-100 last:border-0 pb-4`}
                  >
                    <span
                      className={`text-${
                        categoriValue === category.link
                          ? "(--color--Blue-700)"
                          : "(--color-Gray)"
                      }`}
                    >
                      {category.text}
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </li>

          {/* aboute us */}
          <li className={`border-b border-gray-200 pb-4`}>
            <Link
              href={"/aboutUs"}
              className="flex justify-start items-center gap-x-3"
            >
              <Users
                width={15}
                height={15}
                className={`text-${
                  isActive("/aboutUs")
                    ? "(--color--Blue-700)"
                    : "(--color-Gray)"
                }`}
              />
              <span
                className={`text-xl text-${
                  isActive("/aboutUs")
                    ? "(--color--Blue-700)"
                    : "(--color-Gray)"
                }`}
              >
                درباره ما
              </span>
            </Link>
          </li>

          {/* contact us */}
          <li className={`border-b border-gray-200 pb-4`}>
            <Link
              href={"/contactUs"}
              className="flex justify-start items-center gap-x-3"
            >
              <PhoneCall
                width={15}
                height={15}
                className={`text-${
                  isActive("/contactUs")
                    ? "(--color--Blue-700)"
                    : "(--color-Gray)"
                }`}
              />
              <span
                className={`text-xl text-${
                  isActive("/contactUs")
                    ? "(--color--Blue-700)"
                    : "(--color-Gray)"
                }`}
              >
                تماس با ما
              </span>
            </Link>
          </li>
          {/* cart */}
          <li>
            <Link
              href={"/cart"}
              className="flex justify-start items-center gap-x-3"
            >
              <ShoppingCart
                width={15}
                height={15}
                className={`text-${
                  isActive("/cart") ? "(--color--Blue-700)" : "(--color-Gray)"
                }`}
              />
              <span
                className={`text-xl text-${
                  isActive("/cart") ? "(--color--Blue-700)" : "(--color-Gray)"
                }`}
              >
                سبد خرید
              </span>
            </Link>
          </li>
        </ul>
      </motion.div>

      {/* Backdrop */}
      {showNavbar && (
        <Overlay onClick={() => setShowNavbar(false)} id="navbar" />
      )}
    </div>
  );
}
