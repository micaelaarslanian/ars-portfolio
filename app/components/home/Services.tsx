"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const DEV_SERVICES = [
    "Full Stack Development",
    "UX & UI",
    "Website & App Design",
];

const DESIGN_SERVICES = [
    "Visual Design & Branding",
    "Motion Graphics & 3D Design",
    "Video Editing",
];

type AnimatedTitleProps = {
    text: string;
    listDelayRef?: React.MutableRefObject<number>;
};

function AnimatedTitle({ text, listDelayRef }: AnimatedTitleProps) {
    const prefersReduced = useReducedMotion();

    // Feel controls
    const baseSpring = prefersReduced
        ? { duration: 0 }
        : { type: "spring", stiffness: 420, damping: 18, mass: 0.7 };

    // Per-letter timing
    const letterStagger = prefersReduced ? 0 : 0.025;      // how quickly letters chain
    const parentDelay = prefersReduced ? 0 : 0.05;         // initial delay before letters start

    // delay for the list so it begins after most letters appear
    const computedListDelay = prefersReduced
        ? 0
        : parentDelay + Math.min(text.length * letterStagger, 0.45) + 0.08 + 1;

    if (listDelayRef) listDelayRef.current = computedListDelay;

    const chars = useMemo(
        () => Array.from(text).map((c) => (c === " " ? "\u00A0" : c)),
        [text]
    );

    return (
        // Clip the vertical slide
        <span className="block overflow-hidden">
            <motion.span
                aria-label={text}
                className="inline-flex origin-bottom-left"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    show: prefersReduced
                        ? {}
                        : { transition: { delayChildren: parentDelay, staggerChildren: letterStagger } },
                }}
            >
                {chars.map((ch, i) => (
                    <motion.span
                        key={`${ch}-${i}`}
                        className="inline-block"
                        variants={{
                            hidden: { y: prefersReduced ? 0 : 24, opacity: prefersReduced ? 1 : 0 },
                            show: { y: 0, opacity: 1, transition: baseSpring },
                        }}
                    >
                        {ch}
                    </motion.span>
                ))}
            </motion.span>
        </span>
    );
}

function AnimatedList({
    items,
    align = "right",
    delay = 0,
}: {
    items: string[];
    align?: "left" | "right";
    delay?: number;
}) {
    const prefersReduced = useReducedMotion();
    const springy = prefersReduced
        ? { duration: 0 }
        : { type: "spring", stiffness: 160, damping: 20, mass: 0.6 };

    return (
        <motion.ul
            className={`space-y-1 ${align === "right" ? "text-right" : "text-left"}`}
            initial={{ y: prefersReduced ? 0 : 24, opacity: prefersReduced ? 1 : 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ...springy, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {items.map((item) => (
                <li key={item} className="text-lg leading-7 md:text-base md:leading-7 font-serif">
                    ✺ {item}
                </li>
            ))}
        </motion.ul>
    );
}

export default function Services() {
    const devListDelayRef = { current: 0 };
    const designListDelayRef = { current: 0 };

    return (
        <section id="services" className="bg-[#FEFEFE] text-[#174727]">
            <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:py-24">
                <p className="text-[14px] font-medium tracking-wide text-[#174727]">SERVICES</p>

                {/* DEVELOPMENT */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                    {/* Title */}
                    <h3 className="text-[40px] font-medium tracking-normal md:col-span-6">
                        <AnimatedTitle text="DEVELOPMENT" listDelayRef={devListDelayRef} />
                    </h3>

                    {/* List  */}
                    <div className="md:col-span-6 md:ml-auto md:text-right">
                        <AnimatedList items={DEV_SERVICES} align="right" delay={devListDelayRef.current} />
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 border-t border-black/10 md:my-14" />

                {/*  DESIGN */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                    {/* Title */}
                    <h3 className="text-[40px] font-medium tracking-normal md:col-span-6">
                        <AnimatedTitle text="DESIGN" listDelayRef={designListDelayRef} />
                    </h3>

                    {/* List */}
                    <div className="md:col-span-6 md:ml-auto md:text-right">
                        <AnimatedList items={DESIGN_SERVICES} align="right" delay={designListDelayRef.current} />
                    </div>
                </div>
            </div>
        </section>
    );
}
