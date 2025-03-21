"use client";

import { useAccontStore } from "@/zustand/store";
import { useRouter } from "next/navigation";

export default function Menu_accont() {
  const rout = useRouter();
  const menu_item = [
    { title: "information", text_title: "اطلاعات کاربری" },
    { title: "whishes", text_title: "علاقه‌مندی‌ها" },
    { title: "buxBuy", text_title: "سبد خرید" },
    { title: "listBuy", text_title: "تاریخچه خرید" },
    { title: "log_out", text_title: "خروج از حساب کاربری" },
  ];
  const { component, fn_string } = useAccontStore();
  return (
    <>
      <div className="w-[100%] g:w-[180px] rounded-[10px] bg-[white] lg:bg-[#F6F6F6] ">
        <div className="h-[100%] lg:h-[95px] w-[100%] flex flex-col justify-between items-center lg:border-b-[1px] border-[#80808043] my-[20px] gap-[5px] ml-[2px]">
          <div className="w-[90px] h-[90px] lg:w-[60px] lg:h-[60px] rounded-full bg-blue-300"></div>
          <div className="w-[100%] h-[30px] text-center">
            <span>kindboy2024</span>
          </div>
        </div>
        {menu_item.map((item) => (
          <div
            onClick={() => {
              if (item.title === "log_out") {
                rout.push("/");
              }
              fn_string(item.title);
            }}
            key={item.title}
            className={` w-[100%]  border-b-[1px] border-[gray] lg:border-0 h-[44px] lg:h-[36px] text-right px-[10px] my-[2.5px] hover:bg-[#ddf7ff] flex justify-end items-center text-[#000000a6] lg:rounded-[5px] cursor-pointer text-[16px]  lg:${
              component === item.title && item.title !== "log_out"
                ? "border-l-[4px] lg:border-[blue] lg:text-blue-500 "
                : ""
            } 
           `}
          >
            <span>{item.text_title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
