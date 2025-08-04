"use client";
import Breadcrumb from "@/component/Breadcrumb";
import Container from "@/component/container";
import CartPriceTotale from "./CartPriceTotale";
import CartProducts from "./CartProducts";

function page() {
  return (
    <Container>
      <Breadcrumb />

      <div className="flex flex-col md:flex-row md:gap-x-10 gap-y-6 justify-between items-stretch p-6 rtl">
        {/* محصولات */}
        <CartProducts />

        {/* قیمت نهایی */}
        <CartPriceTotale />
      </div>
    </Container>
  );
}

export default page;
