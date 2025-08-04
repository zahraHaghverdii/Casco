"use client";
import { useEffect, useState } from "react";

export default function SuccessfulModal({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onClose(); // به والد اطلاع بده که خطا پاک بشه
      }, 500); // صبر کن تا انیمیشن تمام بشه
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`bg-green-500 fixed top-5 right-5 w-xl z-50 rounded-lg shadow-lg p-6 text-gray-50 rtl transition-all duration-500 ease-in-out
      ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <p>{message}</p>
    </div>
  );
}
