"use client";
import Footer from "./footer";
// import { usePathname } from "next/navigation";
// import Footer from "./footer";
import Header from "./Header/Navbar";

interface Child {
  children: React.ReactNode;
}

export default function Layout({ children }: Child) {
  // const pathname = usePathname();
  return (
    <div className="w-[100%]">
      <Header />
      <div className="md:pt-20 pt-18">{children}</div>
      <Footer />
    </div>

    // <>
    //   {pathname !== "/login" ? (
    //     <div className="w-[100%]">
    //       <Header />
    //       <div>{children}</div>
    //       {pathname !== "/accont" && <Footer />}
    //     </div>
    //   ) : (
    //     <div className="mt-50">{children}</div>
    //   )}
    // </>
  );
}
