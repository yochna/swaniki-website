"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon, ArrowRightIcon } from "./icons";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function EditorialNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = site.nav.filter((item) => item.href !== "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled
            ? "border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a]"
            : "border-transparent bg-transparent"
        )}
      >
        <nav className="container-ed flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/swaniki-logo-transparent.png"
              alt="Swaniki Technologies"
              width={919}
              height={386}
              priority
              className="h-8 w-auto transition-opacity group-hover:opacity-80 md:h-9"
            />
            <span className="hidden font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-wink/45 dark:text-paper/40 lg:inline">
              Digital Product Studio
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[13px] font-medium tracking-wide transition-colors",
                    active
                      ? "text-accent dark:text-accent-bright"
                      : "text-wink/70 hover:text-accent dark:text-paper/65 dark:hover:text-accent-bright"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-wink/70 transition-colors hover:border-accent/50 hover:text-accent dark:border-white/15 dark:text-paper/70 dark:hover:text-accent-bright"
            >
              {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
            <Link
              href="/contact"
              className="rounded-full bg-wink px-5 py-2.5 text-[13px] font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
            >
              Start a project
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-wink/70 dark:border-white/15 dark:text-paper/70"
            >
              {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center text-wink dark:text-paper"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="border-b border-hairline bg-paper px-5 pb-8 pt-4 dark:border-white/10 dark:bg-[#16110a] md:hidden">
          <div className="flex flex-col">
            {links.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between border-b border-hairline/70 py-4 font-display text-2xl text-wink dark:border-white/10 dark:text-paper"
              >
                {item.label}
                <span className="font-mono text-[10px] tracking-[0.2em] text-wink/40 dark:text-paper/35">
                  0{i + 1}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-wink px-6 py-3.5 text-sm font-semibold text-[#f7f1e4] dark:bg-paper dark:text-wink"
            >
              Start a project <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
