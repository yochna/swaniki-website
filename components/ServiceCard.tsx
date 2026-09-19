import Link from "next/link";
import { Saas3DIcon, Solutions3DIcon, Web3DIcon, ArrowRightIcon } from "./icons";

export function ServiceCard({
  title,
  description,
  cta,
  href,
  icon,
  index = 0,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: string;
  index?: number;
}) {
  const renderIcon = () => {
    if (icon === "saas") {
      return (
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <Saas3DIcon className="h-9 w-9" />
        </span>
      );
    }
    if (icon === "automation" || icon === "solutions") {
      return (
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <Solutions3DIcon className="h-9 w-9" />
        </span>
      );
    }
    return (
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Web3DIcon className="h-9 w-9" />
      </span>
    );
  };

  return (
    <div className="group flex flex-col p-8 rounded-3xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-accent/40">
      <div className="flex items-center justify-between">
        {renderIcon()}
        <span className="font-mono text-xs font-bold text-wink/35 dark:text-paper/30">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-wink dark:text-paper group-hover:text-accent dark:group-hover:text-accent-bright transition-colors">
        {title}
      </h3>
      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-wink/65 dark:text-paper/60 font-normal">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-bright transition-all group-hover:gap-2.5"
      >
        {cta} <ArrowRightIcon className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
