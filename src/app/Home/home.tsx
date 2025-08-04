"use client";

import AmazingDiscounts from "./(_Amazing-Discounts)/Amazing_Discounts";
import BestSellers from "./(_Best-Sellers)/Best_Sellers";
import Brands from "./(_Brands)/Brands";
import Landing from "./(_Landing-home)/Landing";
import MostPopularProducts from "./(_Most Popular-Products)/Most_Popular_Products";
import Offers from "./(_Offers)/Offers";
import Product_Categories from "./(_Product-Categories)/Product_Categories";
import Banner from "./(_Banner)/Banner";
import LoadingModal from "@/ui/LoadingModal";
import { Product } from "@/types/products";
import { useEffect } from "react";
import { useAllProductStore } from "@/zustand/useProducts";
import ErrorModal from "@/ui/ErrorMoadal";
import NoProductsFound from "@/component/NoProductsFound";

function Home({ products }: { products: Product[] }) {
  const { setProductsAll, setLoading, setError, loading, error, isEmpty } =
    useAllProductStore();

  //بررسی وضعیت محصول
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // شبیه‌سازی عملیات دریافت داده
        if (!products) <ErrorModal message="محصول یافت نشد" />;
        setProductsAll(products);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "خطای ناشناخته");
      }
    };

    fetchProducts();
  }, [products, setProductsAll, setLoading, setError]);
  if (loading) return <LoadingModal />;
  if (error) return <ErrorModal message={error} />;
  if (isEmpty) return <NoProductsFound />;

  // تخفیف ویژه
  const specialOffers = products.filter((item) => item.off && item.off >= 20);
  //محبوب ترین ها
  const mostPopular = products.filter(
    (item) => item.reviews && item.reviews > 0
  );

  return (
    <>
      {/* landing */}
      <Landing />
      {/* Product Categories */}
      <Product_Categories />
      {/* Amazing Discounts (تخفیف ویژه)*/}
      <AmazingDiscounts specialOffers={specialOffers} />
      {/* Brands */}
      <Brands />
      {/* Best Sellers (پرفروش ترین ها)*/}
      <BestSellers products={products} />
      {/* Banner */}
      <Banner />
      {/* Offers */}
      <Offers products={products} />
      {/* Most Popular Products (محبوب ترین ها)*/}
      <MostPopularProducts mostPopular={mostPopular} />
    </>
  );
}

export default Home;
