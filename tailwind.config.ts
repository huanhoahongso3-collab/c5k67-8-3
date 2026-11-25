import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        sway: { "0%,100%": { transform: "rotate(-4deg)" }, "50%": { transform: "rotate(4deg)" } },
        "sway-slow": { "0%,100%": { transform: "rotate(-2.5deg)" }, "50%": { transform: "rotate(2.5deg)" } },
        flap: { "0%,100%": { transform: "scaleX(1)" }, "50%": { transform: "scaleX(0.35)" } },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(30px,-20px) rotate(8deg)" },
          "100%": { transform: "translate(0,0) rotate(0deg)" },
        },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        sway: "sway 3s ease-in-out infinite",
        "sway-slow": "sway-slow 5s ease-in-out infinite",
        flap: "flap 0.7s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
