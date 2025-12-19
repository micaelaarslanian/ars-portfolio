
// exports types and data for works/projects
export type Work = {
    slug: string;
    title: string;
    description: string;
    fields?: string[];
    thumbUrl: string;
    firstParagraph?: string;
    content?: ContentBlock[];
    href?: string;
    github?: string;
    featured?: string;
    coverUrl?: string;
};


// Defines the different types of content blocks that can be used in a work's content array.
export type ContentBlock =
    | { type: "image"; src: string; alt?: string; caption?: string; aspect?: "16/9" | "4/3" | "1/1" | "fit" }
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

    // CITY FLOW PROJECT
    {
        slug: "city-flow",
        title: "Driving UX Research and Service Design to make spontaneous dining choices easier.",
        description: "CITY FLOW",
        fields: ["✺ User Research", "UX Design", "Service Design"],
        thumbUrl: "/work_images/cityflow/cover.svg",
        coverUrl: "/work_images/sevan/cover-01.png",
        firstParagraph: "CityFlow is a UX and service design project created to support “smart spontaneity” in fast-paced urban environments. In cities like London, choosing a café or restaurant often comes with uncertainty: long queues, crowded spaces, and unpredictable wait times. CityFlow explores how design can empower users to make confident, on-the-go dining decisions by providing clearer expectations, reducing stress, and maintaining the flow of their day.",
        content: [
            { type: "image", src: "/work_images/cityflow/cover-01.png", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", heading: "Task Analysis", body: "This task analysis marked the first exploratory phase of the project, where I defined the core user goals: understanding user needs, suggesting venues based on their preferences, and enabling virtual queueing. Alongside this, I conducted a competitive analysis of existing queueing and booking apps to identify gaps in the market. The key insight emerged around a common limitation: while many solutions optimise efficiency, they often remove spontaneity." },
            { type: "image", src: "/work_images/cityflow/taskanalysis.svg", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", heading: "User Interviews", body: "To ground the project in real behaviour, I conducted in-person user interviews with busy Londoners to understand how they choose cafés and restaurants on the go. These conversations revealed common frustrations around long queues, unpredictability, and the pressure to plan ahead, helping shape the core insights and design direction of CityFlow." },
            { type: "image", src: "/work_images/cityflow/userinterview.svg", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", heading: "Persona", body: "The persona was created to represent busy Londoners who rely on spontaneity but are often disrupted by overcrowded cafés and long queues. Built from research insights, it captures key behaviours, motivations, and pain points, helping anchor design decisions in real user needs and ensuring the experience supports confident, on-the-go choices." },
            { type: "image", src: "/work_images/cityflow/persona.svg", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", heading: "Sketching & Ideation", body: "Hand-drawn sketches were used to explore ideas quickly, test different flows, and experiment with possible solutions. This phase encouraged rapid iteration and creative thinking before committing to refined designs." },
            { type: "image", src: "/work_images/cityflow/sketching.svg", alt: "Cover", aspect: "16/9" },

            spacer("md"),
            { type: "text", heading: "Customer Journey", body: "The customer journey map outlines the end-to-end experience of a Londoner looking to dine out without a prior booking. It traces the user’s path from initial intent and discovery through exploration, virtual queueing, arrival, and post-meal engagement, highlighting key actions, touchpoints, and pain points at each stage. Mapping this journey helped identify moments of uncertainty and frustration, guiding design decisions towards a smoother, more confident, and spontaneous dining experience." },
            { type: "image", src: "/work_images/cityflow/customerjourney.svg", alt: "Cover", aspect: "16/9" },
            spacer("md"),

            { type: "text", heading: "User Flow", body: "The user flow visualises the core path from initial intent to successfully securing a place to eat. It maps the essential steps a user takes to explore options, join a virtual queue, receive a notification when it’s their turn, and, if needed, cancel or switch plans without friction." },
            { type: "image", src: "/work_images/cityflow/userflow.svg", alt: "Cover", aspect: "1/1" },

            spacer("md"),
            { type: "text", heading: "Lo-fi Wireframes", body: "The low-fidelity wireframes explore the core experience for both new and returning users. They focus on early filtering steps that help tailor recommendations, followed by map and list views for browsing nearby options, selecting a venue, and joining the virtual queue. This stage prioritised structure, clarity, and flow before visual refinement." },
            {
                type: "imageGrid",
                columns: 2,
                items: [
                    { src: "/work_images/cityflow/Frame1.svg", alt: "Screen" },
                    { src: "/work_images/cityflow/Frame2.svg", alt: "Screen" },
                ],
            },
            { type: "image", src: "/work_images/cityflow/Frame3.svg", alt: "Cover", aspect: "16/9" },
        ],
    },

    // SPICY LILO PROJECT
    {
        slug: "spicy-lilo-project",
        title: "Shaping a creative chef-led brand from concept to visual identity and web experience.",
        description: "SPICY LILO",
        fields: ["✺ Visual Identity", "UX & UI Design", "Frontend Development"],
        thumbUrl: "/work_images/spicylilo/cover.png",
        coverUrl: "/work_images/spicylilo/spicy-01.png",
        firstParagraph: "This project involved shaping a complete visual and digital identity for Spicy Lilo, a chef-led small business centred on connection, creativity, and shared experiences through food. I designed the logo, brand concept, and social media assets, translating Spicy Lilo’s philosophy into a warm, expressive visual language. I then designed and built the website using JavaScript, React, and Tailwind CSS, creating an inviting digital presence that communicates her workshops, personalised offerings, and belief in cooking as a way to connect people.",
        content: [
            { type: "image", src: "/work_images/spicylilo/spicy-01.png", alt: "Cover", aspect: "16/9" },
            spacer("md"),

            { type: "text", heading: "Visual Identity", body: "The logo was designed to be simple, clear, and elegant, reflecting Spicy Lilo’s warm yet refined approach to cooking. Social media assets and flyers were created to communicate her workshops and collaborations with clarity and personality, using a consistent visual language that feels inviting, expressive, and easy to recognise across platforms." },
            spacer("md"),

            {
                type: "imageGrid",
                columns: 2,
                items: [
                    { src: "/work_images/spicylilo/spicy-02.png", alt: "Screen" },
                    { src: "/work_images/spicylilo/spicy-03.png", alt: "Screen" },
                ],
            },
            spacer("md"),

            { type: "image", src: "/work_images/spicylilo/spicy-04.png", alt: "Cover", aspect: "16/9" },

            spacer("md"),
            { type: "image", src: "/work_images/spicylilo/presentation.gif", alt: "Cover", aspect: "16/9" },
            { type: "image", src: "/work_images/spicylilo/gif_flyeres.gif", alt: "Cover", aspect: "16/9" },



        ],
        href: "https://spicy-lilo.vercel.app/",
        github: "https://github.com/micaelaarslanian/Chefs-Website"
    },

    // FESTIVAL PROJECT
    {
        slug: "festival-project",
        title: "Directing a concept-led visual system for an analogue film festival.",
        description: "SINCRO",
        fields: ["✺ Visual Identity, Art Direction"],
        thumbUrl: "/work_images/festival/festival-04.png",
        coverUrl: "/work_images/festival/festival-04.png",
        firstParagraph: "SINCRO is an analogue film festival designed entirely from scratch, spanning concept development, line-up curation, and a comprehensive visual identity system. The project involved the creation of a high-complex graphic language applied across multiple formats, including the logo, billboards, flyers, and editorial pieces. Named after the synchronisation required in frame-by-frame analogue cinema, the visual system draws from in-depth research into camera mechanics and archival manuals, translating technical processes into a structured, expressive graphic language. Developed as my bachelor’s thesis in Graphic Design, the project was featured on the Design III course website.",
        content: [
            { type: "image", src: "/work_images/festival/festival-04.png", alt: "Cover", aspect: "16/9" },
            spacer("md"),
            { type: "text", heading: "LOGO", body: "" },
            spacer("md"),

            { type: "image", src: "/work_images/festival/festival-09.png", alt: "Cover", aspect: "16/9" },

            spacer("md"),

            { type: "image", src: "/work_images/festival/festival-05.png", alt: "Cover", aspect: "16/9" },
            spacer("md"),

            { type: "text", heading: "BILLBOARD & POSTER DESIGN", body: "The billboard was designed for the urban landscape, prioritising clarity and impact when viewed from a distance. In contrast, the street posters were conceived as a modular system, allowing multiple pieces to be combined in different configurations. Together, they extend the festival’s visual language into public space, balancing legibility, repetition, and variation to create a strong and recognisable presence across the city." },
            { type: "image", src: "/work_images/festival/festival-02.png", alt: "Cover", aspect: "16/9" },
            { type: "image", src: "/work_images/festival/festival-03.png", alt: "Cover", aspect: "16/9" },

            spacer("md"),

            { type: "text", heading: "INFOGRAPHY", body: "The infographic was designed as a large-scale piece measuring 1.2 metres in height, conceived to operate simultaneously at macro and micro levels. From a distance, its structure communicates a clear, overarching logic, while closer inspection reveals detailed information about seminars, courses, and participating artists. Every element was carefully considered, resulting in a highly precise, information-dense artefact that balances readability, hierarchy, and conceptual coherence." },
            { type: "image", src: "/work_images/festival/festival-01.png", alt: "Cover", aspect: "16/9" },

            spacer("md"),

            { type: "text", heading: "FOLDABLE BROCHURE", body: "A key piece of the festival’s communication was a foldable brochure designed as both an informational guide and a central expression of the visual system. Printed double-sided and structured across six faces, it brings together the full three-day line-up, activities, exhibitions, seminars, and talks, while also explaining the festival’s concept in depth. The brochure was designed with a high level of graphic precision, using structure, hierarchy, and rhythm inspired by analogue film mechanics to organise a dense amount of content into a coherent, readable, and visually striking artefact." },
            { type: "image", src: "/work_images/festival/festival-06.png", alt: "Cover", aspect: "16/9" },
            { type: "image", src: "/work_images/festival/festival-07.png", alt: "Cover", aspect: "16/9" },
            { type: "image", src: "/work_images/festival/festival-08.png", alt: "Cover", aspect: "16/9" },

        ],
        featured: "https://catedragabriele.com.ar/portfolio/nivel3/sincro/"
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
