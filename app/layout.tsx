import type { ReactNode } from "react";
import { rubik, fraunces } from "./fonts";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${fraunces.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
