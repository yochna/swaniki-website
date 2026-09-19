"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="LET'S CONNECT"
            title="Start a Conversation"
            description="Have a SaaS idea, automation requirement, or web project? Tell us about your goals and we'll reply within 24 hours."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h3 className="font-display text-3xl font-bold text-wink dark:text-paper">How We Help</h3>
            <p className="mt-4 text-base text-wink/65 dark:text-paper/60 leading-relaxed">
              Whether you need to build an MVP from scratch, automate mission-critical workflows, or elevate your digital presence, our team is ready.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 dark:bg-accent-bright/15 text-accent dark:text-accent-bright font-bold">
                  @
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-wink dark:text-paper">Direct Email</h4>
                  <a href={`mailto:${site.contact.email}`} className="text-sm font-medium text-accent dark:text-accent-bright hover:underline">
                    {site.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 dark:bg-accent-bright/15 text-accent dark:text-accent-bright font-bold">
                  📍
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-wink dark:text-paper">Location</h4>
                  <p className="text-sm text-wink/65 dark:text-paper/65">{site.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-2xl mx-auto mb-4 border border-emerald-500/20">
                  ✓
                </span>
                <h3 className="font-display text-3xl font-bold text-wink dark:text-paper">Thank You!</h3>
                <p className="mt-2 text-sm text-wink/65 dark:text-paper/60">We received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-wink/70 dark:text-paper/70 mb-2">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full rounded-2xl border border-hairline dark:border-white/15 bg-paper dark:bg-[#16110a] px-4 py-3 text-sm text-wink dark:text-paper placeholder:text-wink/30 dark:placeholder:text-paper/30 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-wink/70 dark:text-paper/70 mb-2">Your Email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full rounded-2xl border border-hairline dark:border-white/15 bg-paper dark:bg-[#16110a] px-4 py-3 text-sm text-wink dark:text-paper placeholder:text-wink/30 dark:placeholder:text-paper/30 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-wink/70 dark:text-paper/70 mb-2">Project Type</label>
                  <select
                    className="w-full rounded-2xl border border-hairline dark:border-white/15 bg-paper dark:bg-[#16110a] px-4 py-3 text-sm text-wink dark:text-paper focus:border-accent focus:outline-none"
                  >
                    <option>SaaS Product Development</option>
                    <option>Custom IT Solution & Automation</option>
                    <option>Website Design & Build</option>
                    <option>Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-wink/70 dark:text-paper/70 mb-2">Project Overview</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about what you want to build, timelines, or requirements..."
                    className="w-full rounded-2xl border border-hairline dark:border-white/15 bg-paper dark:bg-[#16110a] px-4 py-3 text-sm text-wink dark:text-paper placeholder:text-wink/30 dark:placeholder:text-paper/30 focus:border-accent focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-wink px-7 py-3.5 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white w-full justify-center"
                >
                  {loading ? "Sending..." : "Submit Inquiry"} <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
