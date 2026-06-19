"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    const subject = encodeURIComponent("Portfolio inquiry — Samuel Murguia");
    const body = encodeURIComponent(
      `Hello Samuel,\n\nI found your portfolio and would like to connect.\n\nFrom: ${email}\n`
    );
    window.location.href = `mailto:samurguia419@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="section-padding bg-black border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="Connect"
          title="Get In Touch"
          description="Reach out for engineering opportunities, collaboration, or technical discussions."
          align="center"
        />

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-gold text-lg font-medium"
          >
            Thank you - message received.
          </motion.p>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/15 bg-zinc-900 px-5 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-black hover:bg-gold-light transition-colors shrink-0"
            >
              Send
            </button>
          </motion.form>
        )}

        <p className="mt-4 text-xs text-zinc-600">
          Demo form. Use the contact cards above for direct email, phone, LinkedIn, or GitHub.
        </p>
      </div>
    </section>
  );
}
