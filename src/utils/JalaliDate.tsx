import moment from "moment-jalaali";

// بارگذاری تنظیمات فارسی به‌طور صحیح
moment.locale("fa");
moment.loadPersian({ usePersianDigits: true, dialect: "persian" }); // با این تغییر ماه‌ها به فارسی نمایش داده می‌شوند

export default function JalaliDate({
  gregorianDate,
}: {
  gregorianDate?: string | undefined;
}) {
  if (!gregorianDate) return null;

  // فرمت تاریخ شمسی با ماه‌های فارسی
  return <span>{moment(gregorianDate).format("jD jMMMM jYYYY")}</span>;
}
