import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#AD1FEA",
      blue: "#4661E6",
      "light-blue": "#62BCFA",
      peach: "#F49F85",
      black: "#373F68",
      "light-black": "#3A4374",
      gray: "#647196",
      white: "#FFFFFF",
      "dark-white": "#F2F4FF",
      "medium-white": "#F7F8FD",
    },
    fontFamily: {
      sans: ["Jost", "Helvetica", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      h1: [
        "1.5rem",
        {
          lineHeight: "2.2rem",
          letterSpacing: "-0.25em",
          fontWeight: "700",
        },
      ],
      h2: [
        "1.25rem",
        {
          lineHeight: "1.8rem",
          letterSpacing: "-0.25em",
          fontWeight: "700",
        },
      ],
      h3: [
        "1.1rem",
        {
          lineHeight: "1.6rem",
          letterSpacing: "-0.25em",
          fontWeight: "700",
        },
      ],
    h4: [
      "0.8rem",
      {
        lineHeight: "1.6rem",
        letterSpacing: "-0.25em",
        fontWeight: "700",
      },
    ],
    b1: [
      "1em",
      {
        lineHeight: "1.6rem",
        letterSpacing: "-0.25em",
        fontWeight: "400",
      },
    ],
    b2: [
      "0.9em",
      {
        lineHeight: "1.3rem",
        letterSpacing: "-0.25em",
        fontWeight: "400",
      },
    ],
    b3: [
      "0.8rem",
      {
        lineHeight: "1.1rem",
        letterSpacing: "-0.25em",
        fontWeight: "400",
      },
    ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
