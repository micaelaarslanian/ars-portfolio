
// exports types and data for works/projects
export type Work = {
    slug: string;
    title: string;
    description: string;
    fields?: string[];
    thumbUrl?: string;
    firstParagraph?: string;
    content?: ContentBlock[];
    href?: string;
    github?: string;
    coverUrl?: string;
};


// Defines the different types of content blocks that can be used in a work's content array
export type ContentBlock =
    | { type: "image"; src: string; alt?: string; caption?: string; aspect?: "16/9" | "4/3" | "1/1" | "auto" }
    | { type: "imageGrid"; items: { src: string; alt?: string }[]; columns?: 2 | 3 | 4, caption?: string }
    | { type: "text"; heading?: string; body: string }
    | { type: "quote"; text: string; author?: string }
    | { type: "spacer"; size?: "sm" | "md" | "lg" };


// Helper function to create a spacer content block
export const spacer = (size: "sm" | "md" | "lg" = "md"): ContentBlock => ({ type: "spacer", size });

// data for works/projects
export const WORKS: Work[] = [

    // SPARKCLUB PROJECT
    {
        slug: "sparkclub",
        title: "Designing the full UI/UX and developing a custom website to launch and sell an AI product.",
        description: "SPARKCLUB",
        fields: ["✺ UX & UI Design", "Frontend Development"],
        thumbUrl: "/work_images/sparkclub/spark-portfolio-01.png",
        coverUrl: "/work_images/sparkclub/portfolio-spark-01.png",
        firstParagraph: "SparkClub strengthens workplace relationships through curated experiences planned in minutes. Powered by Nevenka, an AI teammate who understands your team and turns ideas into tailored event proposals in seconds, SparkClub removes the stress of organising meaningful moments.",
        content: [
            { type: "image", src: "/work_images/sparkclub/spark-portfolio-01.png", alt: "Hero mockup", caption: "Home page", aspect: "16/9" },
            spacer("md"),
            {
                type: "text",
                body: "The website was designed and developed fully responsive across all devices, ensuring a seamless and consistent user experience. I led the UX and UI design in Figma, working closely with the existing brand identity to create clear flows, intuitive interfaces, and a refined visual system. On the development side, I built the site using React, Next.js, Tailwind, and Motion, crafting a performant, accessible, and dynamic front-end that mirrors the product’s energy and purpose.",
            },
            spacer("sm"),
            {
                type: "imageGrid",
                columns: 3,
                items: [
                    { src: "/work_images/sparkclub/spark-portfolio-04.png", alt: "UI Screen 1" },
                    { src: "/work_images/sparkclub/spark-portfolio-03.png", alt: "UI Screen 2" },
                    { src: "/work_images/sparkclub/spark-portfolio-07.png", alt: "UI Screen 3" },
                ],
            },
            spacer("md"),

            { type: "image", src: "/work_images/sparkclub/spark-portfolio-05.png", alt: "Motion exploration", aspect: "4/3" },
            spacer("lg"),

            { type: "image", src: "/work_images/sparkclub/spark-portfolio-06.png", alt: "Final screen", aspect: "16/9" },
        ],
        href: "https://www.sparkclub.xyz/",
        github: "https://github.com/DelfinBlaksleyMujica/Spark-Web/tree/miki-dev",
    },


    // UNIHUB PROJECT
    {
        slug: "unihub",
        title: "Building a platform that links brands with university communities through gaming",
        description: "UNIHUB",
        fields: ["✺ UX & UI Design", "Frontend Development"],
        thumbUrl: "/work_images/unihub/unihub-portfolio.png",
        coverUrl: "/work_images/unihub/unihub-cover.png",
        firstParagraph: "UniHub centres on a platform dedicated to innovation, technology, and gaming within the university ecosystem. Working with more than 40 universities across Latin America, the company creates immersive experiences around education and entertainment, connecting brands with students through impactful, measurable activities. Their approach blends physical and digital communities, delivering events with clear engagement metrics, continuous optimisation, and meaningful results.",
        content: [
            { type: "image", src: "/work_images/unihub/unihub-cover.png", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", body: "I led the UX and UI design in Figma, following the brand guidelines to shape clear user flows, engaging interfaces, and a cohesive visual identity. Once the design system was established, I developed the website from scratch using React and CSS, applying a mobile-first approach and ensuring full responsiveness across all devices. The result is a flexible, intuitive platform that supports the brand’s mission and engages a broad university audience." },
            spacer("md"),
            {
                type: "imageGrid",
                columns: 2,
                items: [
                    { src: "/work_images/unihub/unihub-portfolio-02.png" },
                    { src: "/work_images/unihub/unihub-portfolio-03.png" },
                ],
            },
        ],
        href: "https://unihub-site.vercel.app/",
        github: "https://github.com/micaelaarslanian/unihub-site"
    },

    // SEVAN BOOKING APP PROJECT
    {
        slug: "sevan-booking-app",
        title: "Crafting the brand & digital experience for a coworking space built around calm and uninterrupted focus.",
        description: "SEVAN SPACE",
        fields: ["✺ Visual Identity", "UX & UI Design", "Frontend Development"],
        thumbUrl: "/work_images/sevan/sevan-thumbnail.png",
        coverUrl: "/work_images/sevan/sevan-thumbnail.png",
        firstParagraph: "Sevan Coworking Space is built around a simple belief: focus thrives in a quiet, welcoming environment. Unlike busy cafés or high-pressure workspaces, Sevan offers a calm setting where people can book their own table, settle in, and work without distractions or the obligation to constantly consume. It’s a space to return to, designed for writing, studying, and creating with clarity and comfort.",
        content: [
            { type: "image", src: "/work_images/sevan/sevan-portfolio-01.png", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", body: "I developed the brand concept and visual identity for Sevan, creating a calm, minimal, and cohesive aesthetic that reflects its focus-first philosophy. From there, I designed the UX and UI in Figma, shaping clear flows and a clean interface aligned with the brand’s core values. I then built the website from the ground up using React and CSS, following a mobile-first approach and ensuring full responsiveness across all devices. The result is a digital experience that captures the serenity and purpose of the physical space." },
            spacer("md"),

            {
                type: "imageGrid",
                columns: 2,
                items: [
                    { src: "/work_images/sevan/sevan-screens-02.png", alt: "Screen" },
                    { src: "/work_images/sevan/sevan-screens-03.png", alt: "Screen" },
                ],
            },

            spacer("md"),

            { type: "text", heading: "Branding", body: " " },
            {
                type: "imageGrid",
                columns: 4,
                items: [
                    { src: "/work_images/sevan/sevan-portfolio-02.png", alt: "Branding screen 1" },
                    { src: "/work_images/sevan/sevan-portfolio-03.png", alt: "Branding screen 2" },
                    { src: "/work_images/sevan/sevan-portfolio-04.png", alt: "Branding screen 3" },
                    { src: "/work_images/sevan/sevan-portfolio-05.png", alt: "Branding screen 4" },

                ],
            },
            spacer("md"),

            { type: "text", heading: "UX Research", body: " " },
            {
                type: "imageGrid",
                columns: 2,
                items: [
                    { src: "/work_images/sevan/sevan-portfolio-ux.jpg", alt: "UX Portfolio" },
                    { src: "/work_images/sevan/sevan-portfolio-ux-02.jpg", alt: "Ux Portfolio" },
                ],
            },
        ],




        href: "https://sevan-booking-app.vercel.app/",
        github: "https://github.com/micaelaarslanian/sevan-booking-app"
    },
];


// function to get all works and returns the WORKS array
export function getAllWorks() {
    return WORKS;
}

// function to get a work by its slug, returns the matching Work or null if not found
export function getWorkBySlug(slug: string) {
    return WORKS.find(w => w.slug === slug) ?? null;
}
