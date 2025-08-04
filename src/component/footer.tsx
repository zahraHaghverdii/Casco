import Image from "next/image";
import Container from "./container";
import Link from "next/link";

export default function Footer() {
  const itemFooterTop = [
    {
      icon: "/icons/payment.svg",
      title: "پرداخت درب منزل",
      text: "بعد از دریافت سفارش",
    },
    {
      icon: "/icons/Price_guarantee.svg",
      title: "تصمین قیمت محصولات",
      text: "کمترین قیمت در سطح اینترنت",
    },
    {
      icon: "/icons/Returned.svg",
      title: "امکان مرجوع کردن سفارش",
      text: "در صورت عدم رضایت",
    },
    {
      icon: "/icons/Quality_assurance.svg",
      title: "تضمین کیفیت و اصالت",
      text: "فروش مستقیم از شرکت",
    },
    {
      icon: "/icons/Fast_shipping.svg",
      title: "ارسال سریع سفارشات",
      text: "با پست پیشتاز",
    },
  ];

  const navLinks = [
    { title: "Products", text_title: "محصولات", href: "/product" },
    { title: "About Us", text_title: "درباره ما", href: "/aboutUs" },
    { title: "Contact Us", text_title: "تماس با ما", href: "/contactUs" },
    { title: "FAQ", text_title: "پرسش‌های متداول", href: "/faq" },
  ];

  const contactLinks = [
    {
      text: "09123456789",
      title: "تلفن",
      icon: "/icons/phone.svg",
      href: "tel:+989123456789",
    },
    {
      text: "haghverdiZahra@email.com",
      title: "ایمیل",
      icon: "/icons/email.svg",
      href: "mailto:haghverdiZahra@email.com",
    },
    {
      text: "ایران، تهران",
      title: "آدرس",
      icon: "/icons/instagram.svg",
      href: "https://www.google.com/maps?q=Tehran",
    },
  ];

  const socialMedia = [
    {
      name: "Whatsapp",
      icon: "/icons/whatsapp.svg",
      href: "https://wa.me/09302720706",
    },
    {
      name: "Telegram",
      icon: "/icons/telegram.svg",
      href: "https://t.me/ZaHrAi2000",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      href: "https://www.instagram.com/zahra.haghverdi.2000/",
    },
  ];

  return (
    <footer className="rtl mt-20">
      <div className="bg-gray-50 pt-10 border-y border-gray-200">
        <Container>
          <div className="flex justify-between items-center gap-10 flex-wrap">
            {itemFooterTop.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-stretch pb-10 last:border-none justify-center min-sm:justify-start "
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={item.icon}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <div className=" flex flex-col gap-y-2">
                  <span className="text-2xl font-bold text-gray-500">
                    {item.title}
                  </span>
                  <span className="text-xl text-gray-400">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-gray-100 text-gray-600 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-25 gap-y-17">
            {/* Logo and About */}
            <div className="text-center md:text-right col-span-6">
              <div className="flex justify-center md:justify-start items-center gap-x-3">
                <div className="relative w-20 h-20">
                  <Image
                    src="/image_project/logo/logo.png"
                    alt="فروشگاه دیجیتالی"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <span className="text-3xl font-bold text-gray-600 ml-3">
                  فروشگاه دیجیتالی
                </span>
              </div>
              <p className="text-gray-500 leading-relaxed text-center md:text-right">
                فروشگاه دیجیتال، مقصدی برای خرید انواع محصولات دیجیتال با بهترین
                کیفیت و قیمت مناسب است. هدف ما ارائه تجربه‌ای لذت‌بخش از خرید
                آنلاین با ارسال سریع و خدمات پس از فروش مطمئن است.
              </p>
              <div className="hidden md:flex justify-start items-center gap-6 mt-7">
                {socialMedia.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-2 "
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="transition-transform transform hover:scale-110"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-6">
              <div className="flex justify-between items-start flex-wrap gap-x-8 gap-y-20">
                {/* Easy access */}
                <div>
                  <span className="font-bold border-b border-gray-500 mb-3">
                    دسترسی آسان
                  </span>
                  <div className="flex flex-col gap-y-4 mt-5">
                    {navLinks.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <Link href={item.href}>{item.text_title}</Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* contact */}
                <div>
                  <span className="font-bold border-b border-gray-500 mb-3">
                    ارتباط با ما
                  </span>
                  <div className="flex flex-col gap-y-4 mt-5">
                    {contactLinks.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <span>{item.title}:</span>
                        <Link href={item.href}>{item.text}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:hidden flex justify-start items-center gap-6 mt-10">
                {socialMedia.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-2 "
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="transition-transform transform hover:scale-110"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center text-xl">
            <p className="text-gray-500">
              © 2024 فروشگاه دیجیتالی. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
              <Link href="/privacy">سیاست حفظ حریم خصوصی</Link>
              <Link href="/terms">شرایط و قوانین</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
