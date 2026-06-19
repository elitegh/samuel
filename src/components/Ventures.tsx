"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ventures } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Ventures() {
  return (
    <section id="ventures" className="section-padding bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile"
          title="Contact & Links"
          description="Direct ways to connect with Samuel Murguia."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 ${
                index === 0 ? "md:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <a
                href={item.href}
                className="block h-full min-h-[280px] md:min-h-[320px]"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                </div>

                <div className="relative flex h-full min-h-[280px] md:min-h-[320px] flex-col justify-end p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl uppercase text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-zinc-400 line-clamp-2 md:line-clamp-3 max-w-md">
                        {item.description}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <span className="mt-4 inline-flex text-sm font-semibold text-gold uppercase tracking-wider">
                    {item.cta} →
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
