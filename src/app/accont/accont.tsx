"use client";
import { useAccontStore } from "@/zustand/store";
import Dashbord_Accont from "./dashbord";
import Menu_accont from "./menu";
import Wishes_Accont from "./wishes";
import Buxbuy_Accont from "./buxbuy";
import ListCard_Accont from "./listcard";

export default function Accont() {
  const { component, fn_string } = useAccontStore();
  const item_menu = [
    {
      title: "information",
      component: <Dashbord_Accont></Dashbord_Accont>,
      text_title: "داشبرد",
    },
    {
      title: "whishes",
      component: <Wishes_Accont></Wishes_Accont>,
      text_title: "علاقه مندی ها",
    },
    {
      title: "buxBuy",
      component: <Buxbuy_Accont></Buxbuy_Accont>,
      text_title: "سبد خرید",
    },
    {
      title: "listBuy",
      component: <ListCard_Accont></ListCard_Accont>,
      text_title: "لیست خرید ",
    },
  ];
  return (
    <>
      <div className="w-[100%] flex justify-between h-[100%] lg:min-h-[80vh]">
        <div className=" w-[100%] lg:w-[200px]   flex justify-center items-center">
          {/* -----------------------------------------------------menu */}
          <Menu_accont />
        </div>

        <div className="w-[100%] justify-center items-center  hidden lg:flex ">
          {item_menu.map((item) =>
            item.title === component ? (
              <div
                key={item.title}
                className="w-[100%] flex justify-center items-center"
              >
                {item.component}
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
