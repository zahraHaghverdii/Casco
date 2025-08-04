import Spinner from "@/component/Spinner";

import Image from "next/image";

export default function LoadingModal() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="bg-(--color-White-10) p-8 rounded-3xl z-60 flex justify-center flex-col items-center gap-y-4">
        <Image
          src={"/image_project/logo/logo.png"}
          alt="فروشگاه دیجیتالی"
          width={100}
          height={100}
        />
        <Spinner />
      </div>
    </div>
  );
}
