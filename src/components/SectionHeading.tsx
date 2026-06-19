"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
