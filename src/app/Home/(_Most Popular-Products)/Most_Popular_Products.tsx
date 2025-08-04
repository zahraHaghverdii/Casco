"use client";

import Card from "@/component/Card";
import Container from "@/component/container";
import TitleHeader from "@/component/title_header";
import { Product } from "@/types/products";

// slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SpecialOffersProps {
  mostPopular: Product[];
}
const MostPopularProducts: React.FC<SpecialOffersProps> = ({ mostPopular }) => {
  return (
    <Container>
      <TitleHeader title="محبوب ترین کالا های ما" />

      <div className="w-full">
        <Swiper
          className="w-full mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // توقف نکند اگر کاربر اسلایدر را لمس کرد
          }}
          slidesPerView={1.5}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next", // دکمه بعدی سفارشی
            prevEl: ".custom-prev", // دکمه قبلی سفارشی
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2.1, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1272: { slidesPerView: 4.3, spaceBetween: 15 },
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
        >
          {mostPopular.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border-1 border-gray-300 rounded-2xl">
                <Card product={product} />
              </div>
            </SwiperSlide>
          ))}
          {/* دکمه قبل و بعد */}
          <div className="custom-prev">
            <ChevronLeft />
          </div>
          <div className="custom-next">
            <ChevronRight />
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default MostPopularProducts;
