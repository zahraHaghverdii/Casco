import { Product } from "@/types/products";
import { fetchAllProducts } from "@/api/fetch_products";
import Home from "./home";

export const metadata = {
  title: {
    default: "صفحه اول",
    template: "لوازم دیجیتالی| %s",
  },
};
// فراخوانی API در سرور
const products: Product[] = await fetchAllProducts();

function Home_page() {
  return <Home products={products} />;
}

export default Home_page;
