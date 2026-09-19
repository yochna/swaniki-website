import Link from "next/link";
import { ArrowRightIcon, CubeIcon, SettingIcon, TechIcon, MonitorIcon } from "./icons";

const services = [
  { icon: CubeIcon, label: "SaaS Products" },
  { icon: SettingIcon, label: "Automations" },
  { icon: TechIcon, label: "Custom Software" },
  { icon: MonitorIcon, label: "Web Development" },
];

export function CTASection() {
  return (
    <section className="border-t border-hairline bg-paper-deep/60 py-20 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
      <div className="container-ed">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a] px-8 py-16 text-center text-wink dark:text-paper sm:px-16 transition-all duration-300">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-normal tracking-tight sm:text-6xl text-wink dark:text-paper">
              Have a project in mind?
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-wink/65 dark:text-paper/60 leading-relaxed font-normal">
              Let&apos;s turn your ideas into{" "}
              <em className="italic text-accent dark:text-accent-bright">
                powerful digital products
              </em>{" "}
              and modern scalable experiences.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-wink px-7 py-3.5 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
              >
                Start a Conversation <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Bottom 4 Monospace Service Pill Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline dark:border-white/10 bg-paper-deep/60 dark:bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold text-wink/70 dark:text-paper/70 transition-transform hover:scale-105"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent dark:text-accent-bright" />
                    {s.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
