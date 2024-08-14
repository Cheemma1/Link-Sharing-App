import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
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
        lightpurple: "#EFEBFF",
        gray2: "#D9D9D9",
        grayy: "#888888",
        midGray: "#EEEEEE",
        github: " #1A1A1A",
        twitter: "#43B7E9",
        linkedin:"#2D68FF",
        youtube: "#EE3939",
        facebook: "#2442AC",
        twitch: "#EE3FC8",
        codewar: "#8A1A50",
        freecodecamp: "#302267",
        gitlab: "#EB4925",
        hashnode: "#0330D1",
        stackoverflow: "#EC7100",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
export default config;
