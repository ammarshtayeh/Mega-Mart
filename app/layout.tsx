import type { Metadata } from "next";
import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import StoreProvider from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "A modern e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
