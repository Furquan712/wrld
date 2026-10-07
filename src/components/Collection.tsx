"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Tee } from "./art/Tee";
import { Jeans } from "./art/Jeans";
import { Sparkle } from "./art/Logo";

const panels = [
  { n: "01", title: "Oversized Tee", sub: "Black · Light Stone", kind: "tee", color: "#0c0c0c", accent: "#e6e6e6", bg: "bg-stone text-ink" },
  { n: "02", title: "Relaxed Jeans", sub: "Washed Black · Stone", kind: "jeans", color: "#e8e4dc", accent: "#2a2a2a", bg: "bg-carbon text-chrome" },
  { n: "03", title: "Signature Tee", sub: "Metallic 3D logo", kind: "tee", color: "#c6c6c6", accent: "#0c0c0c", bg: "bg-graphite text-chrome" },
  { n: "04", title: "Wide Leg Jeans", sub: "Ink · Ash", kind: "jeans", color: "#121316", accent: "#8d8d94", bg: "bg-stone-2 text-ink" },
] as const;

export function Collection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-230vw"]);
  const titleX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="collection" ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* ghost title */}
        <motion.div
          style={{ x: titleX }}
          className="pointer-events-none absolute left-0 top-[8vh] whitespace-nowrap text-[22vw] font-black uppercase leading-none tracking-[-0.05em] text-white/[0.04]"
        >
          Techno Collection · Techno Collection
        </motion.div>

        <div className="relative z-10 mx-auto mb-6 w-full max-w-7xl px-5 md:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-silver">02 — Techno collection</p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em] md:text-5xl">
            Built <span className="chrome-text animate-shimmer">different.</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-5 md:pl-8">
          {panels.map((p, i) => (
            <Panel key={p.n} {...p} i={i} />
          ))}
          <div className="flex w-[60vw] shrink-0 items-center justify-center md:w-[40vw]">
            <a
              href="#shop"
              className="chrome-border group rounded-full px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-chrome"
            >
              View all <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        {/* progress bar */}
        <div className="absolute bottom-8 left-1/2 h-px w-48 -translate-x-1/2 bg-white/10">
          <motion.div style={{ width: progress }} className="h-full bg-chrome" />
        </div>
      </div>
    </section>
  );
}

function Panel({ n, title, sub, kind, color, accent, bg, i }: (typeof panels)[number] & { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.8 }}
      className={`relative flex h-[62vh] w-[80vw] shrink-0 overflow-hidden rounded-3xl md:w-[62vw] ${bg}`}
    >
      <div className="flex w-1/2 flex-col justify-between p-6 md:p-10">
        <span className="font-mono text-xs tracking-[0.4em]">{n}</span>
        <div>
          <h3 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl">{title}</h3>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">{sub}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
          <Sparkle className="h-3 w-3" /> D1ST® Techno
        </div>
      </div>
      <div className="relative flex w-1/2 items-center justify-center p-6">
        <motion.div
          whileHover={{ scale: 1.08, rotate: kind === "tee" ? -3 : 4 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="animate-float-slow h-[80%] w-full"
        >
          {kind === "tee" ? (
            <Tee color={color} accent={accent} side="back" className="h-full w-full" />
          ) : (
            <Jeans color={color} accent={accent} className="h-full w-full" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
