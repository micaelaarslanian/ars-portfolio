import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Rubik via next/font → --font-sans
                sans: ["var(--font-sans)", "sans-serif"],
                // Fraunces via next/font → --font-serif
                serif: ["var(--font-serif)", "serif"],
            },
        },
    },
    plugins: [],
};

export default config;
