"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Wordmark } from "./art/Logo";

const links = ["Shop", "Tees", "Jeans", "Collection"];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" aria-label="D1ST home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="group relative text-xs uppercase tracking-[0.25em] text-silver transition-colors hover:text-chrome"
              >
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-chrome transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/d1st_wrld"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs uppercase tracking-[0.25em] text-silver hover:text-chrome md:block"
          >
            @d1st_wrld
          </a>
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="chrome-border rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-chrome"
          >
            Bag · 0
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
