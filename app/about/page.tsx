import About from "../components/about/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | STUDIO ARS",
};

export default function AboutPage() {
    return (
        <About />
    );
}