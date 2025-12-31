"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, link, icon: Icon, features = [], delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="card-soft p-8 group h-full flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
        >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white">
                <Icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-text-muted mb-6 leading-relaxed text-sm flex-grow">{description}</p>

            {features && features.length > 0 && (
                <ul className="mb-6 space-y-2 w-full">
                    {features.map((feature, i) => (
                        <li key={i} className="text-xs text-text-muted flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> {feature}
                        </li>
                    ))}
                </ul>
            )}

            <Link href={link} className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform mt-auto">
                LEARN MORE <ArrowRight size={16} />
            </Link>
        </motion.div>
    );
}
