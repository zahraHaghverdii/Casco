"use client";

import Overlay from "@/ui/Overlay";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Modal({
  title,
  showModal,
  setShowModal,
  children,
  id,
  button,
  SetactivElse,
}: {
  title: string;
  showModal: string;
  setShowModal: (id: string) => void;
  SetactivElse: (string: string) => void;
  children: ReactNode;
  id: string;
  button: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = showModal === id;

  const toggleModal = () => {
    setShowModal(isActive ? "" : id);
    SetactivElse("");
  };

  // بستن زیرمنو هنگام تغییر مسیر
  useEffect(() => {
    setShowModal("");
  }, [pathname, setShowModal]);

  return (
    <>
      <div>
        <span onClick={toggleModal}>{button}</span>

        {isActive && (
          <div className="bg-white fixed inset-0 m-auto rounded-xl shadow-lg md:w-1/2 w-[90%] h-1/2  z-60 cursor-auto">
            <div className="flex justify-between items-center bg-(--color-Gray-50) px-4 py-8 rounded-t-xl">
              <span className="text-center text-(--color-Dark-20) mx-auto">
                {title}
              </span>
              <span
                className="text-(--color-Gray) text-3xl cursor-pointer"
                onClick={toggleModal}
              >
                ✕
              </span>
            </div>

            <div className="px-4 py-5">{children}</div>
          </div>
        )}
      </div>

      {isActive && <Overlay id={id} onClick={() => toggleModal()} />}
    </>
  );
}
