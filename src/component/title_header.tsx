import Image from "next/image";
import Container from "./container";

interface Ttitle {
  title: string;
}

export default function TitleHeader({ title }: Ttitle) {
  return (
    <Container>
      <div className=" w-full mb-16 relative flex justify-between items-center gap-5">
        <div className="w-[100%] md:h-[60px] h-[50px] relative">
          <Image
            src="/image_project/accessory/Asset-3-1.svg"
            alt=""
            fill
            priority // برای بارگزاری سریع
          />
        </div>

        <p className="md:text-4xl text-3xl text-[#717171] font-bold absolute top-0 left-0 right-0 m-auto flex items-center justify-center md:h-[60px] h-[50px]">
          {title}
        </p>

        <span className="h-0.5 w-full bg-gray-300 absolute md:top-11 top-10 left-0 right-0 m-auto flex items-center justify-center -z-10"></span>
      </div>
    </Container>
  );
}
