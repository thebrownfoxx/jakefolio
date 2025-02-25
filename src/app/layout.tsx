import type { Metadata } from "next";
import "./globals.css";
import HeaderContainer from "@/components/header/header-container";
import HeaderItem from "@/components/header/header-item";

export const metadata: Metadata = {
  title: "Portfolio | Jovic Cudia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <nav>
          <HeaderContainer>
            <HeaderItem text="Home" path="/" />
            <HeaderItem
              text="Real Estate Projects"
              path="/projects/real-estate"
            />
            <HeaderItem
              text="Finance and E-Learning Projects"
              path="/projects/finance-and-e-learning"
            />
            <HeaderItem
              text="E-Commerce and Events"
              path="/projects/e-commerce-and-events"
            />
          </HeaderContainer>
        </nav>
        {children}
      </body>
    </html>
  );
}
