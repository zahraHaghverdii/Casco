"use client";

import { Product } from "@/types/products";
import ProductList from "./ProductList";
import Container from "@/component/container";
import Breadcrumb from "@/component/Breadcrumb";
import SortProductList from "@/component/SortProductList";

import Pagination from "@/component/Pagination";
import NoProductsFound from "@/component/NoProductsFound";
import Filter from "@/component/Filter";
import { useAllProductStore } from "@/zustand/useProducts";
import { useEffect } from "react";
import ErrorModal from "@/ui/ErrorMoadal";
import LoadingModal from "@/ui/LoadingModal";

interface TproductsList {
  products: Product[];
  pageCount: number;
  uniqueCategory: string[];
}

function Products({ products, pageCount, uniqueCategory }: TproductsList) {
  const lengthProduct = products.length;
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

  return (
    <Container>
      <div className="relative">
        <Breadcrumb />

        <div className="grid md:grid-rows-[50px_auto] md:grid-cols-9 grid-rows-[auto_auto] grid-cols-1 gap-4">
          <div className="md:col-span-7 col-span-1 md:row-span-2 md:ordrr-1 order-2">
            {/* sort */}
            <div className="w-full mb-3 pb-5 rtl">
              <SortProductList lengthProduct={lengthProduct} />
            </div>
            {/* products */}
            <>
              {!isEmpty ? (
                <>
                  <ProductList productsAll={products} />
                  <Pagination pageCount={pageCount} />
                </>
              ) : (
                <NoProductsFound />
              )}
            </>
          </div>
          {/* filter */}
          <div className="md:col-span-2 col-span-1 md:row-span-2 md:order-2 order-1 rtl">
            <Filter uniqueCategory={uniqueCategory} products={products} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Products;
