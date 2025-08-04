import Image from "next/image";
import "./bestProduct.css";

interface TBoxBestSellers {
  children: React.ReactNode | undefined;
  title: string;
}

export default function BoxBestSeller({ children, title }: TBoxBestSellers) {
  return (
    <div className="xl:w-[350px]">
      <div className="bg-(--color--Blue-300) text-(--color-White) text-2xl flex justify-center items-center md:w-[70%] w-[80%] p-5 mx-auto h-20 rounded-t-4xl gap-3">
        <p className="text-center">{title}</p>
        <Image
          src={"/icons/Category/phone.svg"}
          alt=""
          width={20}
          height={20}
        />
      </div>

      <div className="flex flex-col gap-5 bg-(--color-White) md:h-[400px] h-[330px] py-10 px-5 shadow-lg rounded-3xl ">
        <div className="h-full overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
