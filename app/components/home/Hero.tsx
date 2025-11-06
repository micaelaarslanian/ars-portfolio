"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
    ctaLabel?: string;

};

export default function Hero({ ctaLabel = "SEE MY WORK →" }: HeroProps) {
    return (
        <section className="bg-[#FFFFF7] text-[#1f3a2d]">
            <div className="mx-auto flex w-full max-w-[1600px] h-[800px] flex-col gap-10 px-4 py-30 md:grid md:grid-cols-12 md:items-end md:gap-8 md:py-20 lg:py-24">
                {/* Left: Title */}
                <div className="md:col-span-7">
                    <h1 className=" tracking-tight leading-[0.92] text-[120px] sm:text-[120px] md:text-[140px] lg:text-[180px] font-medium">
                        <span className="block">ars</span>
                        <span className="block">studio</span>
                    </h1>
                </div>

                {/* Right: Copy + CTA */}
                <div className="md:col-span-5 md:pb-3">
                    <p className="font-serif text-[30px] leading-relaxed text-[#174727]">
                        A studio that builds thoughtful digital experiences at the
                        intersection of design, story-telling and development. Led by a
                        multidisciplinary designer.
                    </p>

                    <motion.div
                        className="mt-6"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                        <Link
                            href="/work"
                            className="inline-flex flex-col items-start gap-1 text-sm font-medium text-[#254934] hover:opacity-90"
                        >
                            {/*  */}
                            <span>{ctaLabel}</span>
                            <motion.span
                                className="text-[#174727] font-medium "
                                initial={{ width: 0, opacity: 0 }}
                                whileHover={{ width: "100%", opacity: 1 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
