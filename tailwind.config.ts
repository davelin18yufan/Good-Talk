import typography from "@tailwindcss/typography"
import exp from "constants"

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  blocklist: [
    "duration-[.16s]",
    "ease-[cubic-bezier(.4,0,.2,1)]",
    "after:ease-[cubic-bezier(0.65_0.05_0.36_1)]",
    "active:duration-[25ms]",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
<<<<<<< HEAD
=======
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        logo: "url('/logo.svg')",
      },
>>>>>>> feature/mainPage_articleList_Footer
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        primary: {
          light: "#CAC6BD",
          dark: "#030712",
        },
        secondary: {
          light: "#BB9A88",
          dark: "#393E4",
        },
        tertiary: {
          light: "#B5A8A0",
          dark: "#222831",
        },
        invert: {
          light: "#0f172a",
          dark: "#EEEEEE",
        },
        btn: {
          light: "#979D6E",
          dark: "#FFD369",
        },
        danger: {
          light: "#fda4af",
          dark: "#e11d48",
        },
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      transitionTimingFunction: {
        "button-in": "cubic-bezier(0.785,0.135,0.15,0.86)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "progress-wave": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "progress-wave": "progress-wave 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors, typography],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ":root": newVars,
  })
}
