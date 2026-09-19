import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

const base = "h-6 w-6";

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function CubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function SettingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function TechIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M13 5l-2 14" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Saas3DIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("h-10 w-10", className)} aria-hidden>
      <defs>
        <linearGradient id="cubeTop" x1="12" y1="6" x2="36" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9b82ff" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="12" y1="18" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c5cff" />
          <stop offset="1" stopColor="#5035cc" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="24" y1="18" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b6dff" />
          <stop offset="1" stopColor="#3748d1" />
        </linearGradient>
      </defs>
      <polygon points="24,6 38,14 24,22 10,14" fill="url(#cubeTop)" />
      <polygon points="10,14 24,22 24,38 10,30" fill="url(#cubeLeft)" />
      <polygon points="24,22 38,14 38,30 24,38" fill="url(#cubeRight)" />
      <path d="M24 6L38 14L24 22L10 14L24 6ZM24 22V38M38 14V30L24 38M10 14V30L24 38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function Solutions3DIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("h-10 w-10", className)} aria-hidden>
      <defs>
        <linearGradient id="codeGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b9bff" />
          <stop offset="1" stopColor="#1e60cc" />
        </linearGradient>
      </defs>
      <rect x="6" y="8" width="36" height="32" rx="8" fill="url(#codeGrad)" fillOpacity="0.15" stroke="url(#codeGrad)" strokeWidth="2" />
      <path d="M18 18L12 24L18 30" stroke="#3b9bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 18L36 24L30 30" stroke="#3b9bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 16L22 32" stroke="#5b6dff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Web3DIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("h-10 w-10", className)} aria-hidden>
      <defs>
        <linearGradient id="webGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="6" y="8" width="36" height="26" rx="6" fill="url(#webGrad)" fillOpacity="0.15" stroke="url(#webGrad)" strokeWidth="2" />
      <line x1="6" y1="16" x2="42" y2="16" stroke="url(#webGrad)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="#10b981" />
      <circle cx="17" cy="12" r="1.5" fill="#10b981" />
      <circle cx="22" cy="12" r="1.5" fill="#10b981" />
      <path d="M16 38H32M24 34V38" stroke="url(#webGrad)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SwanikiLogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      <defs>
        <linearGradient id="swkTop" x1="12" y1="8" x2="52" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="swkMid" x1="16" y1="20" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="swkBot" x1="20" y1="36" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <path d="M32 6L54 18V28L32 16L10 28V18L32 6Z" fill="url(#swkTop)" />
      <path d="M54 22L32 34L10 22L20 17L32 23L44 17L54 22Z" fill="url(#swkTop)" fillOpacity="0.8" />
      <path d="M10 26L32 38L54 26V36L32 48L10 36V26Z" fill="url(#swkMid)" />
      <path d="M10 38L32 50L54 38V48L32 60L10 48V38Z" fill="url(#swkBot)" />
    </svg>
  );
}
