export const metadata = {
  title: {
    default: "صفحه اول",
    template: "لوازم دیجیتالی| %s",
  },
};

export default function Home() {
  return (
    <>
      <div className="font-[Dana] text-gray-800">
        این متن با فونت Dana نمایش داده می‌شود.
      </div>
      <div className="font-[Dana] text-gray-800"> خوبی سلام</div>

      <div className="font-[Shabnam] text-blue-400">
        این متن با فونت Shabnam نمایش داده می‌شود.
      </div>
      <div className="font-[Shabnam] text-blue-400">سلام خوبی</div>

      <div className="font-[IRANSansWeb] text-red-400">
        این متن با فونت IRANSansWeb نمایش داده می‌شود.
      </div>
      <div className="font-[IRANSansWeb] text-red-400">سلام خوبی</div>
    </>
  );
}
