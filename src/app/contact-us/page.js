"use client";

import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate form submission
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            <PageHero
                title="Get In Touch"
                subtitle="Ready to start your project? We'd love to hear from you."
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-dark mb-4">Let's Talk Business</h2>
                                <p className="text-text-muted text-lg">Whether you have a question, a project in mind, or just want to say hello, we are here to help.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-dark">Email Us</h4>
                                        <p className="text-text-muted text-sm mb-1">For general inquiries and projects</p>
                                        <a href="mailto:contact@grozix.com" className="text-primary font-bold hover:underline">contact@grozix.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-dark">Live Chat</h4>
                                        <p className="text-text-muted text-sm mb-1">Available Mon-Fri, 9am - 6pm</p>
                                        <span className="text-dark font-medium">Click the chat icon below</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-dark mb-6">Send a Message</h3>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-dark ml-1">Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-surface border border-gray-200 rounded-xl p-4 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-dark ml-1">Email</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-surface border border-gray-200 rounded-xl p-4 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark ml-1">Subject</label>
                                    <select className="w-full bg-surface border border-gray-200 rounded-xl p-4 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all">
                                        <option>General Inquiry</option>
                                        <option>UX/UI Design Project</option>
                                        <option>WordPress Development</option>
                                        <option>SEO Services</option>
                                        <option>Social Media Ads</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark ml-1">Message</label>
                                    <textarea rows="4" placeholder="Tell us about your project goals..." className="w-full bg-surface border border-gray-200 rounded-xl p-4 text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all" required />
                                </div>

                                <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                                    {submitted ? "Message Sent!" : "Send Message"} <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
