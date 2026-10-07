"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = ["Everyday wear.", "Different mindset.", "First by design."];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section className="relative overflow-hidden bg-stone py-28 text-ink md:py-40">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 text-[40vw] font-black leading-none tracking-[-0.06em] text-ink/[0.04]"
      >
        D1
      </motion.div>
      <div ref={ref} className="relative mx-auto max-w-5xl px-5 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-ink/50">03 — Manifesto</p>
        <div className="mt-6 space-y-2">
          {lines.map((l, i) => (
            <div key={l} className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-8xl ${
                  i === 2 ? "text-ink" : "text-ink/30"
                }`}
              >
                {l}
              </motion.p>
            </div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 max-w-md text-sm leading-relaxed text-ink/70"
        >
          D1ST® is built for people who move first. Clean silhouettes, heavyweight fabric, and a
          metallic mark that catches light the way you catch attention. Founded by @tito_the1st.
        </motion.p>
      </div>
    </section>
  );
}
