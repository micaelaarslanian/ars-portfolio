
"use client";
import Link from "next/link";
import Image from "next/image";

import type { Work } from "../../../lib/work";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";


function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
    const prefersReduced = useReducedMotion();
    const words = useMemo(
        () => text.split(" ").map((w, i) => ({ id: `${w}-${i}-${Math.random()}`, w })),
        [text]
    );

    if (!text) return null;

    return (
        <motion.span
            className="inline-flex flex-wrap gap-x-[0.3ch] overflow-hidden gap-y-0.1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                show: prefersReduced
                    ? {}
                    : { transition: { staggerChildren: 0.035, delayChildren: delay } },
            }}
        >
            {words.map(({ id, w }, i) => (
                <motion.span
                    key={id}
                    className="inline-block"
                    variants={{
                        hidden: { y: prefersReduced ? 0 : 14, opacity: prefersReduced ? 1 : 0 },
                        show: {
                            y: 0,
                            opacity: 1,
                            transition: prefersReduced
                                ? { duration: 0 }
                                : { type: "spring", stiffness: 220, damping: 20, mass: 0.6 },
                        },
                    }}
                >
                    {w}
                    {i < words.length - 1 ? " " : ""}
                </motion.span>
            ))}
        </motion.span>
    );
}

export default function WorkCard({ work }: { work: Work }) {

    const prefersReduced = useReducedMotion();
    const scaleHover = prefersReduced ? 1 : 1.01;
    const scaleTap = prefersReduced ? 1 : 0.995;

    // Slight stagger per card:
    const baseDelay = 0.12;

    return (
        <motion.li layout initial={false} className="py-8 md:py-10">
            <Link href={`/work/${work.slug}`} className="group block focus:outline-none">
                <motion.article
                    initial={{ backgroundColor: "#FFFCEA", scale: 1 }}
                    whileHover={{ backgroundColor: "#FFFFFF", scale: scaleHover }}
                    whileTap={{ scale: scaleTap }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
                    className="grid grid-cols-1 gap-4 rounded-sm md:grid-cols-12 md:items-center
                     "
                    style={{ transformOrigin: "center" }}
                >
                    {/* Thumbnail container */}
                    <div className="md:col-span-3">
                        <div className="overflow-hidden rounded-sm ">
                            {/* MOBILE image */}
                            <div className="relative md:hidden aspect-[16/9] w-full">
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{
                                        opacity: prefersReduced ? 1 : 0,
                                        scale: prefersReduced ? 1 : 1.06, //starts zoomed in
                                    }}
                                    whileInView={{ opacity: 1, scale: 1 }} // zoom out to 1
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={
                                        prefersReduced
                                            ? { duration: 0 }
                                            : { opacity: { duration: 0.35 }, scale: { type: "spring", stiffness: 180, damping: 20 } }
                                    }
                                >
                                    <img src={work.thumbUrl} className="h-full w-full" />
                                </motion.div>
                            </div>

                            {/* DESKTOP image */}
                            <div className="relative hidden md:block aspect-square w-full">
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{
                                        opacity: prefersReduced ? 1 : 0,
                                        scale: prefersReduced ? 1 : 1.06,
                                    }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={
                                        prefersReduced
                                            ? { duration: 0 }
                                            : { delay: baseDelay, opacity: { duration: 0.35 }, scale: { type: "spring", stiffness: 180, damping: 20 } }
                                    }
                                >
                                    <Image
                                        src={work.thumbUrl}
                                        alt={`${work.title} thumbnail`}
                                        fill
                                        sizes="(max-width: 767px) 100vw, 0"
                                        className="object-cover"
                                        priority={false}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Text block (title + description) */}
                    <div className="md:col-span-6 md:pr-6 md:mr-4">
                        <h3 className="text-[30px] md:text-[20px] lg:text-[30px]  tracking-wide text-[#174727]">
                            <WordReveal text={work.title} delay={baseDelay + 0.02} />
                        </h3>
                        <p className="mt-4 text-[18px] tracking-wide text-[#174727]">
                            <WordReveal text={work.description ?? ""} delay={baseDelay + 0.08} />
                        </p>
                    </div>

                    {/* Fields */}
                    <div className="md:col-span-3 md:text-right">
                        {work.fields?.length ? (
                            <p className="font-serif mt-1 text-[16px] text-[#174727]">
                                <WordReveal text={work.fields.join(", ")} delay={baseDelay + 0.1} />
                            </p>
                        ) : null}
                    </div>
                </motion.article>
            </Link>
        </motion.li>
    );
}
