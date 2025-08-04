import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    //  {/* Logo */}
    <Link
      href={"/"}
      className="flex justify-center md:justify-start items-center gap-2 md:w-fit md:mx-0  w-1/2 mx-auto"
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        <Image
          src="/image_project/logo/logo.png"
          alt="فروشگاه دیجیتالی"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 hidden sm:flex">
        فروشگاه دیجیتالی
      </span>
    </Link>
  );
}
