"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu_Home from "./menu_home";
import { useState } from "react";

export default function Navbar() {
  const [open_menu, set_open_menu] = useState<boolean>(false);
  const pathname = usePathname();
  const Items = [
    { text_title: "درباره ما", title: "aboutUs", href: "/aboutUs" },
    { text_title: "محصولات", title: "product", href: "/product" },
    { text_title: "خانه", title: "Home", href: "/" },
  ];

  return (
    <>
      <nav
        className={`lg:flex hidden w-[100%] h-[70px]  ${
          pathname === "/accont" ? "bg-white" : "bg-[#eeeeee07]"
        } justify-between items-center border-b-[1px] border-[#8080803c] px-[10px] sticky top-0`}
      >
        <div className=" h-[100%] flex items-center gap-5  ">
          {/*  ------------------------------car */}
          <button className="flex w-[40px] h-[40px] rounded-[5px] border-[1px] border-[#80808010]  justify-center items-center cursor-pointer transition-color duration-200 delay-100 hover:bg-[#efefef7c]  ">
            <img src="/icons/buxbuy.svg" className="w-[20px] h-[20px]" />
          </button>
          {/*  -----------------------accont */}
          <Link
            href={"/login"}
            className="flex w-[40px] h-[40px] rounded-[5px] border-[1px] border-[#80808010]  justify-center items-center transition-color duration-200 delay-100 hover:bg-[#efefef7c]"
          >
            <img src="/icons/user.svg" className="w-[20px] h-[20px]" />
          </Link>
          {/* --------------------------------search  */}
          <div className="flex  justify-between items-center h-[40px] w-[210px] gap-2 rounded-[5px] border-[1px] border-[#8080802a] px-[5px] ">
            <img src="/icons/search.svg" className="w-[15px] h-[15px]" />
            <input
              type="text"
              className="w-[100%] h-[38px] outline-none text-[16px] text-right text-[#000000ab] "
              placeholder="جست جو"
            />
          </div>
        </div>
        {/* -------------------------------------------items */}
        <div className="flex items-center gap-5.5 h-[100%]">
          {Items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex justify-center items-center w-[70px] h-[40px] rounded-[10px] ${
                pathname === item.href ? "bg-slate-200" : ""
              }`}
            >
              <span className="text-[14px] font-[600] text-[#000000c5] ">
                {item.text_title}
              </span>
            </Link>
          ))}
          {/* --------------------------------------------logo */}
          <Link href={"/"} className="w-[120px] text-center">
            <span className=" font-[700] text-[26px] text-[#000000b7]">
              cold vision
            </span>
          </Link>
        </div>

        {/* ---------for mobile */}
      </nav>
      <nav className="lg:hidden flex w-[100%] h-[70px]  bg-[#eeeeee07]  justify-between items-center border-b-[1px] border-[#8080803c] px-[10px] sticky top-0">
        <div
          className="s w-[40px] h-[40px] rounded-[5px] border-[1px] border-[#80808010] flex  justify-center items-center transition-color duration-200 delay-100 hover:bg-[#efefef7c]"
          onClick={(e) => {
            set_open_menu((prev) => !prev);
          }}
        >
          <img src="/icons/menu.svg" className="w-[20px] h-[20px]" />
        </div>
        <div>
          <Link href={"/"} className="w-[120px] text-center">
            <span className=" font-[700] text-[26px] text-[#000000b7]">
              cold vision
            </span>
          </Link>
        </div>
        <div className="s w-[40px] h-[40px] rounded-[5px] border-[1px] border-[#80808010]  flex justify-center items-center transition-color duration-200 delay-100 hover:bg-[#efefef7c]">
          <img src="/icons/buxbuy.svg" className="w-[20px] h-[20px]" />
        </div>
      </nav>
      {open_menu && (
        <Menu_Home openmenu={open_menu} setOpenMenu={set_open_menu} />
      )}
    </>
  );
}
