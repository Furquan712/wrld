"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, type MouseEvent } from "react";
import type { Product } from "@/lib/products";
import { Tee } from "./art/Tee";
import { Jeans } from "./art/Jeans";
import { Sparkle } from "./art/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const [ci, setCi] = useState(0);
  const [added, setAdded] = useState(false);
  const [hover, setHover] = useState(false);
  const color = product.colors[ci];
  const light = isLight(color.hex);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 220, damping: 22 });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 220, damping: 22 });
  const gx = useTransform(mx, (v) => `${v * 100}%`);
  const gy = useTransform(my, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(260px circle at ${gx} ${gy}, rgba(255,255,255,.45), transparent 65%)`;

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
    setHover(false);
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-stone text-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,.8)]"
    >
      {/* art stage */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(ellipse_at_50%_30%,#f3f0ea,#e2ddd3_70%)]">
        <div className="absolute left-4 top-4 flex items-center gap-2">
          {product.tag && (
            <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-chrome">
              {product.tag}
            </span>
          )}
        </div>
        <span className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.25em] text-ink/50">
          {product.type === "tee" ? (hover ? "Back" : "Front") : "Detail"}
        </span>

        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="animate-float h-full w-full">
            <motion.div
              animate={{ y: hover ? -10 : 0, scale: hover ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease }}
              className="h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {product.type === "tee" ? (
                <motion.div
                  animate={{ rotateY: hover ? 180 : 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="relative h-full w-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="backface-hidden absolute inset-0">
                    <Tee color={color.hex} accent={color.accent} side="front" className="h-full w-full" />
                  </div>
                  <div className="backface-hidden absolute inset-0" style={{ transform: "rotateY(180deg)" }}>
                    <Tee color={color.hex} accent={color.accent} side="back" className="h-full w-full" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  animate={{ rotate: hover ? -5 : 0, x: hover ? 6 : 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="h-full w-full"
                >
                  <Jeans color={color.hex} accent={color.accent} className="h-full w-full" />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* chrome glow following cursor */}
        <motion.div
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* quick add slide-up */}
        <motion.button
          type="button"
          onClick={() => setAdded((a) => !a)}
          initial={false}
          animate={{ y: hover ? 0 : 60, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.4, ease }}
          className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-chrome"
        >
          <motion.span key={String(added)} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {added ? "Added to bag" : "Quick add"}
          </motion.span>
          <Sparkle className={`h-3 w-3 transition-transform ${added ? "rotate-45 scale-125" : ""}`} />
        </motion.button>
      </div>

      {/* meta */}
      <div className="flex items-start justify-between gap-3 p-4">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.12em]">{product.name}</h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
            {color.name} · {product.detail}
          </p>
        </div>
        <span className="font-mono text-sm font-semibold">${product.price}</span>
      </div>

      <div className="flex items-center gap-2 px-4 pb-4">
        {product.colors.map((c, i) => (
          <button
            key={c.name}
            type="button"
            aria-label={c.name}
            onClick={() => setCi(i)}
            className={`relative h-5 w-5 rounded-full border transition-transform hover:scale-110 ${
              i === ci ? "border-ink scale-110" : "border-ink/20"
            }`}
            style={{ background: c.hex }}
          >
            {i === ci && (
              <motion.span
                layoutId={`${product.id}-ring`}
                className="absolute -inset-1 rounded-full border border-ink/60"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
        <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.25em] text-ink/40">
          {light ? "Light stone" : "Black"} base
        </span>
      </div>
    </motion.article>
  );
}

function isLight(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140;
}
