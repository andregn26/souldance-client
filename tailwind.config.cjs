/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: {
        //previus Light
        DEFAULT: "#EBF2FA",
        blue: "#E6EAEF",
        purple: "#FAEBFE", //! primary color white shade
      },
      black: {
        100: "#0A0A0B",
        90: "#131315",
        80: "#1D1D20",
        70: "#27272B",
        60: "#303036",
        main: "#3A3A41",
        white: "#EAEAEC",
      },
      purple: {
        darker: "#D764F7",
        darker1: "#6C0788",
        main: "#DC77F8",
        lighter: "#eac6ea",
        lighter1: "#DF94F7",
        white: "#FAEBFE",
      },
      blue: {
        darker: "#42c6ea",
        main: "#1EAFC2",
        lighter: "#eac6ea",
        alt1: "#42c6ea",
      },
      secondary: {
        100: "#1f0a11",
        90: "#FFF9EC",
        80: "#5c1f31",
        70: "#7a2941",
        60: "#9FA0C3",
        main: "#b83d62",
        40: "#F183A8",
        30: "#d27494",
        20: "#dc93ab",
        10: "#faf0f3",
      },
      alt: {
        DEFAULT: "#B709EC", //Main Button
        40: "#00e8fc", //
        30: "#c42021",
        20: "#ebc2ce",
        10: "#faf0f3",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
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
      animation: {
        tilt: "tilt 5s infinite, linear",
      },
      keyframes: {
        tilt: {
          "0, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: " rotate(5deg)",
          },
          "75%": {
            transform: " rotate(-5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
