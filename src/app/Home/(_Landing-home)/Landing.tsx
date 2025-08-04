"use client";

import Container from "@/component/container";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// slider
import "./slider-landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

type TLanding = {
  title: string;
  text: string;
  text_btn: string;
  product: string;
  product_res: string;
  back_img: string;
  back_img_res: string;
};

const ALanding: TLanding[] = [
  {
    title: "فروشگاه کالای دیجیتال",
    text: "فروشگاه دیجیتالی تک لند",
    text_btn: "مشاهده محصولات",
    product: "/image_project/background/landing-home/laptoppng.png",
    product_res: "/image_project/background/landing-home/laptoppng-res.png",
    back_img: "/image_project/background/landing-home/laptap-back.jpg",
    back_img_res: "/image_project/background/landing-home/laptap-back.jpg",
  },
  {
    title: "فروشگاه لوازم خانگی تک لند",
    text: "فروشگاه لوازم خانگی تک لند",
    text_btn: "مشاهده محصولات",
    product: "/image_project/background/landing-home/lavazem.png",
    product_res: "/image_project/background/landing-home/lavazem-res.png",
    back_img: "/image_project/background/landing-home/lavazem-bak.jpg",
    back_img_res: "/image_project/background/landing-home/lavazem-res-bak.jpg",
  },
  {
    title: "در خانه خود کنسرت داشته باش !!",
    text: "HARMEN KARDON",
    text_btn: "با محصولات هارمن کاردن",
    product: "/image_project/background/landing-home/band-1.png",
    // product2: "/image_project/background/landing-home/band-2.png",
    product_res: "/image_project/background/landing-home/band-1.png",
    back_img: "/image_project/background/landing-home/band-back.png",
    back_img_res: "/image_project/background/landing-home/band-back-res.jpg",
  },
];

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  //بررسی اندازه صفحه
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); //window.innerWidth ==> شناسایی عرض صفحه
    };
    // اجرا هنگام بارگذاری
    handleResize();
    //هر زمان که اندازه صفحه تغییر کرد تابع اجرا میشه
    window.addEventListener("resize", handleResize);
    //زمانی که اندازه صفحه از حالت خواسته شده یعنی640 خارج بشه تابع handlerResize حذف میشه و دیکه اجرا نمیشه تا مجدد اندازه صفحه به روز بشه
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // توقف نکند اگر کاربر اسلایدر را لمس کرد
      }}
      effect="fade" // تنظیم افکت محو شدن
      loop={true} // بازگشت به اسلاید اول پس از پایان
      pagination={{
        clickable: true, // امکان کلیک روی نقاط
        el: ".custom-pagination", // عنصر HTML سفارشی
      }}
      navigation={{
        nextEl: ".custom-next", // دکمه بعدی سفارشی
        prevEl: ".custom-prev", // دکمه قبلی سفارشی
      }}
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
    >
      {ALanding.map((banner, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <div className="w-full h-[450px] md:h-[350px] lg:h-[450px] xl:h-[500px] relative overflow-hidden">
            <Image
              src={isMobile ? banner.back_img_res : banner.back_img}
              alt={banner.title}
              fill
              style={{ objectFit: "cover" }}
              priority // برای بارگزاری سریع
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* محتوای اسلاید */}
          <div className="absolute lg:top-14 top-7 md:right-0 md:left-0 left-4 right-4">
            <Container>
              <div className=" h-[400px] flex md:flex-row flex-col-reverse gap-4 justify-around items-center rtl">
                {/* text */}
                <motion.div
                  // key={`motion-${currentSlide}-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    currentSlide === index
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-[50%] w-full text-center md:text-right"
                >
                  <p className="lg:text-7xl text-[31px] text-(--color-White)  font-bold">
                    {banner.title}
                  </p>
                  {!isMobile && (
                    <p className="lg:text-4xl text-3xl font-sans text-(--color-White)  mt-12 mb-11">
                      {banner.text}
                    </p>
                  )}
                  {!isMobile && (
                    <div className="bg-amber-50 text-orange-600 text-center py-4 text-2xl cursor-pointer w-2/6 rounded-2xl">
                      <Link href="/product">{banner.text_btn}</Link>
                    </div>
                  )}
                </motion.div>
                {/* img*/}
                <motion.div
                  key={`motion-${currentSlide}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    currentSlide === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-[50%] lg:h-[100%] md:h-[60%] h-[50%]  w-full relative"
                >
                  <Image
                    src={isMobile ? banner.product : banner.product_res}
                    alt={banner.title}
                    fill
                    style={{ objectFit: "contain" }}
                    priority // برای بارگزاری سریع
                  />
                </motion.div>
              </div>
            </Container>
          </div>

          {/* دکمه قبل و بعد */}
          <div className="custom-prev">
            <ChevronLeft />
          </div>
          <div className="custom-next">
            <ChevronRight />
          </div>
        </SwiperSlide>
      ))}

      {/* نقطه های اسلایدر */}
      <div className="custom-pagination"></div>
    </Swiper>
  );
}
