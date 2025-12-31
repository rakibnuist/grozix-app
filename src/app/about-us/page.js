"use client";

import PageHero from "@/components/PageHero";
import { Users, Lightbulb, TrendingUp, Target, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <PageHero
                title="About GroZix"
                subtitle="We are a digital growth agency helping brands scale through high-conversion design and development."
            />

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wide">
                                Who We Are
                            </div>
                            <h2 className="text-4xl font-bold text-dark leading-tight">
                                More Than Just an Agency.<br />
                                <span className="text-primary">We Are Your Growth Partners.</span>
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed">
                                GroZix helps Agencies, Enterprises, and Startups generate predictable and scalable leads. With over 7 years of experience, we combine user-centric design with powerful development and AI strategies to turn visitors into loyal customers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg">Data-Driven</h4>
                                        <p className="text-sm text-text-muted">Every decision backed by analytics and testing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg">Proven Success</h4>
                                        <p className="text-sm text-text-muted">Over 500+ projects delivered successfully.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Stats */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl transform rotate-3" />
                            <div className="relative bg-surface p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center py-20">
                                <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">7+</div>
                                <div className="text-xl font-medium text-dark">Years of Experience</div>
                                <div className="mt-8 flex gap-8 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-dark">500+</div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider">Projects</div>
                                    </div>
                                    <div className="w-px h-12 bg-gray-200" />
                                    <div>
                                        <div className="text-3xl font-bold text-dark">50+</div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider">Happy Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Values</span>
                        <h2 className="text-3xl font-bold text-dark mb-4">Built on Trust & Innovation</h2>
                        <p className="text-text-muted">We believe in transparency, hard work, and delivering results that speak for themselves.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Client Success First", icon: Users, desc: "Your growth is our primary metric of success. We align our goals with yours." },
                            { title: "Constant Innovation", icon: Lightbulb, desc: "We stay ahead of digital trends to give you a competitive advantage." },
                            { title: "Excellence in Execution", icon: Award, desc: "We don't settle for 'good enough'. We aim for perfection in every pixel." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary mb-6">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                                <p className="text-text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-dark mb-12">Meet the Leader</h2>
                    <div className="inline-flex flex-col items-center bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm max-w-md mx-auto hover:translate-y-1 transition-transform">
                        <div className="w-32 h-32 relative mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                            {/* Placeholder for Founder Image - Using a gradient if generic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-bold text-gray-400">FR</div>
                        </div>
                        <h4 className="text-2xl font-bold text-dark">Ferdausur Rahman</h4>
                        <p className="text-primary font-medium mb-4">Founder & Lead UX/UI Designer</p>
                        <p className="text-text-muted text-sm italic">"My mission is to help businesses decode the digital landscape and build assets that truly perform."</p>
                    </div>
                </div>
            </section>
        </>
    );
}
