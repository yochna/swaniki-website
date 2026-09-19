import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-paper-deep/80 dark:bg-white/10 px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-wink/70 dark:text-paper/70 border border-hairline/80 dark:border-white/10 transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}
