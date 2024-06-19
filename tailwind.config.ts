import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mpurple: {
          50: "#FFE6E6",
          100: "#E1AFD1",
          200: "#AD88C6",
          300: "#7469B6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
