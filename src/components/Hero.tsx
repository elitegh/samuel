"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero, site } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Introduction"
    >
      <div className="absolute inset-0">
        {hero.backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={hero.backgroundImage}
            className="absolute inset-0 h-full w-full object-cover object-center scale-105"
          >
            <source src={hero.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={hero.backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 pb-24 md:pb-32 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gold text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-4"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] uppercase text-white tracking-tight">
            {hero.headline}
            <span className="block text-gold">{hero.subheadline}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 max-w-xl text-zinc-300 text-base md:text-lg leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={hero.ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-black hover:bg-gold-light transition-colors duration-300"
          >
            {hero.cta}
          </a>
          <a
            href="#career"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:border-gold hover:text-gold transition-all duration-300"
          >
            Explore Timeline
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#ventures"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-gold transition-colors"
        aria-label="Scroll to ventures"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
