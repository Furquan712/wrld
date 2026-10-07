"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const tabs = [
  { key: "all", label: "All" },
  { key: "tee", label: "Tees" },
  { key: "jeans", label: "Jeans" },
] as const;
type Tab = (typeof tabs)[number]["key"];

export function Products() {
  const [tab, setTab] = useState<Tab>("all");
  const list = products.filter((p) => tab === "all" || p.type === tab);

  return (
    <section id="shop" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <span id="tees" className="absolute -top-24" />
      <span id="jeans" className="absolute -top-24" />

      <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-silver"
          >
            01 — The essentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl"
          >
            Tees <span className="chrome-text animate-shimmer">&amp;</span> Jeans
          </motion.h2>
          <p className="mt-4 max-w-md text-sm text-silver">
            Oversized silhouettes, dense weaves, signature hardware. Hover a tee to flip it, pick a
            colourway, add to bag.
          </p>
        </div>

        <LayoutGroup id="tabs">
          <div className="flex w-fit gap-1 rounded-full border border-white/10 bg-carbon p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                  tab === t.key ? "text-ink" : "text-silver hover:text-chrome"
                }`}
              >
                {tab === t.key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-chrome"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
