"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "UX/UI Design", href: "/ux-ui-design" },
        { name: "WordPress Dev", href: "/wordpress-development" },
        { name: "SEO", href: "/search-engine-optimization" },
        { name: "Social Media Ads", href: "/social-media-ads" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about-us" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 group" aria-label="GroZix Home">
          <img
            src="/logo.png"
            alt="GroZix Digital Growth"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div
                  className="flex items-center gap-1 cursor-pointer font-medium text-text-main hover:text-primary transition-colors py-2"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden p-2">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm font-medium text-text-main hover:text-primary hover:bg-surface rounded-xl transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${pathname === link.href ? "text-primary font-bold" : "text-text-main hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact-us" className="btn btn-primary py-2.5 px-6 text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden p-8"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="text-2xl font-bold text-dark flex items-center gap-2"
                    >
                      {link.name} <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="flex flex-col items-center gap-4 mt-4">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-text-muted hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-dark hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary text-lg w-full text-center max-w-xs"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
