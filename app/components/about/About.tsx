"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function About() {
    const prefersReduced = useReducedMotion();

    // Container  anim
    const container: Variants = prefersReduced
        ? { hidden: {}, show: {} }
        : {
            hidden: {},
            show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
        };

    //text anim
    const fadeUp: Variants = prefersReduced
        ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
        : {
            hidden: { opacity: 0, y: 12 },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.45,
                    ease: "easeOut",
                },
            },
        };

    // Image anim
    const imageReveal: Variants = prefersReduced
        ? { hidden: { opacity: 1, scale: 1 }, show: { opacity: 1, scale: 1 } }
        : {
            hidden: { opacity: 0, scale: 1.06 },
            show: {
                opacity: 1,
                scale: 1,
                transition: {
                    opacity: { duration: 0.35 },
                    scale: { type: "spring", stiffness: 180, damping: 20 },
                },
            },
        };

    const vp = { once: true, amount: 0.2 } as const;

    // Animated link wrapper
    const MotionLink = ({
        href,
        children,
        className = "",
    }: {
        href: string;
        children: React.ReactNode;
        className?: string;
    }) => (
        <motion.span
            whileHover={prefersReduced ? {} : { y: -2, scale: 1.02 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block"
        >
            <Link href={href} className={className}>
                {children}
            </Link>
        </motion.span>
    );

    return (
        <section className="bg-[#FFFFF7] text-[#174727]">
            <div className="mx-auto w-full max-w-[1800px] px-4 py-16 md:py-24">
                {/* Title */}
                <motion.h1
                    className="text-left text-[44px] leading-none tracking-wide md:text-[64px]"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={vp}
                >
                    ABOUT
                </motion.h1>

                {/* Content */}
                <motion.div
                    className="mt-16 md:mt-24"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={vp}
                >
                    {/* Kicker */}
                    <motion.p
                        className="text-center text-[11px] font-medium tracking-[0.15em] text-[#174727]/80 uppercase"
                        variants={fadeUp}
                    >
                        MY STORY
                    </motion.p>

                    {/* Paragraphs */}
                    <div className="mx-auto mt-6 max-w-[100ch] space-y-6 font-serif">
                        <motion.p
                            className="text-[24px] md:text-[36px] text-left sm:text-center "
                            variants={fadeUp}
                        >
                            I’m Micaela, the creator behind <span className="font-sans font-medium">ars studio </span>. A Full-Stack Developer & Designer
                            working at the intersection of technology and visual communication.
                            I build products that are intuitive, engaging, and grounded in purpose.
                        </motion.p>

                        <motion.p
                            className="leading-7 text-[25px] leading-9 md:text-[27px] py-4 text-left sm:text-center"
                            variants={fadeUp}
                        >
                            ✺
                        </motion.p>

                        <motion.p
                            className=" leading-7 md:text-[20px] md:leading-8 text-left sm:text-center"
                            variants={fadeUp}
                        >
                            My career began in visual communication: graphic design, motion graphics, UI/UX, and later visual effects,
                            where I collaborated with leading post-production teams on major film and television projects.
                        </motion.p>

                        <motion.p
                            className=" leading-7 md:text-[20px] md:leading-8 text-left sm:text-center"
                            variants={fadeUp}
                        >
                            A growing fascination with human behaviour and problem-solving led me closer to the user: to understand needs,
                            shape stories, and create meaningful solutions.
                        </motion.p>

                        <motion.p
                            className=" leading-7 md:text-[20px] md:leading-8 text-left sm:text-center"
                            variants={fadeUp}
                        >
                            This multidisciplinary path naturally evolved into Software Engineering and Product Design, allowing me to blend creativity with technical rigour.
                            Today, I work collaboratively with cross-functional teams to deliver thoughtful, real-world digital experiences.
                        </motion.p>
                    </div>

                    {/* Image */}
                    <motion.div
                        className="mt-10 md:mt-14 flex justify-center "
                        variants={fadeUp}
                    >
                        <motion.div
                            className="relative h-60 w-60 md:h-72 md:w-72 overflow-hidden"
                            variants={imageReveal}
                            style={{ willChange: "transform, opacity" }}
                        >
                            <Image
                                src="/aboutMe.jpg"
                                alt="Micaela"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="mt-10 md:mt-12 flex flex-col items-center"
                        variants={fadeUp}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-16 text-[18px] font-medium tracking-wide  ">
                            <MotionLink href="/work" className="hover:opacity-70 border-b">
                                SEE MY WORK
                            </MotionLink>
                            <MotionLink href="#footer" className="hover:opacity-70">
                                CONTACT ME
                            </MotionLink>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
