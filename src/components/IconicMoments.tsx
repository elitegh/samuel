"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { iconicMoments } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function IconicMoments() {
  return (
    <section id="moments" className="section-padding bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Legacy"
          title="Education & Journey"
          description="Key milestones from Texas Tech to generative AI platform engineering."
        />

        <div className="space-y-8 md:space-y-12">
          {iconicMoments.map((moment, index) => (
            <motion.article
              key={moment.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-video md:aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 group bg-zinc-900">
                {moment.video ? (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={moment.image}
                    className="h-full w-full object-cover"
                  >
                    <source src={moment.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </>
                )}
                <div className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-black uppercase tracking-wider z-10">
                  {moment.year}
                </div>
              </div>

              <div>
                <h3 className="font-display text-3xl md:text-4xl uppercase text-white tracking-tight leading-tight">
                  {moment.title}
                </h3>
                <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
