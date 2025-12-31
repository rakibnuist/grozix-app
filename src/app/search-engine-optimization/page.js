"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { TrendingUp, FileText, Globe, MapPin, ShoppingBag, BarChart, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SEO() {
    const processSteps = [
        { title: "SEO Audit", desc: "Comprehensive analysis of your current technical health and keyword rankings." },
        { title: "Strategy & Keywords", desc: "Identifying high-value search terms and mapping them to your content." },
        { title: "On-Page Optimization", desc: "Optimizing structure, meta tags, and content for maximum relevance." },
        { title: "Authority Building", desc: "Acquiring high-quality backlinks to boost domain authority and trust." }
    ];

    const offerings = [
        { title: "Technical SEO", icon: TrendingUp, desc: "Site speed, mobile usability, and crawlability." },
        { title: "On-Page SEO", icon: FileText, desc: "Keyword optimization and content structure." },
        { title: "Off-Page SEO", icon: Globe, desc: "Link building and brand mentions." },
        { title: "Local SEO", icon: MapPin, desc: "Google Business Profile and local citations." },
        { title: "E-commerce SEO", icon: ShoppingBag, desc: "Product schema and category optimization." },
        { title: "Reporting", icon: BarChart, desc: "Transparent monthly ROI reports." },
    ];

    return (
        <>
            <PageHero
                title="SEO Services"
                subtitle="Increase organic visibility, drive qualified traffic, and dominate search results."
            />

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
                            <h2 className="text-3xl font-bold text-dark mb-6">Data-Driven SEO Strategies</h2>
                            <p className="text-text-muted text-lg mb-6 leading-relaxed">
                                SEO is not just about rankings; it’s about revenue. We use advanced analytics and ethical white-hat techniques to position your brand in front of customers who are ready to buy.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Comprehensive Site Audits", "Keyword Gap Analysis", "Content Marketing Strategy"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="font-medium text-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us" className="btn btn-primary inline-flex items-center gap-2">
                                Get Free Audit <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl transform -rotate-3" />
                            <Image
                                src="/seo-dashboard.png"
                                alt="SEO Dashboard Analytics"
                                width={600}
                                height={400}
                                className="relative rounded-3xl shadow-xl border border-gray-100 bg-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">How We Rank You #1</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">A proven framework for sustainable organic growth.</p>
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
                        <h2 className="text-3xl font-bold text-dark mb-4">Complete SEO Solutions</h2>
                        <p className="text-text-muted">Covering every ranking factor to get you to the top.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to dominate search results?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free SEO audit and discover your path to #1.</p>
                    <Link href="/contact-us" className="btn bg-white text-dark hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all">
                        Get Free Audit
                    </Link>
                </div>
            </section>
        </>
    );
}
