import Container from "@/component/container";
import TitleHeader from "@/component/title_header";
import Image from "next/image";
import Link from "next/link";

type TCategory = {
  icon: string;
  title: string;
};

const ACategories: TCategory[] = [
  {
    title: "هدفون",
    icon: "/icons/Category/headphones.png",
  },
  { title: "لوازم خانگی", icon: "/icons/Category/electric-appliance.png" },
  { title: "ساعت هوشمند", icon: "/icons/Category/watch.png" },
  { title: "جاروبرقی", icon: "/icons/Category/vacuum.png" },
  { title: "ماشین لباسشویی", icon: "/icons/Category/washing-machine.png" },
  { title: "لپ تاپ", icon: "/icons/Category/video-lesson.png" },
  { title: "خانه هوشمند", icon: "/icons/Category/smart-house.png" },
  { title: "کنسول بازی", icon: "/icons/Category/console.png" },
  { title: "کالای دیجیتال", icon: "/icons/Category/iphone.png" },
];

export default function Product_Categories() {
  return (
    <Container>
      <div className="my-16 rtl">
        {/* title */}
        <TitleHeader title={"دسته بندی محصولات"} />
        {/* category */}
        <div className="flex justify-between items-center overflow-x-auto gap-12 overflow-y-hidden whitespace-nowrap  scrollbar-style">
          {ACategories.map((category) => (
            <Link href={`/product/${category.title}`} key={category.title}>
              <div className=" w-auto flex shrink-0 flex-col justify-between gap-4 items-center overflow-hidden">
                <div className="w-32 h-32  flex justify-center items-center  m-auto">
                  <div className="w-24 h-24 relative ">
                    <Image
                      alt={category.title}
                      src={category.icon}
                      fill
                      style={{ objectFit: "cover" }}
                      priority // برای بارگزاری سریع
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <p className="text-(--color-Dark-20) sm:text-[15px] text-[13px]">
                  {category.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
