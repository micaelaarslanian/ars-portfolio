import { Rubik, Fraunces } from "next/font/google";

export const rubik = Rubik({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});
