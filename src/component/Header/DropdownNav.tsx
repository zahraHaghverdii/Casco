"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

export default function DropdownNav({
  title,
  children,
  id,
  activeDropdown,
  setActiveDropdown,
}: {
  title: ReactNode;
  children: ReactNode;
  id: string;
  activeDropdown: string;
  setActiveDropdown: (id: string) => void;
}) {
  const isActive = activeDropdown === id;
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const path = searchParams.get("category");
  const isActivePathName = (path: string) => pathname === path;

  const toggleDropdown = () => {
    setActiveDropdown(isActive ? "" : id);
  };

  // بستن زیرمنو هنگام تغییر مسیر
  useEffect(() => {
    setActiveDropdown("");
  }, [pathname, setActiveDropdown, path]);

  return (
    <div className="relative" ref={dropdownRef}>
      <span
        onClick={toggleDropdown}
        className={`cursor-pointer hover:text-(--color-Gray-200) ${
          isActivePathName("/product")
            ? "text-(--color--Blue-700)"
            : "text-[#353535]"
        }`}
      >
        {title}
      </span>

      {/* زیر منو */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${
              id === "product" && "md:left-[calc(100%-130px)] w-[200px]"
            } absolute top-[calc(100%+30px)] md:left-[calc(100%-30px)]  left-0 transform translate-x-0 
              flex flex-col gap-y-5 w-[174px] max-h-[250px] overflow-y-auto rounded-2xl p-4 z-50 scrollbar-style bg-gray-100 border border-gray-300 shadow-(--shadow)`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
