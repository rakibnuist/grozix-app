"use client";

import PageHero from "@/components/PageHero";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const projects = [
        {
            title: "Design & Marketing Agency Website",
            category: "UX/UI Design & Dev",
            type: "UX/UI Design",
            image: "/project1.png",
            desc: "A complete brand overhaul for a digital agency, resulting in a 200% increase in lead generation."
        },
        {
            title: "Fitness App Redesign",
            category: "Mobile App UX",
            type: "UX/UI Design",
            image: "/project2.png",
            desc: "Simplifying the user journey for a fitness tracking app, improving daily active users by 45%."
        },
        {
            title: "E-Commerce Fashion Store",
            category: "WooCommerce",
            type: "Development",
            image: "/project3.png",
            desc: "Custom high-performance WordPress store with seamless checkout flow and optimized SEO."
        },
        {
            title: "Fintech Dashboard",
            category: "SaaS Product Design",
            type: "UX/UI Design",
            image: "/project1.png", // Reusing for demo
            desc: "Complex data visualization simplified into an intuitive dashboard for financial advisors."
        },
        {
            title: "Travel Booking Platform",
            category: "Web Application",
            type: "Development",
            image: "/project2.png", // Reusing for demo
            desc: "User-centric booking engine design focusing on trust and ease of use."
        },
        {
            title: "Corporate Law Firm",
            category: "Corporate Website",
            type: "Development",
            image: "/project3.png", // Reusing for demo
            desc: "Professional, authoritative digital presence for a top-tier law firm."
        },
        {
            title: "Real Estate SEO Campaign",
            category: "SEO Strategy",
            type: "SEO & Marketing",
            image: "/project2.png", // Reusing for demo
            desc: "Local SEO domination for a property group, achieving #1 rankings for high-value keywords."
        }
    ];

    const filteredProjects = activeFilter === "All Projects"
        ? projects
        : projects.filter(project => project.type === activeFilter);

    return (
        <>
            <PageHero
                title="Our Work"
                subtitle="A collection of projects that have helped our clients grow, scale, and succeed."
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {["All Projects", "UX/UI Design", "Development", "SEO & Marketing"].map((filter, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === filter ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-surface text-text-muted hover:bg-gray-100"}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={index}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <ArrowUpRight size={28} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-primary font-bold text-xs uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted text-sm line-clamp-2">
                                        {project.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-text-muted mb-6">Want to see more detailed case studies?</p>
                        <Link href="/contact-us" className="btn btn-outline px-8">
                            Contact Us for Full Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
