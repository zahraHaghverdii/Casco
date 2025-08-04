const API_URL = "http://localhost:3002/comments";

export const fetchCommentsAllProduct = async () => {
  try {
    // انجام درخواست به API برای دریافت نظرات
    const response = await fetch(`${API_URL}`);

    // بررسی وضعیت پاسخ و مدیریت خطا
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("محصولات یافت نشدند (خطای 404).");
      } else if (response.status === 500) {
        throw new Error("خطای داخلی سرور (500). لطفاً بعداً تلاش کنید.");
      } else {
        throw new Error(`خطای ناشناخته: ${response.status}`);
      }
    }

    // تبدیل پاسخ به JSON پس از دریافت کامل آن
    const data = await response.json();
    return data; // داده‌ها را به تابع فراخوانی باز می‌گرداند
  } catch (error: unknown) {
    // مدیریت خطا
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(`مشکلی در دریافت نظرات رخ داده است: ${errorMessage}`);
  }
};

// ----------------------------------- Comment Id Product ------------------------------
export const fetchCommentIdProduct = async ({
  productId,
}: {
  productId?: string | undefined;
}) => {
  try {
    if (!productId) {
      throw new Error("شناسه محصول ارسال نشده است.");
    }

    // انجام درخواست به API برای دریافت نظرات
    const response = await fetch(`${API_URL}?productId=${productId}`);

    // بررسی وضعیت پاسخ و مدیریت خطا
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("محصولات یافت نشدند (خطای 404).");
      } else if (response.status === 500) {
        throw new Error("خطای داخلی سرور (500). لطفاً بعداً تلاش کنید.");
      } else {
        throw new Error(`خطای ناشناخته: ${response.status}`);
      }
    }

    // تبدیل پاسخ به JSON پس از دریافت کامل آن
    const data = await response.json();
    return data; // داده‌ها را به تابع فراخوانی باز می‌گرداند
  } catch (error: unknown) {
    // مدیریت خطا
    const errorMessage =
      error instanceof Error ? error.message : "یک خطای ناشناخته رخ داده است.";
    console.error("خطا:", errorMessage);
    throw new Error(`مشکلی در دریافت نظرات رخ داده است: ${errorMessage}`);
  }
};
