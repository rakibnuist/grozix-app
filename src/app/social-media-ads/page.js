"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Megaphone, Monitor, ShoppingBag, Youtube, MousePointer, Target, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SocialMediaAds() {
    const processSteps = [
        { title: "Audit & Strategy", desc: "We analyze your past performance and competitors to build a winning roadmap." },
        { title: "Campaign Setup", desc: "Structuring pixel-perfect campaigns with precise targeting and tracking." },
        { title: "Creative & Copy", desc: "Designing high-converting ad visuals and persuasive copy that clicks." },
        { title: "Optimization", desc: "Continuous A/B testing and bid adjustments to lower your CPC and efficient scaling." }
    ];

    const offerings = [
        { title: "Google Search Ads", icon: Megaphone, desc: "Capture high-intent traffic exactly when they search." },
        { title: "Facebook & Instagram", icon: Monitor, desc: "Build brand awareness and retarget warm leads." },
        { title: "Google Shopping", icon: ShoppingBag, desc: "Showcase your products directly in search results." },
        { title: "YouTube Ads", icon: Youtube, desc: "Engage users with compelling video storytelling." },
        { title: "Remarketing", icon: MousePointer, desc: "Bring back visitors who didn't convert the first time." },
        { title: "Performance Max", icon: Target, desc: "AI-driven campaigns across the entire Google ecosystem." },
    ];

    return (
        <>
            <PageHero
                title="Social Media & Google Ads"
                subtitle="Stop wasting budget. Start generating consistent, high-quality leads with data-driven paid campaigns."
            />

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Paid Advertising</span>
                            <h2 className="text-3xl font-bold text-dark mb-6">Scale Your Revenue, Predictably</h2>
                            <p className="text-text-muted text-lg mb-6 leading-relaxed">
                                Organic growth is great, but sometimes you need results <strong>now</strong>. Our managed ad campaigns are designed to deliver immediate ROI by targeting your ideal customers with precision.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Certified Google Partners", "Data-First Approach", "Transparent Reporting"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="font-medium text-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us" className="btn btn-primary inline-flex items-center gap-2">
                                Start Your Campaign <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl transform rotate-3" />
                            {/* Placeholder for Ads Dashboard/Graph */}
                            <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-100 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-primary mb-2">560%</div>
                                    <p className="text-text-muted font-medium">Average ROAS for E-commerce Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">The Growth Framework</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">How we turn ad spend into profit.</p>
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
                        <h2 className="text-3xl font-bold text-dark mb-4">Channels We Master</h2>
                        <p className="text-text-muted">Multi-channel strategies for maximum reach.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your ads?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free strategy audit and find out how much revenue you're leaving on the table.</p>
                    <Link href="/contact-us" className="btn bg-white text-dark hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all">
                        Get Free Proposal
                    </Link>
                </div>
            </section>
        </>
    );
}
