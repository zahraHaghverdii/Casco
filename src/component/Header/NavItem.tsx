"use client";

import Link from "next/link";
import DropdownNav from "./DropdownNav";
import { usePathname, useSearchParams } from "next/navigation";

import NavItemResponsive from "./NavItemResponsive";

interface TcategoryMap {
  link: string;
  text: string;
}

const categoryMap: TcategoryMap[] = [
  { link: "smartwatch", text: "ساعت هوشمند" },
  { link: "laptop", text: "لپ تاپ" },
  { link: "headphones", text: "هندزفری" },
  { link: "smart_home", text: "خانه هوشمند" },
  { link: "digital_goods", text: "کالای دیجیتال" },
  { link: "camera", text: "دوربین دیجیتالی" },
  { link: "projector", text: "پروژکتور" },
  { link: "computer_parts", text: "قطعات کامپیوتر" },
  { link: "accessories", text: "اکسسوری" },
  { link: "computer_peripherals", text: "لوازم جانبی کامپیوتر" },
  { link: "audio_devices", text: "دستگاه های صوتی" },
];

export default function NavItem({
  activeDropdown,
  setActiveDropdown,
  showNavbar,
  setShowNavbar,
}: {
  activeDropdown: string;
  setActiveDropdown: (id: string) => void;
  setShowNavbar: (boolean: boolean) => void;
  showNavbar: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get("category");
  // تابع بررسی فعال بودن لینک
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* نسخه دسکتاپ */}
      <div className="hidden md:flex justify-between items-center gap-5 md:w-[35%] mx-auto">
        <Link href={"/"}>
          <span
            className={`hover:text-(--color-Gray-200) ${
              isActive("/") ? "text-(--color--Blue-700)" : "text-[#353535]"
            }`}
          >
            صفحه اصلی
          </span>
        </Link>
        <DropdownNav
          title={"محصولات"}
          id="product"
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        >
          {categoryMap.map((item) => (
            <Link
              href={`/product?category=${item.link}`}
              key={item.link}
              className="cursor-pointer flex justify-start items-center gap-3 border-b border-gray-200 pb-5 last:pb-2 last:mb-3 first:pt-2 last:border-none"
            >
              <span
                className={`text-xl ${
                  category === item.link ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </DropdownNav>
        <Link href={"/aboutUs"}>
          <span
            className={`hover:text-(--color-Gray-200) ${
              isActive("/aboutUs")
                ? "text-(--color--Blue-700)"
                : "text-[#353535]"
            }`}
          >
            درباره ما
          </span>
        </Link>
        <Link href={"/contactUs"}>
          <span
            className={`hover:text-(--color-Gray-200) ${
              isActive("/contactUs")
                ? "text-(--color--Blue-700)"
                : "text-(--color-Gray-200)"
            }`}
          >
            تماس با ما
          </span>
        </Link>
      </div>

      {/* نسخه موبایل */}
      <NavItemResponsive
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
        categoryMap={categoryMap}
      />
    </>
  );
}
