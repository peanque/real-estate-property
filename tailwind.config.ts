import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        tablet: '960px',
        desktop: '1248px',
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        basewhite: '#FAFAFA',
        darkjungle: '#0B1D27',
        dimgray: '#656E73',
        lightsilver: '#D9D9D9',
      },
    },
  },
  plugins: [],
} satisfies Config;
