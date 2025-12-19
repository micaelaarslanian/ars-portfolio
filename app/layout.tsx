import type { ReactNode } from "react";
import { rubik, fraunces } from "./fonts";
import type { Metadata } from "next";


import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {


  title: "STUDIO ARS ✺ Design, engineering & storytelling",
  description:
    "Portfolio of Micaela Arslanian, a full-stack developer & designer focused on user-centred digital products and thoughtful design.",

  metadataBase: new URL("https://www.micaelaarslanian.com"),

  openGraph: {
    title: "STUDIO ARS ✺ Design, engineering & storytelling",
    description:
      "Portfolio of Micaela Arslanian, a full-stack developer & designer focused on user-centred digital products and thoughtful design.",
    url: "https://www.micaelaarslanian.com",
    siteName: "studio ars",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "STUDIO ARS ✺ Design, engineering & storytelling",
    description:
      "Portfolio of Micaela Arslanian, a full-stack developer & designer focused on user-centred digital products and thoughtful design.",
  },

  robots: { index: true, follow: true },
};


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
