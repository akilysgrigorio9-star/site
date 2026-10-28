import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#173D32",
        deep: "#102A24",
        sand: "#F4EFE5",
        warm: "#FFFCF7",
        terracotta: "#B66F4D",
        gold: "#C9A76A",
        ink: "#252822",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 7vw + 0.5rem, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem, 4vw + 0.5rem, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.375rem, 1.5vw + 0.9rem, 2rem)", { lineHeight: "1.2" }],
      },
      scrollMargin: { header: "5rem" },
    },
  },
  plugins: [],
};

export default config;
