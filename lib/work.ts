
// exports types and data for works/projects
export type Work = {
    slug: string;
    title: string;
    description: string;
    fields?: string[];
    thumbUrl?: string;
    content?: ContentBlock[];
};


// Defines the different types of content blocks that can be used in a work's content array
export type ContentBlock =
    | { type: "image"; src: string; alt?: string; caption?: string; aspect?: "16/9" | "4/3" | "1/1" | "auto" }
    | { type: "imageGrid"; items: { src: string; alt?: string }[]; columns?: 2 | 3 }
    | { type: "text"; heading?: string; body: string }
    | { type: "quote"; text: string; author?: string }
    | { type: "spacer"; size?: "sm" | "md" | "lg" };


// Helper function to create a spacer content block
export const spacer = (size: "sm" | "md" | "lg" = "md"): ContentBlock => ({ type: "spacer", size });

// data for works/projects
export const WORKS: Work[] = [
    {
        slug: "sparkclub",
        title: "SparkClub",
        description: "Brand + product UI concept exploring playful energy.",
        fields: ["Branding", "UI"],
        thumbUrl: "/work_images/sparkclub/thumbnail.png",
        coverUrl: "/work_images/sparkclub/cover.jpg",
        content: [
            { type: "image", src: "/work_images/sparkclub/cover.jpg", alt: "Hero mockup", caption: "Hero visual", aspect: "16/9" },
            spacer("md"),
            {
                type: "text",
                heading: "Overview",
                body: "This is placeholder copy. Replace with a short overview of goals, constraints, and outcomes. Keep it ~3–5 sentences so it’s skimmable.",
            },
            spacer("sm"),
            {
                type: "imageGrid",
                columns: 3,
                items: [
                    { src: "/work_images/sparkclub/shot-1.jpg", alt: "UI Screen 1" },
                    { src: "/work_images/sparkclub/shot-2.jpg", alt: "UI Screen 2" },
                    { src: "/work_images/sparkclub/shot-3.jpg", alt: "UI Screen 3" },
                ],
            },
            spacer("md"),
            {
                type: "text",
                heading: "Process",
                body: "Use this section for process notes: research insights, design iterations, and key decisions. Feel free to add more images in between text blocks.",
            },
            spacer("sm"),
            { type: "image", src: "/work_images/sparkclub/shot-4.jpg", alt: "Motion exploration", aspect: "4/3" },
            spacer("lg"),
            {
                type: "quote",
                text: "“Short impactful quote or result metric can go here.”",
                author: "Stakeholder or you",
            },
            spacer("md"),
            { type: "image", src: "/work_images/sparkclub/shot-5.jpg", alt: "Final screen", aspect: "16/9" },
        ],
    },
    {
        slug: "unihub",
        title: "UniHub",
        description: "Student platform concept.",
        fields: ["UX", "Web App"],
        thumbUrl: "/work_images/unihub/thumbnail.png",
        coverUrl: "/work_images/unihub/cover.jpg",
        content: [
            { type: "image", src: "/work_images/unihub/cover.jpg", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", heading: "Overview", body: "Replace with your content." },
            spacer("md"),
            {
                type: "imageGrid",
                columns: 2,
                items: [
                    { src: "/work_images/unihub/shot-1.jpg" },
                    { src: "/work_images/unihub/shot-2.jpg" },
                ],
            },
        ],
    },
    {
        slug: "citiciti",
        title: "CitiCiti",
        description: "Transit visual system.",
        fields: ["Identity", "Motion"],
        thumbUrl: "/work_images/citiciti/thumbnail.png",
        coverUrl: "/work_images/citiciti/cover.jpg",
        content: [
            { type: "image", src: "/work_images/citiciti/cover.jpg", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", body: "Add your story here." },
        ],
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
