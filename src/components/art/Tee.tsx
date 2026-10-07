import { useId } from "react";

type TeeProps = {
  color: string;
  accent: string;
  side?: "front" | "back";
  className?: string;
};

const BODY =
  "M70 30 L98 18 C108 34 132 34 142 18 L170 30 L224 66 L198 100 L178 86 L178 236 C140 252 100 252 62 236 L62 86 L42 100 L16 66 Z";

export function Tee({ color, accent, side = "front", className = "" }: TeeProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 240 260" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-sh`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.07" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0.02" />
          <stop offset="1" stopColor="#000" stopOpacity="0.26" />
        </linearGradient>
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5f5f5" />
          <stop offset="0.5" stopColor="#8a8a8a" />
          <stop offset="1" stopColor="#e8e8e8" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* drop shadow */}
      <ellipse cx="120" cy="246" rx="70" ry="8" fill="#000" opacity="0.25" filter={`url(#${id}-soft)`} />

      <path d={BODY} fill={color} style={{ transition: "fill .5s ease" }} />
      <path d={BODY} fill={`url(#${id}-sh)`} />

      {/* seams */}
      <path d="M98 18 C108 40 132 40 142 18" fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="3" />
      <path d="M62 86 L42 100 M178 86 L198 100" stroke={accent} strokeOpacity="0.18" strokeWidth="2" />
      <path d="M64 228 C100 242 140 242 176 228" stroke={accent} strokeOpacity="0.18" strokeWidth="2" fill="none" />
      <path d="M62 96 C100 108 140 108 178 96" stroke={accent} strokeOpacity="0.06" strokeWidth="1" fill="none" />

      {side === "front" ? (
        <g transform="translate(88 70)" fill={accent}>
          <text fontSize="11" fontWeight="900" letterSpacing="1.5" fontFamily="inherit">
            D1ST
          </text>
          <path transform="translate(32 -12) scale(0.35)" d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12 7-.6 11.4-5 12-12z" />
        </g>
      ) : (
        <g transform="translate(120 140)" textAnchor="middle">
          <path
            transform="translate(-14 -58) scale(1.2)"
            d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12 7-.6 11.4-5 12-12z"
            fill={accent}
          />
          <text fontSize="34" fontWeight="900" letterSpacing="4" fill={`url(#${id}-metal)`} fontFamily="inherit">
            D1ST
          </text>
          <text y="16" fontSize="6.5" letterSpacing="3" fill={accent} fillOpacity="0.8" fontFamily="inherit">
            FIRST BY DESIGN.
          </text>
          <path
            transform="translate(-6 40) scale(0.5)"
            d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12 7-.6 11.4-5 12-12z"
            fill={accent}
          />
        </g>
      )}
    </svg>
  );
}
