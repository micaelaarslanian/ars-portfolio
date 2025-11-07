import Image from "next/image";
import type { Work, ContentBlock } from "@/lib/work";
import AnimatedPageTitle from "./AnimatedPageTitle";


// function to wrap content in aspect ratio container
function AspectWrap({
    aspect = "16/9",
    children,
    className = "",
}: {
    aspect?: "16/9" | "4/3" | "1/1" | "auto";
    children: React.ReactNode;
    className?: string;
}) {
    // Tailwind aspect classes
    const aspectClass =
        aspect === "16/9"
            ? "aspect-[16/9]"
            : aspect === "4/3"
                ? "aspect-[4/3]"
                : aspect === "1/1"
                    ? "aspect-square"
                    : ""; // "auto"
    return <div className={`relative w-full overflow-hidden rounded-sm ${aspectClass} ${className}`}>{children}</div>;
}

function BlockRenderer({ block }: { block: ContentBlock }) {
    switch (block.type) {

        // renders different block types
        case "image": {
            const { src, alt = "", caption, aspect = "16/9" } = block;
            return (
                <figure>
                    <AspectWrap aspect={aspect} className="bg-gray-200">
                        {src ? (
                            <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority={false} />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                        )}
                    </AspectWrap>
                    {caption ? <figcaption className="mt-2 text-center text-xs text-[#174727]/60">{caption}</figcaption> : null}
                </figure>
            );
        }

        // renders image grid block
        case "imageGrid": {
            const cols = block.columns ?? 2;
            return (
                <div className={`grid gap-3 md:gap-4 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                    {block.items.map((it, idx) => (
                        <AspectWrap key={idx} aspect="4/3" className="bg-gray-200">
                            {it.src ? (
                                <Image src={it.src} alt={it.alt ?? ""} fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                            )}
                        </AspectWrap>
                    ))}
                </div>
            );
        }

        // renders text block
        case "text": {
            const { heading, body } = block;
            return (
                <div className="mx-auto max-w-[70ch]">
                    {heading ? <h2 className="text-xl font-semibold text-[#174727]">{heading}</h2> : null}
                    <p className={`mt-${heading ? "2" : "0"} text-sm leading-6 text-[#174727]/80`}>{body}</p>
                </div>
            );
        }

        // renders quote block
        case "quote": {
            const { text, author } = block;
            return (
                <blockquote className="mx-auto max-w-[70ch] border-l-2 border-[#174727]/30 pl-4 text-base italic text-[#174727]">
                    “{text}”
                    {author ? <footer className="mt-2 text-xs not-italic text-[#174727]/70">— {author}</footer> : null}
                </blockquote>
            );
        }

        // renders spacer block
        case "spacer": {
            const map = { sm: "h-6", md: "h-10", lg: "h-16" } as const;
            return <div className={map[block.size ?? "md"]} aria-hidden="true" />;
        }

        default:
            return null;
    }
}


// main component to display selected work
export default function SelectedWork({ work }: { work: Work }) {
    const content = work.content ?? [];

    return (
        <article className="mx-auto w-full max-w-[1200px] px-4 py-10 md:py-14">
            {/* Header */}
            <header className="text-center">
                <AnimatedPageTitle >{work.title}</AnimatedPageTitle>
                <p className="mt-2 text-sm text-[#174727]/80">{work.description}</p>
                {work.fields?.length ? (
                    <p className="mt-1 text-xs text-[#174727]/70">{work.fields.join(", ")}</p>
                ) : null}
            </header>

            {/* Body */}
            <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
                {content.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                ))}
            </div>
        </article>
    );
}
