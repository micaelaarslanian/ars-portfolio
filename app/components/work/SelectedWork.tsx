"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Work, ContentBlock } from "@/lib/work";

// ✅ single source of truth (in this file)
type Aspect = "16/9" | "4/3" | "1/1" | "auto" | "fit";

function isAspect(v: unknown): v is Aspect {
    return v === "16/9" || v === "4/3" || v === "1/1" || v === "auto" || v === "fit";
}

// function to wrap content in aspect ratio container
function AspectWrap({
    aspect = "16/9",
    children,
    className = "",
}: {
    aspect?: Aspect;
    children: React.ReactNode;
    className?: string;
}) {
    const aspectClass =
        aspect === "16/9"
            ? "aspect-[16/9]"
            : aspect === "4/3"
                ? "aspect-[4/3]"
                : aspect === "1/1"
                    ? "aspect-square"
                    : ""; // "auto" | "fit" => no forced ratio

    return (
        <div className={`relative w-full overflow-hidden rounded-sm ${aspectClass} ${className}`}>
            {children}
        </div>
    );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case "image": {
            const { src, alt = "", caption } = block;

            // ✅ normalize whatever comes from your data/type into our local Aspect
            const aspect: Aspect = isAspect((block as any).aspect) ? (block as any).aspect : "16/9";

            return (
                <figure>
                    <AspectWrap aspect={aspect} className="bg-gray-200">
                        {src ? (
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                sizes="100vw"
                                className={aspect === "fit" ? "object-contain" : "object-cover"}
                                priority={false}
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                        )}
                    </AspectWrap>

                    {caption ? (
                        <figcaption className="mt-2 text-center text-xs text-[#174727]/60">{caption}</figcaption>
                    ) : null}
                </figure>
            );
        }

        case "imageGrid": {
            const cols = block.columns ?? 2;
            return (
                <div className={`grid gap-3 md:gap-4 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                    {block.items.map((it, idx) => (
                        <AspectWrap key={idx} aspect="4/3" className="bg-gray-200">
                            {it.src ? (
                                <Image
                                    src={it.src}
                                    alt={it.alt ?? ""}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width:768px) 33vw, 100vw"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                            )}
                        </AspectWrap>
                    ))}
                </div>
            );
        }

        case "text": {
            const { heading, body } = block;
            return (
                <div className="mx-0 max-w-[100ch]">
                    {heading ? <h2 className="text-[20px] font-semibold text-[#174727]">{heading}</h2> : null}
                    {/* ✅ avoid dynamic tailwind class */}
                    <p className={`${heading ? "mt-2" : "mt-0"} text-[20px] text-[#174727]/80`}>{body}</p>
                </div>
            );
        }

        case "quote": {
            const { text, author } = block;
            return (
                <blockquote className="mx-auto max-w-[100ch] border-l-2 border-[#174727]/30 pl-4 text-base italic text-[#174727]">
                    “{text}”
                    {author ? <footer className="mt-2 text-xs not-italic text-[#174727]/70">— {author}</footer> : null}
                </blockquote>
            );
        }

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
        <article className="mx-auto w-full max-w-[1800px] px-4 py-10 md:py-14">
            <header className="text-left">
                <motion.h1 className="text-[30px] md:text-[55px] font-medium text-[#174727] leading-[1.4] pb-6 mb-2">
                    {work.title}
                </motion.h1>

                <p className="mt-1 text-[35px] text-[#174727]/70">{work.description}</p>

                <p className="my-4 py-6 text-[20px] text-[#174727]/80 lg:w-[80ch]">{work.firstParagraph}</p>

                {(work.href || work.github || work.featured) && (
                    <div className="flex flex-row gap-10">
                        {work.href && (
                            <motion.a
                                className="text-[18px] text-[#174727]/80 border-b border-[#174727]/80"
                                href={work.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website →
                            </motion.a>
                        )}

                        {work.github && (
                            <motion.a
                                className="text-[18px] text-[#174727]/80 border-b border-[#174727]/80"
                                href={work.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github →
                            </motion.a>
                        )}

                        {work.featured && (
                            <motion.a
                                className="text-[18px] text-[#174727]/80 border-b border-[#174727]/80"
                                href={work.featured}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Featured →
                            </motion.a>
                        )}
                    </div>
                )}
            </header>

            <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
                {content.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                ))}
            </div>
        </article>
    );
}
