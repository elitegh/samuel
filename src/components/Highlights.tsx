"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Highlights() {
  return (
    <section id="highlights" className="section-padding bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured"
          title={highlights.title}
          description={highlights.description}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video shadow-2xl shadow-gold/5"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={highlights.poster}
            className="h-full w-full object-cover"
          >
            <source src={highlights.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
