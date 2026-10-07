import { LogoMark, Sparkle } from "./art/Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div>
          <LogoMark className="h-14 w-14" />
          <p className="mt-6 max-w-xs text-sm text-silver">
            D1ST® | FIRST BY DESIGN.
            <br />
            Everyday wear. Different mindset.
          </p>
          <a
            href="https://instagram.com/d1st_wrld"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-chrome"
          >
            <Sparkle className="h-3 w-3" /> @d1st_wrld
          </a>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-silver">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Tees", "Jeans", "Tracksuits", "Utility Shorts"].map((l) => (
              <li key={l}>
                <a href="#shop" className="text-chrome/80 transition-colors hover:text-chrome">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-silver">Brand</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Founded by @tito_the1st", "Shipping", "Contact"].map((l) => (
              <li key={l}>
                <a href="#top" className="text-chrome/80 transition-colors hover:text-chrome">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pointer-events-none select-none px-5 text-center text-[18vw] font-black leading-[0.8] tracking-[-0.06em] text-white/[0.035] md:px-8">
        D1ST
      </div>
      <div className="border-t border-white/5 py-5 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-silver">
        © 2026 D1ST® · Demo UI
      </div>
    </footer>
  );
}
