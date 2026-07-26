"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { careerClubs } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

function ExperienceCard({
  club,
  index,
}: {
  club: (typeof careerClubs)[number];
  index: number;
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
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.5 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
    >
      <div
        className="group relative aspect-[16/10] sm:aspect-[16/9] shrink-0 overflow-hidden"
        onMouseEnter={play}
        onMouseLeave={pause}
        onTouchStart={play}
        onTouchEnd={pause}
        onFocus={play}
        onBlur={pause}
        tabIndex={0}
        role="img"
        aria-label={`${club.name} media preview`}
      >
        <Image
          src={club.image}
          alt={club.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
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
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-black border-b-[7px] border-b-transparent ml-0.5" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <p className="text-gold text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-widest uppercase mb-1">
          {club.years}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-white tracking-tight">
          {club.name}
        </h3>
        <p className="text-sm text-zinc-300 mt-1 text-pretty">{club.role}</p>
        <p className="text-[11px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-0.5">
          {club.location}
        </p>

        <ul className="mt-4 space-y-2 sm:space-y-2.5">
          {club.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2.5 text-[13px] sm:text-sm text-zinc-400 leading-relaxed"
            >
              <span
                className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden
              />
              <span className="text-pretty">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function CareerTimeline() {
  return (
    <section id="career" className="section-padding bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Professional Experience"
          description="Roles across Databricks, SolarWinds, SailPoint, and uShip — hover media to preview."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {careerClubs.map((club, index) => (
            <ExperienceCard key={club.id} club={club} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
