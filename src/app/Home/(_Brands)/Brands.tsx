import Container from "@/component/container";
import Image from "next/image";

const ABrands = [
  { image: "/image_project/Brands/canon.png", alt: "کانون" },
  { image: "/image_project/Brands/razer.png", alt: "ریزر" },
  { image: "/image_project/Brands/samsung.png", alt: "سامسونگ" },
  { image: "/image_project/Brands/suny.png", alt: "سونی" },
];

function Brands() {
  return (
    <Container>
      <div className=" grid md:grid-cols-4 md:gap-4 grid-cols-2  gap-2 mt-25 mx-auto">
        {ABrands.map((brand) => (
          <div
            className="relative w-full aspect-[4/3]" // نسبت تصویر
            key={brand.alt}
          >
            <Image
              src={brand.image}
              alt={brand.alt}
              fill
              className="rounded-3xl"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Brands;
