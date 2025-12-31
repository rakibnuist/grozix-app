"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

export default function Blogs() {
    const posts = [
        {
            title: "The Future of UX/UI Design in 2026: What to Expect",
            excerpt: "Discover the emerging trends that will shape the digital landscape in the coming years. From AI-driven interfaces to immersive spatial computing.",
            date: "Dec 30, 2025",
            author: "Ferdausur Rahman",
            category: "Design",
            readTime: "5 min read",
            image: "/project1.png" // Placeholder
        },
        {
            title: "5 SEO Strategies for Real Estate Agencies",
            excerpt: "Learn how to dominate local search results and generate more leads for your property listings with these proven, high-impact SEO tactics.",
            date: "Dec 25, 2025",
            author: "GroZix Team",
            category: "SEO",
            readTime: "8 min read",
            image: "/project2.png" // Placeholder
        },
        {
            title: "Why WordPress is Still King for Enterprise Sites",
            excerpt: "Despite the rise of new platforms, WordPress remains the most powerful and scalable choice for serious businesses. Here's why 43% of the web uses it.",
            date: "Dec 20, 2025",
            author: "Dev Team",
            category: "Development",
            readTime: "6 min read",
            image: "/project3.png" // Placeholder
        },
        {
            title: "Maximizing ROI with Google Performance Max",
            excerpt: "Stop wasting money on clicks. Learn how to structure your PMax campaigns for maximum conversion and return on ad spend using AI.",
            date: "Dec 15, 2025",
            author: "Marketing Lead",
            category: "PPC",
            readTime: "7 min read",
            image: "/project1.png" // Placeholder
        },
    ];

    return (
        <>
            <PageHero
                title="Insights & News"
                subtitle="Expert advice on Digital Marketing, Design, and Development."
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {posts.map((post, index) => (
                            <div key={index} className="flex flex-col group cursor-pointer">
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark uppercase tracking-wide">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-text-muted mb-3 font-medium">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                                        <Link href="#">{post.title}</Link>
                                    </h2>
                                    <p className="text-text-muted mb-6 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-200" /> {/* Avatar Placeholder */}
                                            <span className="text-sm font-bold text-dark">{post.author}</span>
                                        </div>
                                        <span className="text-primary font-bold text-sm group-hover:underline">Read Post</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="bg-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                            <p className="text-gray-400 mb-8">Get the latest insights and trends delivered directly to your inbox. No spam, guaranteed.</p>

                            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                                />
                                <button type="submit" className="btn btn-primary px-8">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
