"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { careerClubs } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

function ExperienceCard({
  club,
}: {
  club: (typeof careerClubs)[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play();
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
      onMouseEnter={play}
      onMouseLeave={pause}
      onTouchStart={play}
      onTouchEnd={pause}
      onFocus={play}
      onBlur={pause}
    >
      <Image
        src={club.image}
        alt={club.name}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
        sizes="480px"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={club.image}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <source src={club.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">
          {club.years}
        </p>
        <h3 className="font-display text-3xl md:text-4xl uppercase text-white tracking-tight">
          {club.name}
        </h3>
        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">
          {club.location}
        </p>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          {club.highlight}
        </p>
      </div>
    </div>
  );
}

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="career" className="section-padding bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <SectionHeading
          eyebrow="Journey"
          title="Professional Experience"
          description="Hover each card to preview role highlights — Databricks, SolarWinds, SailPoint, and uShip."
        />
      </div>

      <div className="hidden md:block mx-auto max-w-7xl px-6 lg:px-8 mb-6">
        <div className="h-0.5 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold origin-left"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-8 pb-4 md:pb-8"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {careerClubs.map((club, index) => (
          <motion.article
            key={club.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-[420px] lg:w-[480px]"
          >
            <ExperienceCard club={club} />
          </motion.article>
        ))}
        <div className="shrink-0 w-6" aria-hidden />
      </div>

      <p className="text-center text-zinc-600 text-sm mt-4 md:hidden">
        Swipe to explore experience → tap and hold to preview video
      </p>
    </section>
  );
}
