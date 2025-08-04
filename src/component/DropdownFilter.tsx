"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { JSX, ReactNode, useEffect, useState } from "react";
import ClearFilter from "./ClearFilter";
import Overlay from "@/ui/Overlay";

interface TItems {
  id: string; // شناسه منحصربه‌فرد برای هر Dropdown
  title: string;
  productLength: number;
  icon: JSX.Element | "";
  children: ReactNode;
  activeDropdown: string | null;
  activeOverlay: string | null;
  toggleDropdown: (id: string) => void;
}
export default function Dropdown({
  id,
  title,
  icon,
  children,
  productLength,
  activeDropdown,
  toggleDropdown,
}: TItems) {
  const [isMobile, setIsMobile] = useState(false);
  //بررسی اندازه صفحه
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = activeDropdown === id;

  return (
    <>
      <div className={`md:${isActive ? "mb-5" : "mb-10"} relative`}>
        {/* Overlay برای فعال شدن */}
        {isMobile
          ? isActive && (
              <Overlay
                onClick={() => toggleDropdown("")}
                id="dropdown_filter"
              />
            )
          : ""}

        <div
          className={`${
            isActive &&
            "bg-gray-200 border-gray-300 md:bg-transparent border-none"
          } w-full flex justify-between items-center mb-1 cursor-pointer gap-2 md:gap-0
        border border-gray-300 rounded-3xl p-3 md:border-none z-30 relative`}
          onClick={() => toggleDropdown(id)}
        >
          {icon ? icon : ""}
          <span className="md:text-2xl text-xl font-medium text-gray-700 md:text-gray-800">
            {title}
          </span>
          <ChevronDown
            className={`w-6 h-6 text-gray-400 transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* منو */}
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-gray-300 rounded-t-md md:border-none fixed bottom-0 left-0 md:relative w-full bg-(--color-White-10) shadow-(--shadow) md:shadow-none z-40 md:z-0 md:bg-transparent overflow-hidden"
          >
            {children}

            <div className="md:hidden flex items-center px-3 py-10 gap-5">
              <div className="flex items-center gap-3 bg-gray-300 p-3 border border-gray-400 text-gray-800  rounded-2xl">
                <span>تعداد محصولات :</span>
                <span>{productLength}</span>
              </div>

              <div onClick={() => toggleDropdown("")}>
                <ClearFilter color="(--color--Primary-700)" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
