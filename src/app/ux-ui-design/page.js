"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Search, Layers, CheckCircle, Layout, Smartphone, PenTool, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UxUiDesign() {
    const processSteps = [
        { title: "Research & Discovery", desc: "We uncover what truly matters through requirement gathering, user personas, and competitor analysis." },
        { title: "Ideation & Strategy", desc: "Transforming insights into solutions with journey mapping, information architecture, and feature prioritization." },
        { title: "Design Systems", desc: "Building consistent brand identities with atomic design principles, typography, and component libraries." },
        { title: "Testing & Handoff", desc: "Validating with usability testing and delivering pixel-perfect assets for development." }
    ];

    const offerings = [
        { title: "UX Research", icon: Search, desc: "Deep dive into user behaviors and needs." },
        { title: "Wireframing", icon: Layers, desc: "Blueprints for structural excellence." },
        { title: "UX Audit", icon: CheckCircle, desc: "Improving existing digital products." },
        { title: "Web Design", icon: Layout, desc: "Responsive, accessible, and beautiful interfaces." },
        { title: "Mobile Apps", icon: Smartphone, desc: "iOS and Android native design guidelines." },
        { title: "Landing Pages", icon: PenTool, desc: "High-conversion single page designs." },
    ];

    return (
        <>
            <PageHero
                title="UX/UI Design"
                subtitle="Create user-centered experiences that drive engagement and convert visitors into loyal customers."
            />

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
                            <h2 className="text-3xl font-bold text-dark mb-6">World-Class Design That Converts</h2>
                            <p className="text-text-muted text-lg mb-6 leading-relaxed">
                                Your ideas, our expertise. We don't just design screens; we design journeys. From initial research to the final pixel, we ensure every interaction adds value to your business.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["User-First Approach", "Data-Backed Decisions", "Pixel-Perfect Precision"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="font-medium text-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us" className="btn btn-primary inline-flex items-center gap-2">
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl transform -rotate-3" />
                            <Image
                                src="/project1.png"
                                alt="UX/UI Design Process"
                                width={600}
                                height={400}
                                className="relative rounded-3xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">Our Design Process</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">A systematic approach to solving complex problems with simple, elegant solutions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="text-4xl font-bold text-surface-hover mb-6 group-hover:text-primary/20 transition-colors">0{index + 1}</div>
                                <h4 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offerings Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">Core Offerings</h2>
                        <p className="text-text-muted">Comprehensive design services tailored to your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((offer, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-surface border border-gray-100 hover:border-primary/30 transition-all cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                    <offer.icon size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-dark mb-2">{offer.title}</h4>
                                <p className="text-text-muted text-sm">{offer.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to design your next big thing?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's collaborate to create user experiences that delight your customers and grow your business.</p>
                    <Link href="/contact-us" className="btn bg-white text-dark hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}
