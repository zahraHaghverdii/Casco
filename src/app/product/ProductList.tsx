import Card from "@/component/Card";
import { Product } from "@/types/products";

interface TproductLists {
  productsAll: Product[];
}

function ProductList({ productsAll }: TproductLists) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 min-sm:grid-cols-1 gap-5 flex-wrap relative rtl">
      {productsAll?.map((item) => (
        <div
          key={item.id}
          className="md:w-[230px] w-[100%] mx-auto border-1 border-gray-300 rounded-2xl"
        >
          <Card product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
