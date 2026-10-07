import { useId } from "react";

type JeansProps = { color: string; accent: string; className?: string };

const LEGS =
  "M50 34 H190 L200 160 L192 292 H140 L124 160 L120 124 L116 160 L100 292 H48 L40 160 Z";

export function Jeans({ color, accent, className = "" }: JeansProps) {
  const id = useId();
  const stitch = { stroke: accent, strokeOpacity: 0.55, strokeWidth: 1.6, strokeDasharray: "4 3", fill: "none" } as const;
  return (
    <svg viewBox="0 0 240 300" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-sh`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.25" />
          <stop offset="0.3" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0.18" />
          <stop offset="0.7" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <ellipse cx="120" cy="292" rx="80" ry="7" fill="#000" opacity="0.25" filter={`url(#${id}-soft)`} />

      {/* legs */}
      <path d={LEGS} fill={color} style={{ transition: "fill .5s ease" }} />
      <path d={LEGS} fill={`url(#${id}-sh)`} />

      {/* waistband */}
      <rect x="48" y="14" width="144" height="20" rx="3" fill={color} style={{ transition: "fill .5s ease" }} />
      <rect x="48" y="14" width="144" height="20" rx="3" fill={`url(#${id}-sh)`} />
      <path d="M50 18 H190 M50 30 H190" {...stitch} />

      {/* belt loops */}
      {[62, 100, 140, 178].map((x) => (
        <rect key={x} x={x - 3} y="12" width="6" height="24" rx="1.5" fill={color} stroke={accent} strokeOpacity="0.35" />
      ))}

      {/* fly */}
      <path d="M120 34 V124" stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" />
      <path d="M112 38 C104 66 104 96 112 122" {...stitch} />
      <circle cx="120" cy="40" r="3.2" fill={accent} fillOpacity="0.9" />

      {/* front pockets */}
      <path d="M52 40 C80 42 94 54 100 78" {...stitch} />
      <path d="M188 40 C160 42 146 54 140 78" {...stitch} />
      {/* coin pocket */}
      <path d="M58 46 h18 v12 h-18 z" {...stitch} />

      {/* outseams / inseams */}
      <path d="M54 38 L46 160 L54 288" {...stitch} />
      <path d="M186 38 L194 160 L186 288" {...stitch} />
      <path d="M118 130 L106 288" {...stitch} />
      <path d="M122 130 L134 288" {...stitch} />

      {/* hems */}
      <path d="M48 280 H100 M140 280 H192" {...stitch} />

      {/* knee creases */}
      <path d="M62 170 C76 176 86 176 96 170 M144 170 C154 176 166 176 180 170" stroke={accent} strokeOpacity="0.12" strokeWidth="2" fill="none" />

      {/* back patch label */}
      <g transform="translate(156 17)">
        <rect width="30" height="14" rx="2" fill={accent} />
        <text x="15" y="10" fontSize="7" fontWeight="900" textAnchor="middle" fill={color} letterSpacing="1" fontFamily="inherit">
          D1ST
        </text>
      </g>
    </svg>
  );
}
