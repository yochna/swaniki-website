import { Tag } from "./Tag";
import { BriefcaseIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from "./icons";
import { CAREERS_FORM_URL, type Career } from "@/lib/careers";

export function CareerCard({ career }: { career: Career }) {
  const applyUrl = career.applyUrl ?? CAREERS_FORM_URL;

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-bold tracking-tight text-wink dark:text-paper">
          {career.title}
        </h3>
        <span className="shrink-0 inline-flex items-center rounded-full bg-accent/10 dark:bg-accent-bright/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent dark:text-accent-bright border border-accent/20">
          {career.type}
        </span>
      </div>

      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-wink/65 dark:text-paper/60 font-normal">
        {career.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-wink/55 dark:text-paper/50">
        <span className="inline-flex items-center gap-1.5">
          <BriefcaseIcon className="h-3.5 w-3.5" />
          {career.department}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPinIcon className="h-3.5 w-3.5" />
          {career.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ClockIcon className="h-3.5 w-3.5" />
          {career.mode}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {career.requirements.slice(0, 3).map((r) => (
          <Tag key={r}>{r}</Tag>
        ))}
      </div>

      <a
        href={applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-wink px-5 py-3 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
      >
        Apply Now <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
