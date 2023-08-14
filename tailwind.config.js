/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "upsel-black": "#000000",
        "upsel-light-black": "#1f1f1f",
        "upsel-purple": "#372772",
        "upsel-light-purple": "#925ff0",
        "upsel-white": "#ffffff",
        "upsel-light-grey": "#D9D9D9",
        "upsel-grey": "#E6E6E6",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
    fontFamily: {
      custom: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
