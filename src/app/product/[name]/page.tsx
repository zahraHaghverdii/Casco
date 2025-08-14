import { fetchNameProduct } from "@/api/fetch_products";
import Breadcrumb from "@/component/Breadcrumb";
import Container from "@/component/container";
import { Product } from "@/types/products";
import DescriptionProduct from "./DescriptionProduct";
import PriceProductPage from "./PriceProductPage";
import FeedbackPage from "./FeedbackPage";
// import ErrorModal from "@/ui/ErrorMoadal";
interface Tproduct {
  error: string;
  params: {
    name?: string;
  };
}

async function page({ params: paramsPromise, error }: Tproduct) {
  const params = await paramsPromise;
  const name = params.name;

  const product = (await fetchNameProduct({ name })) as Product[];

  if (!product || product.length === 0) {
    console.error("محصول یافت نشد.");
    return <p>محصول یافت نشد</p>;
    // return <ErrorModal message={"محصول یافت نشد"} />;
  }

  const productId = product.map((item) => item.id)[0]?.toString();
  if (!productId) {
    console.error("محصول یافت نشد.");
    return <p>محصول یافت نشد</p>;
  }

  if (error) {
    console.error(error);
    return <p>{error}</p>;
    // return <ErrorModal message={error} />;
  }

  return (
    <Container>
      <Breadcrumb />

      {product.map((product) => (
        <div key={product.id}>
          <div className="flex flex-col-reverse md:flex-row md:gap-x-10 gap-y-6 justify-between items-stretch p-6 rtl">
            <DescriptionProduct product={product} />
            <PriceProductPage product={product} />
          </div>
          {/* نظرات و توضیحات */}
          <FeedbackPage productId={productId} />
        </div>
      ))}
    </Container>
  );
}

export default page;
