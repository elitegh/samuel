"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { achievements } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numericMatch = value.match(/^(\d+)/);
  const prefix = value.startsWith("#") ? "#" : "";
  const suffix = value.replace(/^#?\d+/, "");
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 28 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || !numericMatch) return;
    motionValue.set(target);
  }, [inView, motionValue, target, numericMatch]);

  useEffect(() => {
    if (!numericMatch) return;
    const unsub = spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, prefix, suffix, numericMatch]);

  const displayValue = numericMatch ? (
    <span ref={displayRef}>{prefix}0{suffix}</span>
  ) : (
    value
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-gold/30 transition-colors duration-300"
    >
      <p className="font-display text-4xl md:text-5xl lg:text-6xl text-gold tracking-tight">
        {displayValue}
      </p>
      <p className="mt-2 text-sm md:text-base text-zinc-400 uppercase tracking-wider font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Records"
          title="Career Snapshot"
          description="Numbers that summarize experience, longevity, and technical focus."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
