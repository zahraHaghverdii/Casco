import Layout from "@/component/layout";

import "./globals.css";

export const metadata = {
  title: {
    default: "لوازم دیجیتالی",
    template: "لوازم دیجیتالی| %s",
  },
  description: "لوازم دیجیتالی",
  icons: {
    icon: "/image_project/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="light">
      <body className={`antialiased`}>
        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
