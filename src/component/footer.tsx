import Link from "next/link";

export default function Footer() {
  const Items = [
    { title: "About Us", text_title: " درباره ما", href: "/aboutUs" },
    { title: "Contact Us", text_title: "تماس با ما", href: "/" },
    { title: "FAQ", text_title: "پرسش های متداول", href: "/" },
    { title: "Suggestions", text_title: "نظرات و پیشنهادات", href: "/" },
  ];
  const Information = [
    {
      title: "email",
      icon: "/icons/email.svg",
      text_title: "kinboy2025@gmail.com",
    },
    { title: "phone1", icon: "/icons/phone.svg", text_title: "09920206332" },
    { title: "phone2", icon: "/icons/phone.svg", text_title: "09201384215" },
  ];
  const Applications = [
    { app: "Facebook", icon: "/icons/facebook.svg" },
    { app: "telegram", icon: "/icons/telegram.svg" },
    { app: "Instagram", icon: "/icons/instagram.svg" },
  ];
  return (
    <>
      <div className="h-auto lg:h-[200px]  w-[100%] border-y-[1px] border-[#8080802b] flex flex-col-reverse gap-[30px] lg:flex-row justify-between px-[10px]">
        {/* --------------------------------------text */}
        <div className="flex justify-start items-center  flex-col w-[100%] lg:w-[400px] h-[100%] relative pt-[10px] gap-3">
          <div className="w-[100%] text-center">
            <Link
              href={"/"}
              className="text-[24px] font-[800] text-[#000000ca] text-left "
            >
              cold vision
            </Link>
          </div>
          <div className="text-right">
            <p className="text-[14px] text-[#000000] ">
              با بهترین قیمت و گارانتی معتبر، یخچال موردنظر خود را از ما تهیه
              کنید. 🚛 ارسال سریع به تمام نقاط!
            </p>
          </div>
          <div className="text-right mt-[20px]">
            <p className="text-[14px] text-[#000000cc] ">
              تهران ، اتوبان شهید صدر خیابان شریعتی ، روبه روی مترو شهید صدر
              کوچه اخوان ،پلاک 10
            </p>
          </div>
        </div>
        {/* ------------------------------information */}
        <div className="flex flex-col w-[100%] lg:w-[129px] justify-center ">
          {Information.map((item, index) => (
            <div
              className="flex gap-1 items-center  flex-row-reverse lg:flex-row justify-start cursor-pointer w-[100%]"
              key={index}
            >
              <img src={item.icon} className="w-[25px] h-[25px]" />

              <button className=" h-[40px] text-right cursor-pointer ">
                <span>{item.text_title}</span>
              </button>
            </div>
          ))}
        </div>
        {/*  ------------------------------items*/}
        <div className="flex flex-col w-[100%] lg:w-[200px] justify-center gap-[5px]">
          {Items.map((item, index) => (
            <Link href={item.href} className="w-[100%]  text-right" key={index}>
              <span className="text-[14px] text-[#050044cb] font-[600]">
                {item.text_title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-[100%] h-[50px] items-center justify-between">
        <div className=" flex justify-between gap-4 lg:gap-0">
          {Applications.map((item_app, index) => (
            <div
              key={index}
              className="flex  gap-1 w-auto lg:w-[100px] h-[40px] items-center justify-end  cursor-pointer"
            >
              <img src={item_app.icon} className="w-[25px] h-[25px]" />
              <span className="pt-[5px] hidden lg:block">{item_app.app}</span>
            </div>
          ))}
        </div>
        <div className="w-[200px] text-right ">
          <p className=" text-[12px] text-[#000000c7]">
            .حق کپی‌ رایت برای «مام» محفوظ است
          </p>
        </div>
      </div>
    </>
  );
}
//#1C274C
