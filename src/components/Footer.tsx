import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-3xl tracking-widest text-white">
              {site.shortName}
            </p>
            <p className="mt-2 text-sm text-zinc-500 max-w-sm">
              {site.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-gold hover:border-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-gold hover:border-gold transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-gold hover:border-gold transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+14054814121"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-gold hover:border-gold transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:justify-between gap-4 text-xs text-zinc-600">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with Next.js in CR7-inspired visual style.</p>
        </div>
      </div>
    </footer>
  );
}
