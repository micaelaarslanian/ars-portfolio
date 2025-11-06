"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";


const LINKS = [
    { label: "WORK", href: "/work" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "#contact" },
];

// animation ease
const EASE = [0.34, 1.56, 0.64, 1];

const PANEL_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const LIST_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];


const panelVariants: Variants = {
    closed: {
        y: "-6%",
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.22, ease: PANEL_EASE },
    },
    open: {
        y: "0%",
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        transition: { duration: 0.42, ease: PANEL_EASE },
    },
};

// 2-line icon variant
const iconTop = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 },
};

const iconBottom = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -6 },
};

const overlayVariants: Variants = {
    closed: { opacity: 0, transition: { duration: 0.18 } },
    open: { opacity: 0.3, transition: { duration: 0.24 } },
};

const itemVariants: Variants = {
    closed: { y: -8, opacity: 0, transition: { duration: 0.18, ease: LIST_EASE } },
    open: { y: 0, opacity: 1, transition: { duration: 1, ease: LIST_EASE } },
};

const listVariants: Variants = {
    closed: {},
    open: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08,
        },
    },
};


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // close menu on route change
    useEffect(() => setOpen(false), [pathname]);

    // lock scroll when open
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => (document.body.style.overflow = "");
    }, [open]);

    return (
        <>
            {/* ----- header  ----- */}
            <header className="sticky top-0 z-30 flex h-16 w-full items-center px-4 bg-[#FFFFF7] backdrop-blur ">
                <Link href="/" aria-label="Go home" className="font-semibold text-[#2b3a2f]">
                    <img src="/logo_green.png" alt="ars" className="h-10" />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="ml-auto hidden md:block">
                    <ul className="flex items-center gap-8 text-[16px] text-[#3a4f36] font-sans">
                        {LINKS.map((l) => (
                            <motion.li
                                key={l.href}
                                whileHover={{ y: -3, transition: { duration: 0.18, ease: "easeOut" } }}
                                whileTap={{ scale: 0.96 }}>
                                <Link href={l.href} className="cursor-pointer hover:opacity-80 transition-opacity">
                                    {l.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* ----- FLOATING toggle button — visible only on small devices */}
            <button
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle menu"
                className={`
    fixed right-4 top-4 z-50 h-10 w-10 flex items-center justify-center md:hidden

  `}
            >
                <motion.svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    initial={false}
                    animate={open ? "open" : "closed"}
                >
                    {/* Top line */}
                    <motion.line
                        x1="5" y1="12" x2="19" y2="12"
                        stroke={open ? "white" : "#3a4f36"} strokeWidth="2" strokeLinecap="round"
                        // rotate around the exact center
                        style={{ originX: 0.5, originY: 0.5 }}
                        variants={{
                            closed: { rotate: 0, translateY: -4 },     // move up to form the top bar
                            open: { rotate: 45, translateY: 0 },     // rotate into the X, centered
                        }}
                        transition={{ duration: 0.28, ease: EASE }}
                    />

                    {/* Bottom line */}
                    <motion.line
                        x1="5" y1="12" x2="19" y2="12"
                        stroke={open ? "white" : "#3a4f36"} strokeWidth="2" strokeLinecap="round"
                        style={{ originX: 0.5, originY: 0.5 }}
                        variants={{
                            closed: { rotate: 0, translateY: 4 },      // move down to form the bottom bar
                            open: { rotate: -45, translateY: 0 },    // rotate into the X, centered
                        }}
                        transition={{ duration: 0.28, ease: EASE }}
                    />
                </motion.svg>
            </button>

            {/* ----- PANEL under the icon ----- */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="panel"
                        className="fixed inset-x-0 top-0 z-40 h-[270px] bg-[#0f2a1f] text-white shadow-lg md:hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={panelVariants}
                    >
                        {/* alt logo inside panel */}
                        <div className="flex justify-between items-center px-4 py-3 ">
                            <Link href="/" onClick={() => setOpen(false)}>
                                <img src="/logo_white.png" alt="ars" className="h-10" />
                            </Link>
                        </div>

                        {/* links / navbar inside panel */}
                        <nav className="px-4 mt-4 py-8 md:hidden">
                            <motion.ul
                                className="flex flex-col gap-4 "
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={listVariants}
                                style={{ willChange: "transform, opacity" }}
                            >
                                {LINKS.map((l) => (
                                    <motion.li
                                        key={l.href}
                                        variants={itemVariants}
                                        whileHover={{ x: 4 }}         // subtle slide right
                                        whileTap={{ scale: 0.96 }}    // small press effect
                                    >
                                        <Link
                                            href={l.href}
                                            onClick={() => setOpen(false)}
                                            className="text-[18px] text-white font-sans hover:opacity-80"
                                        >
                                            {l.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
