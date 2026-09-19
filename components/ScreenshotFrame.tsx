"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

function RichPreview({ name, kind }: { name: string; kind: string }) {
  const lower = name.toLowerCase();

  if (lower.includes("2048")) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#faf8ef] p-3 text-[#776e65]">
        <div className="flex w-full items-center justify-between px-2">
          <span className="font-bold text-xl text-[#776e65]">2048</span>
          <span className="rounded bg-[#bbada0] px-2 py-0.5 text-[9px] font-bold text-white">SCORE 2584</span>
        </div>
        <div className="mt-1.5 grid grid-cols-4 gap-1 rounded-lg bg-[#bbada0] p-1.5">
          {["2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048", ""].map((val, i) => (
            <div
              key={i}
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded font-bold text-[9px]",
                val === "2048" ? "bg-[#edc22e] text-white shadow-sm" : val ? "bg-[#eee4da] text-[#776e65]" : "bg-[#cdc1b4]"
              )}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (lower.includes("coffee")) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#1c140e] p-4 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <span className="relative z-10 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d4a373]">Artisan Coffee</span>
        <h4 className="relative z-10 font-serif text-lg font-bold italic text-white mt-0.5">The Coffee Factory</h4>
        <span className="relative z-10 mt-2 rounded-full border border-[#d4a373]/40 bg-[#d4a373]/20 px-2.5 py-0.5 text-[8px] text-[#faedcd]">
          Explore Brews →
        </span>
      </div>
    );
  }

  if (lower.includes("novoexim")) {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c2461] via-[#1e3799] to-[#4a69bd] p-3 text-white">
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-xs tracking-wider">NOVOEXIM</span>
          <span className="text-[8px] uppercase tracking-widest text-sky-200">Global Trade</span>
        </div>
        <div className="my-auto">
          <p className="text-xs font-semibold text-sky-100">Connecting International Markets</p>
          <p className="text-[8px] text-sky-200/70">Export • Import • Supply Chain</p>
        </div>
        <div className="flex gap-1.5">
          <span className="h-1 w-10 rounded-full bg-sky-400" />
          <span className="h-1 w-5 rounded-full bg-sky-200/40" />
        </div>
      </div>
    );
  }

  if (lower.includes("myra")) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#111111] p-4 text-white">
        <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-400">CREATIVE STUDIO</span>
        <h4 className="font-display text-lg font-light tracking-widest text-white mt-1">MYRA STUDIO</h4>
        <p className="mt-0.5 text-[8px] text-neutral-400">Brand Identity & Digital Design</p>
      </div>
    );
  }

  if (lower.includes("academy")) {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#180e38] via-[#241459] to-[#3b1d8f] p-3 text-white">
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-[10px] tracking-wider text-brand-blue">SWANIKI ACADEMY</span>
          <span className="rounded-full bg-brand-violet/30 px-2 py-0.5 text-[7px] font-semibold text-violet-200">Learning</span>
        </div>
        <div className="my-auto">
          <p className="font-display font-bold text-xs text-white">Product Building Masterclasses</p>
          <p className="text-[8px] text-white/60">Hands-on tutorials & digital guides</p>
        </div>
        <div className="flex gap-1">
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[7px] text-white/80">SaaS</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[7px] text-white/80">Automation</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[7px] text-white/80">Next.js</span>
        </div>
      </div>
    );
  }

  // Default mock
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-ink-900 p-4">
      <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative z-10 text-center">
        <p className="font-display text-sm font-bold text-white">{name}</p>
        <p className="text-[9px] uppercase tracking-widest text-brand-blue mt-0.5">{kind}</p>
      </div>
    </div>
  );
}

type Props = {
  src?: string;
  alt: string;
  name?: string;
  kind?: string;
  className?: string;
  url?: string;
  priority?: boolean;
};

export function ScreenshotFrame({ src, alt, name = "Swaniki", kind = "Preview", className, url, priority }: Props) {
  const [errored, setErrored] = useState(false);
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-[#16110a]", className)}>
      <div className="flex items-center gap-2 border-b border-hairline dark:border-white/10 bg-paper-deep/60 dark:bg-white/5 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 hidden truncate rounded-md bg-paper dark:bg-white/10 px-3 py-1 font-mono text-[10px] font-medium text-wink/60 dark:text-paper/60 sm:block">
          {url ?? "swaniki.com"}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full">
        {src && !errored ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width:768px) 82vw, 360px"
            className="object-cover object-top"
            onError={() => setErrored(true)}
          />
        ) : (
          <RichPreview name={name} kind={kind} />
        )}
      </div>
    </div>
  );
}
