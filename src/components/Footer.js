"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-gray-200 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Info - Wider Column */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <img src="/logo.png" alt="GroZix Logo" className="h-8 w-auto" />
                        </Link>
                        <p className="text-text-muted mb-8 leading-relaxed max-w-sm">
                            We help ambitious businesses scale through data-driven design, intelligent development, and strategic marketing.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/piyastechit/" },
                                { icon: Instagram, href: "https://www.instagram.com/piyastechit?igsh=MTg2cWp1YWc5NHYxbg%3D%3D&utm_source=qr" },
                                { icon: Linkedin, href: "https://bd.linkedin.com/company/grozix" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white border border-gray-200 text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 lg:col-span-2">
                        <h3 className="text-dark font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about-us" className="text-text-muted hover:text-primary transition-colors inline-block">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-text-muted hover:text-primary transition-colors inline-block">Portfolio</Link></li>
                            <li><Link href="/blogs" className="text-text-muted hover:text-primary transition-colors inline-block">Blogs</Link></li>
                            <li><Link href="/contact-us" className="text-text-muted hover:text-primary transition-colors inline-block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-dark font-bold mb-6 text-sm uppercase tracking-wider">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/ux-ui-design" className="text-text-muted hover:text-primary transition-colors inline-block">UX/UI Design</Link></li>
                            <li><Link href="/wordpress-development" className="text-text-muted hover:text-primary transition-colors inline-block">WordPress Dev</Link></li>
                            <li><Link href="/search-engine-optimization" className="text-text-muted hover:text-primary transition-colors inline-block">SEO Optimization</Link></li>
                            <li><Link href="/social-media-ads" className="text-text-muted hover:text-primary transition-colors inline-block">Social Media Ads</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Clean Layout */}
                    <div className="md:col-span-12 lg:col-span-3">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-dark font-bold mb-4 text-sm uppercase tracking-wider">Contact Info</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-text-muted text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                    <MapPin className="text-primary mt-0.5 shrink-0" size={16} />
                                    <span>Road #30, Uposhohor, Bogura-5800, Bangladesh</span>
                                </li>
                                <li className="flex items-center gap-3 text-text-muted text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                    <Phone className="text-primary shrink-0" size={16} />
                                    <span>+880 1793683688</span>
                                </li>
                                <li className="flex items-center gap-3 text-text-muted text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                    <Mail className="text-primary shrink-0" size={16} />
                                    <span>contact@grozix.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-text-muted text-sm">
                    <p>&copy; {currentYear} GroZix. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-dark">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-dark">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
