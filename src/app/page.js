"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Globe, TrendingUp, Megaphone, CheckCircle, ArrowRight, Star, Cpu, ShieldCheck, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { useRef } from "react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-background text-text-main overflow-x-hidden">

      {/* AUTHENTIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-white">

        {/* Abstract Background Shapes */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Authentic Text Content */}
            <motion.div
              initial="hidden" animate="visible" variants={fadeInUp}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-gray-200 mb-8 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm font-semibold text-text-muted tracking-wide uppercase">Agency of the Future</span>
              </div>

              {/* Exact Header from Live Site */}
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-dark">
                Transform Your Business with <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  High-Converting Digital Solutions
                </span>
              </h1>

              {/* Exact Subheader */}
              <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed font-medium">
                We help agencies, enterprises, and startups achieve measurable results through expert UX/UI design, WordPress development, SEO, and Google Ads.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us" className="btn btn-primary group">
                  Get Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link href="/portfolio" className="btn btn-outline">
                  View Portfolio
                </Link>
              </div>

              {/* Authentic Stats */}
              <div className="mt-12 flex items-center gap-8 pt-8 border-t border-gray-100">
                <div>
                  <h4 className="text-3xl font-bold text-dark">500+</h4>
                  <p className="text-sm text-text-muted">Projects Completed</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <h4 className="text-3xl font-bold text-dark">98%</h4>
                  <p className="text-sm text-text-muted">Client Satisfaction</p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                <div className="hidden sm:block">
                  <h4 className="text-3xl font-bold text-dark">250%</h4>
                  <p className="text-sm text-text-muted">Avg. ROI Increase</p>
                </div>
              </div>
            </motion.div>

            {/* Visual/Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-3xl" />
                <Image
                  src="/hero-bg.png"
                  alt="GroZix Digital Growth"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                  priority
                />

                {/* Floating Testimonial Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-[260px]"
                >
                  <div className="flex gap-1 text-yellow-400 mb-2">
                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs text-text-muted italic mb-3">"Working with GroZix has been a game-changer... major improvement in rankings and leads."</p>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-secondary" size={16} />
                    <div>
                      <div className="text-sm font-bold text-dark">Harvey</div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">Verified Client</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC SERVICES SECTION */}
      <section className="py-28 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Why Choose Us</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Growing business through high-converting digital solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="UX/UI Design"
              description="Create user-centered experiences that drive engagement rates."
              icon={Palette}
              link="/ux-ui-design"
              delay={0.1}
              features={["User Research", "Wireframing", "Prototyping", "Usability Testing"]}
            />
            <ServiceCard
              title="WordPress Development"
              description="Build powerful, scalable websites that convert visitors into customer."
              icon={Globe}
              link="/wordpress-development"
              delay={0.2}
              features={["Custom Themes", "E-commerce", "Performance Opt.", "Security"]}
            />
            <ServiceCard
              title="SEO Services"
              description="Increase organic visibility and drive qualified traffic to your website."
              icon={TrendingUp}
              link="/search-engine-optimization"
              delay={0.3}
              features={["Technical SEO", "On-Page SEO", "Off-Page SEO", "Local SEO"]}
            />
            <ServiceCard
              title="Google Ads"
              description="Drive targeted traffic and maximize ROI with managed ad campaigns."
              icon={Megaphone}
              link="/social-media-ads"
              delay={0.4}
              features={["Campaign Setup", "Keyword Research", "Ad Optimization", "Performance"]}
            />
          </div>
        </div>
      </section>

      {/* AUTHENTIC FEATURED PROJECTS (Mapped to Layout) */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-2">Featured Work</h2>
              <p className="text-text-muted">Handpicked success stories from our portfolio.</p>
            </div>
            <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Featured Solo Project */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image src="/project1.png" alt="Marketing Agency Design" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white max-w-md">
                <div className="bg-primary/90 backdrop-blur-sm py-1 px-3 rounded-md text-xs font-bold uppercase inline-block mb-3">WordPress & SEO</div>
                <h3 className="text-3xl font-bold mb-3 leading-tight">Design & Marketing Agency Website</h3>
                <p className="text-white/80 text-sm">Complete UX/UI design and WordPress development centered on conversion.</p>
              </div>
            </motion.div>

            {/* Secondary Projects List */}
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "Fitness Website UX/UI", cat: "UX/UI Design", img: "/project2.png" },
                { title: "Digital Marketing Agency Site", cat: "Web Development", img: "/project3.png" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex flex-col sm:flex-row gap-6 items-center p-6 rounded-3xl bg-surface border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                    <Image src={item.img} fill className="object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                  </div>
                  <div className="w-full">
                    <span className="text-xs font-bold text-primary uppercase mb-2 block">{item.cat}</span>
                    <h4 className="text-2xl font-bold text-dark mb-3">{item.title}</h4>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">Complete UX/UI design and development tailored for industry leaders.</p>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / STATS OVERVIEW - Clean & Professional */}
      <section className="py-28 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Built for Ambitious Brands</h2>
              <p className="text-text-muted mb-8 text-lg">We don't just build websites; we build engines for growth. Here is why industry leaders trust us.</p>

              <ul className="space-y-6">
                {[
                  { title: "UX/UI That Converts", desc: "Every pixel is placed with purpose to drive engagement." },
                  { title: "Powerful WP Devs", desc: "Fast, scalable, and SEO-friendly WordPress sites." },
                  { title: "Reliable Support", desc: "Unlimited revisions to ensure perfect alignment with your vision." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary border border-gray-100 shadow-sm shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-dark">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Stats Block */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg flex flex-col items-center text-center justify-center h-48">
                <h3 className="text-4xl font-bold text-primary mb-2">$2M+</h3>
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Revenue Generated</p>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-lg flex flex-col items-center text-center justify-center h-48 text-white mt-8">
                <h3 className="text-4xl font-bold mb-2">250%</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-wider">Avg ROI Increase</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg flex flex-col items-center text-center justify-center h-48 -mt-8">
                <h3 className="text-4xl font-bold text-dark mb-2">500+</h3>
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Projects Completed</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg flex flex-col items-center text-center justify-center h-48">
                <h3 className="text-4xl font-bold text-secondary mb-2">98%</h3>
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC CTA */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get a free consultation and discover how we can help you achieve your digital goals.</p>
          <Link href="/contact-us" className="btn bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg shadow-lg hover:shadow-white/20">
            Get Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
