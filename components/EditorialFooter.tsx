import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [...site.nav, { label: "Contact", href: "/contact" }];

export function EditorialFooter() {
  return (
    <footer className="border-t border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a]">
      <div className="container-ed flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/swaniki-logo-transparent.png"
              alt="Swaniki Technologies"
              width={919}
              height={386}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-2 font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-wink/45 dark:text-paper/40">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-wink/60 dark:text-paper/55">
            {site.description}
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-12 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-wink/65 transition-colors hover:text-accent dark:text-paper/60 dark:hover:text-accent-bright"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm">
            <a
              href={`mailto:${site.contact.email}`}
              className="text-wink/65 underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50 dark:text-paper/60 dark:decoration-white/20 dark:hover:text-accent-bright"
            >
              {site.contact.email}
            </a>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-wink/40 dark:text-paper/35">
              {site.contact.location}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline/70 dark:border-white/5">
        <div className="container-ed flex flex-col items-center gap-2 py-5 text-[11px] text-wink/40 dark:text-paper/35">
          <p className="max-w-3xl text-center leading-relaxed sm:text-left sm:self-start">
            {site.legalNotice}
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.fullName}. All rights reserved.
            </p>
            <p className="font-mono uppercase tracking-[0.2em]">SaaS · Automations · Web</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
