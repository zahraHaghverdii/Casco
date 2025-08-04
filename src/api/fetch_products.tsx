// api/products.ts
const API_URL = "http://localhost:3001";

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("محصولات یافت نشدند (خطای 404).");
      } else if (response.status === 500) {
        throw new Error("خطای داخلی سرور (500). لطفاً بعداً تلاش کنید.");
      } else {
        throw new Error(`خطای ناشناخته: ${response.status}`);
      }
    }
    return await response.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(` ${errorMessage}`);
  }
};

// --------------------------------page product ------------------------------------
// products name
export const fetchNameProduct = async ({ name }: { name?: string }) => {
  try {
    const response = await fetch(`${API_URL}/products?name=${name}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("محصولات یافت نشدند (خطای 404).");
      } else if (response.status === 500) {
        throw new Error("خطای داخلی سرور (500). لطفاً بعداً تلاش کنید.");
      } else {
        throw new Error(`خطای ناشناخته: ${response.status}`);
      }
    }
    return await response.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(`مشکلی در دریافت محصول رخ داده است: ${errorMessage}`);
  }
};

// ----------------------pagination/sort/category/search,... -------------------
export const fetchProductsList = async ({
  page,
  per_page,
  name,
  sort,
  category,
  minPrice,
  maxPrice,
}: {
  page?: string | number;
  per_page?: string | number;
  name?: string;
  sort?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
}) => {
  try {
    const response = await fetch(
      `http://localhost:3001/products?_page=${page}&_per_page=${per_page}&name=${name}&sort=${sort}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("محصولات یافت نشدند (خطای 404).");
      } else if (response.status === 500) {
        throw new Error("خطای داخلی سرور (500). لطفاً بعداً تلاش کنید.");
      } else {
        throw new Error(`خطای ناشناخته: ${response.status}`);
      }
    }
    return await response.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(`مشکلی در دریافت محصولات رخ داده است: ${errorMessage}`);
  }
};
