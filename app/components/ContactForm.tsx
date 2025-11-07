"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";



const schema = z.object({
    name: z.string().min(1, "Please enter your name."),
    email: z.string().email("Enter a valid email address."),
    message: z.string().min(1, "Please write a short message."),
    // honeypot: should stay empty; bots fill it
    company: z.string().max(0, "Bot detected."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", message: "", company: "" },
        mode: "onChange", // live validation
    });

    const onSubmit = async (values: FormValues) => {
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            reset();
        } catch {
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 4000); // auto-clear toast
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Honeypot (hidden) */}
            <input type="text" autoComplete="off" className="hidden" tabIndex={-1} {...register("company")} />

            {/* Top row: Name / Email */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                    <input
                        type="text"
                        autoComplete="name"
                        required
                        aria-label="Name"
                        placeholder="Name"
                        className={`w-full  bg-[white] px-4 py-3  ring-1 ring-transparent focus:ring-neutral-300 ${errors.name ? "ring-red-400" : ""}`}
                        {...register("name")}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                    {/* Email */}
                    <input
                        type="email"
                        autoComplete="email"
                        required
                        aria-label="Email"
                        placeholder="Email"
                        className={`w-full  bg-[white]  px-4 py-3 ring-1 ring-transparent focus:ring-neutral-300 ${errors.email ? "ring-red-400" : ""}`}
                        {...register("email")}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
            </div>

            {/* Message */}
            <textarea
                required
                aria-label="Message"
                placeholder="Message"
                rows={6}
                className={`w-full bg-[white] px-4 py-4 mt-3 ring-1 ring-transparent focus:ring-neutral-300 ${errors.message ? "ring-red-400" : ""}`}
                {...register("message")}
            />

            {/* Submit BUTTON */}
            <div className="mt-6 flex justify-center">
                <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 text-[#174727] font-medium disabled:opacity-60"
                    whileHover={{ translateX: 2 }}
                    whileTap={{ scale: 0.97 }}
                >
                    {status === "loading" ? "Sending..." : "SUBMIT →"}
                </motion.button>
            </div>

            {/* Feedback (single live region) */}
            <p
                role="status"
                aria-live="polite"
                className={`mt-3 text-center text-sm ${status === "success" ? "text-emerald-600" :
                    status === "error" ? "text-red-600" : "text-transparent"
                    }`}
            >
                {status === "success" ? "Thanks! I’ll get back to you shortly."
                    : status === "error" ? "Something went wrong. Please try again."
                        : "."}
            </p>
        </form>
    );
}
