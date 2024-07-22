import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        lightGrey: "#FAFAFA",
        darkGrey: "#333333",
        gray: "#737373",
        purple: "#633CFF",
        gray2: "#D9D9D9",
        grayy: "#888888",
      },
    },
  },
  plugins: [],
};
export default config;
