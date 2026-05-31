import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5ECE7",
        ink: "#171717",
        paper: "#FFF8F0",
        lemon: "#F7D859",
        mint: "#7DE2A6",
        coral: "#FF8A70",
        sky: "#8DCBFF",
      },
      boxShadow: {
        neo: "8px 8px 0px #171717",
        neoSm: "4px 4px 0px #171717",
        neoLg: "12px 12px 0px #171717",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui"],
        sans: ["var(--font-sans)", "system-ui"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
