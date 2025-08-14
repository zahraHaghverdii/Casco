const API_URL = process.env.NEXT_PUBLIC_API_BAS;

export const fetchAllProducts = async () => {
  try {
    if (!API_URL) throw new Error("API_URL تعریف نشده است.");
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error(`خطا: ${response.status}`);
    }
    return await response.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(errorMessage);
  }
};

// products name
export const fetchNameProduct = async ({ name }: { name?: string }) => {
  try {
    if (!API_URL) throw new Error("API_URL تعریف نشده است.");
    const response = await fetch(
      `${API_URL}/products?name_like=${encodeURIComponent(name || "")}`
    );
    if (!response.ok) {
      throw new Error(`خطا: ${response.status}`);
    }
    return await response.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(`مشکلی در دریافت محصول رخ داده است: ${errorMessage}`);
  }
};

// pagination / sort / category / search,...
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
    const query = new URLSearchParams();

    if (page) query.append("_page", String(page));
    if (per_page) query.append("_per_page", String(per_page));
    if (name) query.append("name_like", name); // ⬅ بدون encodeURIComponent
    if (sort) query.append("sort", sort);
    if (category) query.append("general_category", category);
    if (minPrice) query.append("minPrice", String(minPrice));
    if (maxPrice) query.append("maxPrice", String(maxPrice));

    const response = await fetch(`${API_URL}/products?${query.toString()}`);

    if (!response.ok) {
      throw new Error(`خطا: ${response.status}`);
    }

    return await response.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(`مشکلی در دریافت محصولات رخ داده است: ${errorMessage}`);
  }
};
