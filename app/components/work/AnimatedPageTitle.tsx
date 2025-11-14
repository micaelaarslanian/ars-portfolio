"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedPageTitle({ children }: { children: string }) {
    const prefersReduced = useReducedMotion();

    // initial state sets opacity to prefersReduced value, y to 0 or 10
    const initialState = {
        opacity: prefersReduced ? 1 : 0,
        y: prefersReduced ? 0 : 10,
    }

    // target state sets opacity to 1, y to 0
    const targetState = {
        opacity: 1,
        y: 0,
    }

    return (
        <motion.h2
            className="mb-6 text-center text-[80px]  md:mb-10"
            initial={initialState}
            //plays on mount 
            animate={targetState}
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
