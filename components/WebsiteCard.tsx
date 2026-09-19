import Link from "next/link";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { ArrowRightIcon } from "./icons";
import type { Website } from "@/lib/websites";

export function WebsiteCard({ website }: { website: Website }) {
  return (
    <Link
      href={`/websites/${website.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
    >
      <div className="p-3">
        <ScreenshotFrame
          src={website.screenshot}
          alt={`${website.name} website`}
          name={website.name}
          kind="Website"
          url={website.url}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent dark:text-accent-bright">
          {website.category}
        </span>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-wink dark:text-paper group-hover:text-accent dark:group-hover:text-accent-bright transition-colors">
          {website.name}
        </h3>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-wink/65 dark:text-paper/60 font-normal">
          {website.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-bright transition-all group-hover:gap-2">
          View Case Study <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
