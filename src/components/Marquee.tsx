import { Sparkle } from "./art/Logo";

const items = ["First by design", "Everyday wear", "Different mindset", "D1ST®", "Founded by @tito_the1st"];

export function Marquee({ invert = false }: { invert?: boolean }) {
  const row = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y py-4 ${
        invert ? "border-ink/10 bg-stone text-ink" : "border-white/10 bg-ink text-chrome"
      }`}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="flex items-center gap-6 px-6 text-sm font-semibold uppercase tracking-[0.35em]">
                {t}
                <Sparkle className="h-3 w-3 opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
