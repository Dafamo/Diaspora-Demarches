import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F3864",
          hover: "#2E5A9E",
        },
        accent: {
          DEFAULT: "#C8753A",
          hover: "#E89858",
        },
        success: "#4FB6A1",
        background: "#FAF7F2",
        "text-primary": "#1A1A1A",
        "text-secondary": "#4A4A4A",
        border: "#E8E0D5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(31, 56, 100, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
