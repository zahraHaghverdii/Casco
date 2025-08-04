"use client";
import Container from "@/component/container";
import { Product } from "@/types/products";
import Image from "next/image";
import ViewAll_link from "@/component/ViewAll_link";
import Card from "@/component/Card";

// slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

interface SpecialOffersProps {
  specialOffers: Product[];
}
const AmazingDiscounts: React.FC<SpecialOffersProps> = ({ specialOffers }) => {
  return (
    <Container>
      <div className="relative my-20">
        <div className="w-full h-[500px] md:h-[350px] relative overflow-hidden rounded-4xl">
          <Image
            src={"/image_project/accessory/Asset-3-2.jpg"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority // برای بارگزاری سریع
          />
        </div>

        <div className="rtl absolute top-0 left-0 right-0 p-3.5 w-full h-screen rounded-4xl md:overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch  gap-4">
            <div className="w-full xl:w-1/4 md:w-1/2 flex justify-between md:items-center items-end flex-col gap-6">
              <TitleDiscount />
            </div>

            <div className="md:w-[80%] w-full md:h-[280px]  max-md:h-[290px]">
              <Swiper
                className="w-full mySwiper"
                autoplay={{
                  delay: 300000,
                  disableOnInteraction: false, // توقف نکند اگر کاربر اسلایدر را لمس کرد
                }}
                slidesPerView={1.5}
                spaceBetween={20}
                freeMode={true}
                loop={true}
                breakpoints={{
                  100: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  425: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.1,
                    spaceBetween: 10,
                  },
                  891: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1272: {
                    slidesPerView: 3.3,
                    spaceBetween: 15,
                  },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
              >
                {specialOffers.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Card product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Title Discount
function TitleDiscount() {
  return (
    <>
      <div className="w-full flex justify-between items-center  md:flex-col flex-row gap-3">
        <div className=" font-(Dana) lg:text-[21px] md:tex-[19px] text-[22px] text-(--color-White) font-bold text-right md:text-center flex flex-col md:gap-3 sm:gap-5 ">
          <span> تخفیفات </span>
          <span>شگفت انگیز </span>
          <span>فروشگاه دیجیتالی</span>
        </div>
        <div className="relative w-[78px] h-[100px] lg:w-[78px] lg:h-[100px] md:h-[67px] md:w-[50px]  ">
          <Image
            src={"/image_project/accessory/access-darsad.png"}
            alt="%"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className=" w-full flex justify-start md:justify-center">
        <ViewAll_link link="/product" color="--color-White" />
      </div>
    </>
  );
}

export default AmazingDiscounts;
