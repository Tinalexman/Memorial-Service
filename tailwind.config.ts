import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-10": "#f6ebd7",
        "primary-20": "#f1debd",
        "primary-30": "#eace9c",
        "primary-40": "#e2be7b",
        "primary-50": "#dbad5a",
        "primary-base": "#d49d39",
        "primary-60": "#b18330",
        "primary-70": "#8d6926",
        "primary-80": "#6a4f1d",
        "primary-90": "#473413",
        "primary-100": "#2a1f0b",

        "secondary-10": "#e7d5d7",
        "secondary-20": "#d7b9bc",
        "secondary-30": "#c3969b",
        "secondary-40": "#ae737a",
        "secondary-50": "#9a5058",
        "secondary-base": "#862d37",
        "secondary-60": "#70262e",
        "secondary-70": "#591e25",
        "secondary-80": "#43171c",
        "secondary-90": "#2d0f12",
        "secondary-100": "#1b090b",

        "tertiary-10": "#d7d7d7",
        "tertiary-20": "#bcbcbc",
        "tertiary-30": "#9b9b9b",
        "tertiary-40": "#7a7a7a",
        "tertiary-50": "#585858",
        "tertiary-base": "#373737",
        "tertiary-60": "#2e2e2e",
        "tertiary-70": "#252525",
        "tertiary-80": "#1c1c1c",
        "tertiary-90": "#121212",
        "tertiary-100": "#0b0b0b",
      },
      screens: {
        sm: {
          max: "400px",
        },

        md: {
          max: "768px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
