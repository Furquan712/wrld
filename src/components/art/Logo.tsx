import { useId } from "react";

import type { CSSProperties } from "react";

export function Sparkle({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12 7-.6 11.4-5 12-12z" />
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 72 72" className={className} fill="none" aria-label="D1ST mark">
      <defs>
        <linearGradient id={`${id}-c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fafafa" />
          <stop offset="0.45" stopColor="#8a8a8a" />
          <stop offset="0.6" stopColor="#f2f2f2" />
          <stop offset="1" stopColor="#6a6a6a" />
        </linearGradient>
      </defs>
      {/* D */}
      <path
        d="M12 12h20c14.4 0 24 9.6 24 24S46.4 60 32 60H12V12zm11 10v28h9c8.3 0 14-5.7 14-14s-5.7-14-14-14h-9z"
        fill={`url(#${id}-c)`}
      />
      {/* 1 slash */}
      <path
        d="M50 4 26 68"
        stroke={`url(#${id}-c)`}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M40 4h10"
        stroke={`url(#${id}-c)`}
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* sparkle */}
      <path
        d="M62 2c.3 4 2.7 6.4 7 7-4.3.3-6.7 2.7-7 7-.3-4.3-2.7-6.7-7-7 4.3-.6 6.7-3 7-7z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-7 w-7" />
      <span className="chrome-text font-black tracking-[0.2em] text-lg leading-none">
        D1ST
      </span>
    </span>
  );
}
