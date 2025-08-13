import Container from "@/component/container";
import Image from "next/image";

const Abanners = [
  { image: "/image_project/banner/banner1.webp", alt: "فروشگاه دیجیتالی" },
  { image: "/image_project/banner/banner2.webp", alt: "فروشگاه دیجیتالی" },
];

export default function Banner() {
  return (
    <Container>
      <div className=" grid md:grid-cols-2 grid-cols-1  md:gap-x-7 gap-y-7 mt-15 mx-auto">
        {Abanners.map((banner, index) => (
          <div
            className="relative w-[100%] h-[100%]"
            key={`${banner.alt}_${index}`}
          >
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl max-md:w-[100%] mx-auto object-cover"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
