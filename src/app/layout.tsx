import type { Metadata } from "next";
import "./globals.css";
import { HeaderItemProps } from "@/components/header/header-item";
import Header from "@/components/header/header";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio | Jovic Cudia",
};

const headerItems: HeaderItemProps[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Real Estate Projects",
    path: "/projects/real-estate",
  },
  {
    text: "Finance and E-Learning Projects",
    path: "/projects/finance-and-e-learning",
  },
  {
    text: "E-Commerce and Events",
    path: "/projects/e-commerce-and-events",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <nav>
          <Header items={headerItems} />
        </nav>
        {children}
      </body>
    </html>
  );
}
