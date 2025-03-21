"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  openmenu: boolean;
  setOpenMenu: (bool: boolean) => void;
}
export default function Menu_Home({ openmenu, setOpenMenu }: Props) {
  const pathname = usePathname();
  const item_menu = [
    { text_title: "درباره ما", title: "aboutUs", href: "/aboutUs" },
    { text_title: "محصولات", title: "product", href: "/product" },
    { text_title: "حساب کاربری", title: "accont", href: "/accont" },
    { text_title: "سبد خرید", title: "checkout", href: "/" },
    { text_title: "خروج", title: "log_out", href: "/" },
  ];

  return (
    <>
      <div
        className="w-[100%] h-[100%] absolute z-30   top-0"
        onClick={() => {
          setOpenMenu(false);
        }}
      >
        <div
          className={`w-[200px] h-[100%] absolute left-0 top-0 z-40 bg-white flex flex-col gap-[5px] 
        transition-all duration-300 transform ${
          openmenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        >
          {" "}
          {/* logo */}
          <div>
            <Link
              href={"/"}
              className="w-[100%] flex justify-center items-center h-[80px]"
            >
              <span className=" font-[700] text-[26px] text-[#000000b7]">
                cold vision
              </span>
            </Link>
          </div>
          {/* items */}
          <div
            className=" flex flex-col gap-2 w-[100%] h-[100%] relative "
            onClick={(event) => event.stopPropagation()}
          >
            {item_menu.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`w-[100%] h-[40px] hover:bg-[#dcdcdc82] flex items-center justify-end pr-[10px] ${
                  pathname === item.href ? "bg-[#e8bbfff8]" : "white"
                } text-[16px] text-[#000000ce] ${
                  item.title === "log_out" ? "absolute bottom-2" : ""
                } `}
              >
                <span>{item.text_title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
