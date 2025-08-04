"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../container";
import NavItem from "./NavItem";
import NavItemLeft from "./NavItemLeft";
import Logo from "../Logo";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [showModal, setShowModal] = useState<string>("");
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  function handelDropdown() {
    setShowNavbar(true);
    setShowModal("");
    setActiveDropdown("");
  }

  return (
    <div className="bg-gray-50 py-3 border-b border-gray-200 shadow-md rtl fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          {/* Menu Hamburger for Mobile */}
          <div
            className="relative w-8 h-8 md:hidden flex items-center justify-center cursor-pointer"
            onClick={handelDropdown}
          >
            <Image
              src="/icons/menu.svg"
              alt="منوی همبرگری"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* logo */}
          <Logo />

          {/* Navigation Items */}
          <NavItem
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
          />

          {/* NavItemLeft */}
          <NavItemLeft
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
