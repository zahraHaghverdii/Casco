"use client";

import Card from "@/component/Card";
import { Product } from "@/types/products";

// slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SpecialOffersProps {
  filterProduct: Product[];
}
const SliderOffers: React.FC<SpecialOffersProps> = ({ filterProduct }) => {
  return (
    <div className="w-full">
      <Swiper
        className="w-full mySwiper"
        autoplay={{
          delay: 300000,
          disableOnInteraction: false, // توقف نکند اگر کاربر اسلایدر را لمس کرد
        }}
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          891: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1272: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {filterProduct.map((product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderOffers;
