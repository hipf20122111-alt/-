import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Saudi Lavender palette — inspired by ceremonial carpets
        lavender: {
          50: "#F8F7FF",
          100: "#EFEAFB",
          200: "#DCD0F4",
          300: "#C2AEEA",
          400: "#A48BDD",
          500: "#7F67B2", // primary
          600: "#6A52A0",
          700: "#553F84",
          800: "#3F2E63",
          900: "#2A1F44",
        },
        navy: {
          DEFAULT: "#0A2540",
          50: "#E8EEF6",
          100: "#C7D4E8",
          200: "#8FA9D1",
          300: "#5A7FB8",
          400: "#2F5894",
          500: "#0A2540",
          600: "#081E33",
          700: "#061727",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E5",
          100: "#F4E5A8",
          200: "#EBD069",
          300: "#D4AF37",
          400: "#B6951F",
          500: "#8C7117",
        },
        cream: "#F8F7FF",
        ink: "#0A2540",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-ibm-arabic)", "Tajawal", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "lavender-gradient":
          "linear-gradient(135deg, #7F67B2 0%, #553F84 50%, #2A1F44 100%)",
        "soft-lavender":
          "linear-gradient(180deg, #F8F7FF 0%, #EFEAFB 100%)",
        "gold-shine":
          "linear-gradient(135deg, #D4AF37 0%, #F4E5A8 50%, #D4AF37 100%)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(127, 103, 178, 0.10)",
        glow: "0 0 40px rgba(127, 103, 178, 0.25)",
        gold: "0 8px 24px rgba(212, 175, 55, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
