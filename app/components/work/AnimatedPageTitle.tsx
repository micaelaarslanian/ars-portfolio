"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedPageTitle({ children }: { children: string }) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.h2
            className="mb-6 text-center text-[80px]  md:mb-10"
            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={
                prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.5, ease: "easeOut", delay: 0.05 }
            }
        >
            {children}
        </motion.h2>
    );
}
