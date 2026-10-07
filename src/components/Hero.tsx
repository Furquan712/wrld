"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import { Sparkle } from "./art/Logo";
import { Tee } from "./art/Tee";
import { Jeans } from "./art/Jeans";

const tagline = "FIRST BY DESIGN.".split("");
const word = "D1ST".split("");

export function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${glowX} ${glowY}, rgba(255,255,255,0.10), transparent 60%)`;

  const teeX = useTransform(sx, [0, 1], [30, -30]);
  const teeY = useTransform(sy, [0, 1], [20, -20]);
  const jeansX = useTransform(sx, [0, 1], [-40, 40]);
  const jeansY = useTransform(sy, [0, 1], [-25, 25]);
  const wordX = useTransform(sx, [0, 1], [-8, 8]);

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* mouse spotlight */}
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />

      {/* radial base + grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* rotating ring text */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        viewBox="0 0 400 400"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-20 md:h-[80vmin] md:w-[80vmin] md:opacity-30"
      >
        <defs>
          <path id="ring" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" />
        </defs>
        <text fill="#8a8a8a" fontSize="12" letterSpacing="6" fontFamily="inherit">
          <textPath href="#ring">
            D1ST® · FIRST BY DESIGN · EVERYDAY WEAR · DIFFERENT MINDSET · D1ST® · FIRST BY DESIGN · EVERYDAY WEAR · DIFFERENT MINDSET ·
          </textPath>
        </text>
      </motion.svg>

      {/* floating garments */}
      <motion.div
        style={{ x: teeX, y: teeY }}
        initial={{ opacity: 0, y: 80, rotate: -12 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ delay: 2.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-[2%] top-[18%] hidden w-[22vw] max-w-[300px] md:block"
      >
        <div className="animate-float">
          <Tee color="#0c0c0c" accent="#e6e6e6" side="back" className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,.6)]" />
        </div>
      </motion.div>
      <motion.div
        style={{ x: jeansX, y: jeansY }}
        initial={{ opacity: 0, y: 80, rotate: 14 }}
        animate={{ opacity: 1, y: 0, rotate: 10 }}
        transition={{ delay: 2.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[3%] top-[22%] hidden w-[20vw] max-w-[280px] md:block"
      >
        <div className="animate-float-slow">
          <Jeans color="#e8e4dc" accent="#2a2a2a" className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,.6)]" />
        </div>
      </motion.div>

      {/* sparkles */}
      {[
        ["12%", "30%", "0s"],
        ["85%", "20%", ".8s"],
        ["70%", "75%", "1.4s"],
        ["25%", "80%", ".4s"],
      ].map(([l, t, d]) => (
        <Sparkle
          key={l + t}
          className="pointer-events-none absolute h-3 w-3 animate-twinkle text-chrome"
          style={{ left: l, top: t, animationDelay: d }}
        />
      ))}

      {/* copy */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="mb-6 px-6 font-mono text-[8px] uppercase tracking-[0.3em] text-silver md:text-[10px] md:tracking-[0.5em]"
        >
          D1ST® · Everyday wear · Different mindset
        </motion.p>

        <motion.h1
          style={{ x: wordX }}
          className="relative flex items-start font-black leading-none tracking-[-0.04em]"
          aria-label="D1ST"
        >
          {word.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 90, rotateX: -60, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.9 + i * 0.09, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="chrome-text animate-shimmer inline-block text-[30vw] md:text-[18vw]"
            >
              {ch}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2.5, duration: 0.8, type: "spring", bounce: 0.5 }}
            className="absolute -right-6 -top-4 md:-right-12 md:-top-8"
          >
            <Sparkle className="h-6 w-6 animate-twinkle text-white md:h-12 md:w-12" />
          </motion.span>
        </motion.h1>

        <p className="mt-4 flex gap-[0.2em] text-xs font-medium uppercase tracking-[0.45em] text-chrome md:text-base" aria-label="First by design.">
          {tagline.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + i * 0.035, duration: 0.5 }}
              className="inline-block"
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.7 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full bg-chrome px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-ink"
          >
            <span className="relative z-10">Shop D1ST</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-70 transition-transform duration-700 group-hover:translate-x-full" />
          </motion.a>
          <motion.a
            href="#collection"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="chrome-border rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-chrome"
          >
            Techno Collection
          </motion.a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-silver">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-chrome"
          />
        </div>
      </motion.div>
    </section>
  );
}
