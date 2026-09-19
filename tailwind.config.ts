import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#faf6ee",
          deep: "#f1ead9",
          card: "#fffdf8",
        },
        wink: {
          DEFAULT: "#1d1710",
          soft: "#40362a",
          faint: "#6d6152",
        },
        accent: {
          DEFAULT: "#c2410c",
          bright: "#e8631f",
          deep: "#9a3412",
        },
        hairline: "#e3d9c3",
        brand: {
          violet: "#7c5cff",
          blue: "#3b9bff",
          indigo: "#5b6dff",
          purple: "#9b82ff",
          emerald: "#10b981",
          cyan: "#06b6d4",
          amber: "#f59e0b",
        },
        ink: {
          DEFAULT: "#070a1a",
          900: "#070a1a",
          800: "#0b1024",
          700: "#111734",
          600: "#1b234b",
        },
        lavender: {
          50: "#faf9ff",
          100: "#f3f0ff",
          200: "#e9e4ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(124, 92, 255, 0.35)",
        "glow-lg": "0 0 60px rgba(124, 92, 255, 0.45)",
        "card-dark": "0 10px 30px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7c5cff 0%, #5b6dff 50%, #3b9bff 100%)",
        "radial-glow": "radial-gradient(60% 60% at 50% 0%, rgba(124,92,255,0.18) 0%, transparent 70%)",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-20" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 1.5s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        swaniki: {
          primary: "#7c5cff",
          secondary: "#3b9bff",
          accent: "#5b6dff",
          neutral: "#070a1a",
          "base-100": "#ffffff",
          "base-200": "#faf9ff",
          "base-300": "#f3f0ff",
          "base-content": "#070a1a",
        },
        "swaniki-dark": {
          primary: "#7c5cff",
          secondary: "#3b9bff",
          accent: "#5b6dff",
          neutral: "#ffffff",
          "base-100": "#070a1a",
          "base-200": "#0b1024",
          "base-300": "#111734",
          "base-content": "#ffffff",
        },
      },
    ],
    darkTheme: "swaniki-dark",
    base: true,
    styled: true,
    utils: true,
  },
};

export default config;
