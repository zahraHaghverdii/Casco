import Container from "@/component/container";

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
          <img
            key={brand.alt}
            src={brand.image}
            alt={brand.alt}
            className="rounded-3xl max-md:w-[100%] mx-auto"
          />
        ))}
      </div>
    </Container>
  );
}

export default Brands;
