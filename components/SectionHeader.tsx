import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";
  return (
    <div className={cn("max-w-3xl overflow-visible", isCentered && "mx-auto text-center flex flex-col items-center", className)}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-wink dark:text-paper transition-colors duration-300 leading-[1.05] overflow-visible pr-2",
          eyebrow ? "mt-4" : "mt-0"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-sans text-base sm:text-lg text-wink/65 dark:text-paper/60 font-normal leading-relaxed transition-colors duration-300 pr-1">
          {description}
        </p>
      )}
    </div>
  );
}
