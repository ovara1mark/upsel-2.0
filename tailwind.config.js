/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-us-bg": "url('./assets/Contact us desktop-bg.png')",
        "contact-us-tablet-bg": "url('./assets/Contact us Tablet-bg.png')",
        "contact-us-mob-bg": "url('./assets/Contact us-bg.png')",
      },
      colors: {
        "upsel-black": "#000000",
        "upsel-black-2": "#262626",
        "upsel-light-black": "#1f1f1f",
        "upsel-purple": "#372772",
        "upsel-light-purple": "#925ff0",
        "upsel-light-border-purple": "#A9A2C2",
        "upsel-white": "#ffffff",
        "upsel-light-grey": "#D9D9D9",
        "upsel-grey": "#E6E6E6",
        "upsel-footer-grey": "#EBE9F1",
        "upsel-transparent-purple": "#372772f5",
        "upsel-dark-blue": "#191233",
        "upsel-dark-purple": "#141414",
        "upsel-yellow": "#D7C190",
        "upsel-card-black": "#454545",
        "upsel-blue": "#B3FAFF",
        "upsel-gold": "#D7C190",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
        marquee3: "marquee 5s linear infinite",
        marquee4: "marquee 5s linear infinite",
        scrollLeft: "scrollLeft 20s linear infinite",
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
        marquee3: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee4: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(0%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    fontFamily: {
      custom: ["DM Sans", "sans-serif"],
      customTwo: ["Montserrat", "sans-serif"],
    },
    screens: {
      ym: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1057px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
