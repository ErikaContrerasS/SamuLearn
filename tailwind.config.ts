import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Andawanda
        coral: {
          DEFAULT: "#FF6B6B",
          50: "#FFF1F1",
          100: "#FFE1E1",
          200: "#FFC4C4",
          300: "#FFA0A0",
          400: "#FF8A8A",
          500: "#FF6B6B",
          600: "#F04545",
          700: "#D62E2E",
          800: "#B02323",
          900: "#8A1C1C",
        },
        mustard: {
          DEFAULT: "#F4B942",
          50: "#FEF8EC",
          100: "#FCEECB",
          200: "#F9DE9C",
          300: "#F7CE6D",
          400: "#F4B942",
          500: "#E5A320",
          600: "#C08419",
          700: "#946417",
          800: "#6E4A14",
          900: "#4D330F",
        },
        mint: {
          DEFAULT: "#6FCF97",
          50: "#EEFBF3",
          100: "#D6F6E2",
          200: "#AEEDC7",
          300: "#8AE3AF",
          400: "#6FCF97",
          500: "#45B674",
          600: "#31955C",
          700: "#26744A",
          800: "#1E5A3A",
          900: "#17452D",
        },
        lavender: {
          DEFAULT: "#A78BFA",
          50: "#F5F2FF",
          100: "#EBE4FE",
          200: "#D7C9FD",
          300: "#C1ABFB",
          400: "#A78BFA",
          500: "#8B62F6",
          600: "#7140EE",
          700: "#5D2FCB",
          800: "#4B26A2",
          900: "#3C1F81",
        },
        cream: {
          DEFAULT: "#FFF7E9",
          100: "#FFFDF9",
          200: "#FFF7E9",
          300: "#FFF0D6",
        },
        cocoa: {
          DEFAULT: "#5B3E34",
          50: "#F4EDEA",
          400: "#8A6455",
          600: "#5B3E34",
          800: "#3A2822",
        },
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        body: ["var(--font-baloo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "42% 58% 65% 35% / 45% 40% 60% 55%",
      },
      boxShadow: {
        chunky: "0 6px 0 0 rgba(91,62,52,0.25)",
        "chunky-sm": "0 4px 0 0 rgba(91,62,52,0.25)",
        soft: "0 10px 30px -8px rgba(91,62,52,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        pop: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        wiggle: "wiggle 2.4s ease-in-out infinite",
        pop: "pop 0.35s ease-out",
        sparkle: "sparkle 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
