"use client";

import { motion } from "framer-motion";

export default function PageHero({ title, subtitle }) {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden items-center flex justify-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-text-muted max-w-3xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
