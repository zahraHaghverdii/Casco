import Home from "./Home";
import { Product } from "@/types/products";
import { fetchAllProducts } from "@/api/fetch_products";

export const metadata = {
  title: {
    default: "صفحه اول",
    template: "لوازم دیجیتالی| %s",
  },
};
// فراخوانی API در سرور
const products: Product[] = await fetchAllProducts();

function page() {
  return <Home products={products} />;
}

export default page;
