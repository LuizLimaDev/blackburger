import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        tablet: "740px",
        laptop: "1280px",
      },
      colors: {
        yellow: {
          "bb-100": "#FFEBBB",
          "bb-200": "#FFDE91",
          "bb-300": "#FFD369",
          "bb-400": "#FEC751",
          "bb-500": "#FDBE43",
        },
        gray: {
          "bb-100": "#F5F7FB",
          "bb-200": "#E9ECF0",
          "bb-300": "#AAADB1",
          "bb-400": "#6C6E71",
          "bb-500": "#2A2C2F",
        },
        green: {
          "bb-100": "#E3F7E7",
          "bb-200": "#BCEAC5",
          "bb-300": "#8EDC9F",
          "bb-400": "#58CE78",
          "bb-500": "#12C359",
        },
        red: {
          "bb-100": "#FFEAEF",
          "bb-200": "#FFCAD4",
          "bb-300": "#F3939D",
          "bb-400": "#EB6776",
          "bb-500": "#F73C55",
        },
      },
      fontFamily: {
        lilita: ["var(--font-lilita)"],
        chilanka: ["var(--font-chilanka)"],
      },
      dropShadow: {
        "bb-1": "1px 1px 1px #000000",
        "bb-2": "2px 2px 2px #000000",
        "bb-3": "0px 3px 3px #000000",
        "bb-4": "0px 4px 4px #000000",
        "bb-white-shadow": ".75px .75px .75px #FFFFFF",
      },
      textShadow: {
        "bb-price":
          "0 3px 1px rgba(255, 255, 255, 1), 0 -3px 1px rgba(255, 255, 255, 1), 3px 0 1px rgba(255, 255, 255, 1), -3px 0 1px rgba(255, 255, 255, 1)",
      },
      backgroundImage: {
        "bb-burger-bg": "url('/products/smoke.svg')",
      },
      animation: {
        loading: "loader 10s linear infinite",
      },
      keyframes: {
        loader: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
