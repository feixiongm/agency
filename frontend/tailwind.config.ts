import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1739",
        muted: "#56637a",
        line: "#dce4f0",
        brand: { 50: "#eef6ff", 100: "#d9ebff", 500: "#2478ff", 600: "#1264e8", 700: "#0d4fbd" },
      },
      boxShadow: { card: "0 18px 50px -28px rgba(15, 38, 76, 0.28)" },
    },
  },
  plugins: [],
};

export default config;
