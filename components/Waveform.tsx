"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Pulse = { origin: number; start: number };

const INK = { r: 29, g: 23, b: 16 };
const CREAM = { r: 246, g: 238, b: 223 };
const ACCENT = { r: 194, g: 65, b: 12 };
const ACCENT_BRIGHT = { r: 232, g: 99, b: 31 };

export function Waveform({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let raf = 0;
    let running = false;
    let pendingDraw = false;
    let pointerX: number | null = null;
    let pulses: Pulse[] = [];

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();

    const baseAmp = (x: number, time: number) => {
      const a = Math.sin(x * 9.1 + time * 0.7);
      const b = Math.sin(x * 17.7 - time * 0.45 + 1.3);
      const c = Math.sin(x * 3.3 + time * 0.25 + 0.6);
      return 0.1 + 0.26 * Math.abs(a) + 0.16 * Math.abs(b) + 0.1 * (0.5 + 0.5 * c);
    };

    const drawFrame = (nowMs: number) => {
      const dark = document.documentElement.classList.contains("dark");
      const base = dark ? CREAM : INK;
      const warm = dark ? ACCENT_BRIGHT : ACCENT;
      const now = nowMs / 1000;
      const time = reduceMotion ? 4.2 : now;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const n = Math.min(190, Math.max(64, Math.floor(w / 6.5)));
      const barW = Math.max(1.4, Math.min(2.6, (w / n) * 0.44));
      const maxH = h / 2 - 10;
      ctx.lineCap = "round";
      ctx.lineWidth = barW;

      pulses = reduceMotion ? [] : pulses.filter((p) => now - p.start < 1.7);

      for (let i = 0; i < n; i++) {
        const x = (i + 0.5) / n;
        let amp = baseAmp(x, time);
        let mix = 0;

        if (pointerX !== null) {
          const g = Math.exp(-((x - pointerX) ** 2) / (2 * 0.055 ** 2));
          amp *= 1 + 1.6 * g;
          mix = Math.max(mix, g);
        }

        for (const p of pulses) {
          const age = now - p.start;
          const d = Math.abs(x - p.origin) - age * 0.5;
          const g = Math.exp(-(d * d) / (2 * 0.032 ** 2)) * Math.max(0, 1 - age / 1.6);
          amp += 0.95 * g;
          mix = Math.max(mix, g);
        }

        amp = Math.min(1, amp);
        const bh = Math.max(1.5, amp * maxH);
        const r = Math.round(base.r + (warm.r - base.r) * mix);
        const g = Math.round(base.g + (warm.g - base.g) * mix);
        const b = Math.round(base.b + (warm.b - base.b) * mix);
        ctx.strokeStyle = `rgba(${r},${g},${b},${0.42 + 0.58 * Math.min(1, amp + mix * 0.5)})`;
        ctx.beginPath();
        ctx.moveTo(x * w, h / 2 - bh);
        ctx.lineTo(x * w, h / 2 + bh);
        ctx.stroke();
      }
    };

    const loop = (nowMs: number) => {
      drawFrame(nowMs);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    // Single-frame redraw for events while the continuous loop is paused.
    const scheduleDraw = () => {
      if (running || pendingDraw) return;
      pendingDraw = true;
      requestAnimationFrame(() => {
        pendingDraw = false;
        drawFrame(performance.now());
      });
    };

    const ro = new ResizeObserver(() => {
      resize();
      scheduleDraw();
    });
    ro.observe(wrap);

    // Only animate while on screen.
    const io = new IntersectionObserver((entries) => {
      const visible = entries[entries.length - 1]?.isIntersecting ?? false;
      if (visible) {
        if (reduceMotion) scheduleDraw();
        else start();
      } else {
        stop();
      }
    });
    io.observe(wrap);

    // Redraw once when the theme class flips while the loop is paused.
    const mo = new MutationObserver(() => scheduleDraw());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const toNorm = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    };
    const onMove = (e: PointerEvent) => {
      pointerX = toNorm(e.clientX);
      scheduleDraw();
    };
    const onLeave = () => {
      pointerX = null;
      scheduleDraw();
    };
    const onDown = (e: PointerEvent) => {
      pointerX = toNorm(e.clientX);
      pulses.push({ origin: pointerX, start: performance.now() / 1000 });
      scheduleDraw();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const step = 0.035;
      if (e.key === "ArrowRight") {
        pointerX = Math.min(1, (pointerX ?? 0.5) + step);
      } else if (e.key === "ArrowLeft") {
        pointerX = Math.max(0, (pointerX ?? 0.5) - step);
      } else if (e.key === "Enter" || e.key === " ") {
        pulses.push({ origin: pointerX ?? 0.5, start: performance.now() / 1000 });
      } else {
        return;
      }
      e.preventDefault();
      scheduleDraw();
    };
    const onBlur = () => {
      pointerX = null;
      scheduleDraw();
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerdown", onDown);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("keydown", onKeyDown);
    wrap.addEventListener("focusout", onBlur);

    start();
    scheduleDraw();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerdown", onDown);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("keydown", onKeyDown);
      wrap.removeEventListener("focusout", onBlur);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full cursor-crosshair select-none outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-[#16110a] ${className}`}
      tabIndex={0}
      role="img"
      aria-label="Interactive waveform. Move across it or use arrow keys to explore; Enter or click to send a pulse."
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
