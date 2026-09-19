import type { Metadata } from "next";
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { EditorialNav } from "@/components/EditorialNav";
import { EditorialFooter } from "@/components/EditorialFooter";
import { ThemeProvider } from "@/components/ThemeProvider";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swaniki.com"),
  title: {
    default: "Swaniki Technologies | Digital Product Studio",
    template: "%s | Swaniki",
  },
  description:
    "Swaniki builds SaaS products, custom IT solutions, intelligent automations and modern websites that help businesses grow, scale and stay ahead.",
  keywords: ["SaaS", "Web Development", "Automations", "IT Solutions", "Next.js", "AI Solutions"],
  authors: [{ name: "Swaniki Technologies" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/swaniki-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/swaniki-logo.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://swaniki.com",
    siteName: "Swaniki",
    title: "Swaniki Technologies | Digital Product Studio",
    description:
      "Swaniki builds SaaS products, custom IT solutions, intelligent automations and modern websites that help businesses grow, scale and stay ahead.",
    images: [{ url: "/swaniki-logo.png" }],
  },
  twitter: {
    card: "summary",
    title: "Swaniki Technologies | Digital Product Studio",
    description:
      "Swaniki builds SaaS products, custom IT solutions, intelligent automations and modern websites that help businesses grow, scale and stay ahead.",
    images: ["/swaniki-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/swaniki-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/swaniki-logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('swaniki-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'swaniki-dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'swaniki');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-paper text-wink dark:bg-[#16110a] dark:text-paper transition-colors duration-300">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <EditorialNav />
            <main className="flex-1">{children}</main>
            <EditorialFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
