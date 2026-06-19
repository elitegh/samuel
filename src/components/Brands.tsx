"use client";

import { motion } from "framer-motion";
import { brandPartners } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Brands() {
  const doubled = [...brandPartners, ...brandPartners];

  return (
    <section id="partners" className="section-padding bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <SectionHeading
          eyebrow="Background"
          title="Experience Areas"
          align="center"
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
        >
          {doubled.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="shrink-0 font-display text-2xl md:text-4xl uppercase tracking-widest text-zinc-600 hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
