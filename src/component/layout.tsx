"use client";
import { usePathname } from "next/navigation";
import Container from "./container";
import Footer from "./footer";
import Navbar from "./navbar";

interface Child {
  children: React.ReactNode;
}

export default function Layout({ children }: Child) {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" ? (
        <Container>
          <Navbar />
          <div>{children}</div>
          {pathname !== "/accont" && <Footer />}
        </Container>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
