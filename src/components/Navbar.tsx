"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5 md:py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-2xl md:text-3xl tracking-widest text-white hover:text-gold transition-colors"
          aria-label={`${site.name} home`}
        >
          {site.shortName}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#newsletter"
          className="hidden md:inline-flex items-center justify-center rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-sm font-semibold text-gold hover:bg-gold hover:text-black transition-all duration-300"
        >
          Contact
        </a>

        <button
          type="button"
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-6 gap-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-white hover:text-gold transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#newsletter"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
