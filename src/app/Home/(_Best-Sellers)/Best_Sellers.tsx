import Container from "@/component/container";
import TitleHeader from "@/component/title_header";
import { Product } from "@/types/products";
import CardCategory from "./CardCategory";
import BoxBestSeller from "./BoxBestSeller";

interface BestSellersProps {
  products: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
  // best headphones
  const category_headphones = products
    .filter(
      (product) =>
        product.general_category === "headphones" && product.sales_count >= 50
    )
    .map((product) => product);

  // لپ تاپ
  const category_laptop = products
    .filter(
      (product) =>
        product.general_category === "laptop" && product.sales_count >= 50
    )
    .map((product) => product);

  // کالای دیجیتال
  const home_appliances = products
    .filter(
      (product) =>
        product.general_category === "home_appliances" &&
        product.sales_count >= 50
    )
    .map((product) => product);

  return (
    <div className="my-20">
      <Container>
        <TitleHeader title="پر فروش ترین محصولات" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-6">
          {/* هندزفری*/}
          <BoxBestSeller title="پرفروش ترین هندزفری ها">
            {category_headphones?.map((item) => (
              <CardCategory key={item.name} item={item} />
            ))}
          </BoxBestSeller>

          {/* صوتی و تصویری */}
          <BoxBestSeller title="پرفروش ترین کالای دیجیتالی">
            {home_appliances?.map((item) => (
              <CardCategory key={item.name} item={item} />
            ))}
          </BoxBestSeller>

          {/* لپ تاپ */}
          <BoxBestSeller title="پرفروش ترین لپ تاپ ها">
            {category_laptop?.map((item) => (
              <CardCategory key={item.name} item={item} />
            ))}
          </BoxBestSeller>
        </div>
      </Container>
    </div>
  );
};

export default BestSellers;
