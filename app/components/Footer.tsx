"use client";

import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[#FFFCEA] text-[#2b3a2f] scroll-mt-24"
        >
            <div className="mx-auto w-full  max-w-[1600px] px-4 pt-12 pb-10 md:pt-16 md:pb-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
                    {/* LEFT: TITLE  */}
                    <div className="md:col-span-6">
                        <div className="mb-6 md:mb-10">
                            <motion.span
                                aria-hidden="true"
                                className="inline-block text-2xl md:text-3xl"
                                animate={{
                                    scale: [2.5, 1, 2.5],

                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                ✺
                            </motion.span>
                        </div>

                        <h2 className="font-display text-[36px] leading-[1.05] tracking-tight md:text-[56px] lg:text-[72px]">
                            <span className="block">LET’S</span>
                            <span className="block">COLLABORATE</span>
                        </h2>
                    </div>

                    {/* RIGHT: FORM COMPONENT */}
                    <div className="md:col-span-6 md:pl-8">
                        {/* FORM COMPONENT */}
                        <ContactForm />
                    </div>
                </div>

                {/* === Middle === */}
                <div className="mt-14 flex flex-col gap-10 md:mt-16 md:flex-row md:items-start md:gap-24">
                    {/* CONTACT */}
                    <div>
                        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#2b3a2f]/70">
                            Contact:
                        </h3>
                        <a
                            href="mailto:micaela.arslanian@gmail.com"
                            className="mt-2 block text-sm hover:opacity-80"
                        >
                            micaela.arslanian@gmail.com
                        </a>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#2b3a2f]/70">
                            Social:
                        </h3>
                        <ul className="mt-2 flex flex-col gap-2 text-sm md:flex-row md:gap-10">
                            <li>
                                <a
                                    href="https://www.instagram.com/studio__ars/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/micaelaarslanian/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80"
                                >
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/micaelaarslanian"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-80"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/** === BOTTOM PART (divider + navbar) === **/}
            {/* === DIVIDER === */}
            <div className="mt-12 border-t border-black/10" />

            {/* === Bottom bar === */}
            <div className="mt-4 w-full px-4 pb-6 md:mt-6 md:pb-10">
                <div className="flex flex-col items-start justify-between gap-4 text-xs text-[#2b3a2f]/80 sm:flex-row sm:items-center">
                    <p>ARS STUDIO @ {new Date().getFullYear()}</p>

                    <nav className="flex items-center gap-10">
                        <Link href="/about" className="hover:opacity-80 font-semibold">
                            ABOUT
                        </Link>
                        <Link href="/work" className="hover:opacity-80 font-semibold">
                            WORK
                        </Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="hover:opacity-80 font-semibold"
                            aria-label="Back to top"
                        >
                            BACK TO TOP
                        </button>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
