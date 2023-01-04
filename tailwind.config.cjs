/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: {
        DEFAULT: "#F3F2F7",
        secondary: "#FAF0F3",
        alt: "#F2F6F7",
      },
      dark: {
        DEFAULT: "black",
        secondary: "#FAF0F3",
        alt: "#F2F6F7",
      },
      primary: {
        DEFAULT: "#685C99",
        40: "#F6F4F3",
        10: "#E8E6EF",
      },
      secondary: {
        100: "#1f0a11",
        90: "#3d1421",
        80: "#5c1f31",
        70: "#7a2941",
        60: "#d03969",
        DEFAULT: "#b83d62",
        40: "#F183A8",
        30: "#d27494",
        20: "#dc93ab",
        10: "#faf0f3",
      },
      alt: {
        DEFAULT: "#fcba04",
        40: "#00e8fc",
        30: "#c42021",
        20: "#ebc2ce",
        10: "#faf0f3",
      },
      "light-primary-10": "dark",
      "light-primary-main": "#E8E6F0",
      "light-secondary-40": "dark",
      "light-secondary-main": "dark",
      "light-gray-10": "#F6F4F3",
      "light-gray-20": "#F6F4F3",
      "light-text-60": "#C85676",
      "light-text-70": "dark",
      "light-text-80": "dark",
      "light-text-90": "dark",
    },
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#593652",
        "primary-100": "#ffe1e0",
        "primary-300": "#ffa6a3",
        "primary-500": "#1BDAD7",
        "secondary-400": "#ffcd5b",
        "secondary-500": "#ffc132",
      },
      backgroundImage: (theme) => ({
        gradient:
          " radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 62%);",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
