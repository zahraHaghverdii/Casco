"use client";
import { JSX, useEffect, useState } from "react";

export default function Overlay({
  id,
  // children,
  onClick,
}: {
  id: string;
  onClick: () => void;
  // children: JSX.Element;
}): JSX.Element {
  const [activeOverlay, setActiveOverlay] = useState<string>("");
  useEffect(() => setActiveOverlay(id), [id]);

  const isActive = activeOverlay === id;
  return (
    <>
      {isActive && (
        <div
          className="fixed inset-0 bg-gray-500 opacity-50 z-40 transform transition-transform duration-500"
          onClick={() => onClick()} // بستن منو با کلیک روی Overlay
        >
          {/* {children ? children : ""} */}
        </div>
      )}
    </>
  );
}
