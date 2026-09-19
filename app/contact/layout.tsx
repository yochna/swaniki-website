import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a SaaS idea, automation requirement, or web project? Start a conversation with Swaniki and hear back within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
