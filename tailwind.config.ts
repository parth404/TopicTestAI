import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lime: {
          "50": "hsl(78, 92%, 95%)",
          "100": "hsl(80, 89%, 89%)",
          "200": "hsl(81, 88%, 80%)",
          "300": "hsl(82, 85%, 67%)",
          "400": "hsl(83, 78%, 55%)",
          "500": "hsl(84, 81%, 44%)",
          "600": "hsl(85, 85%, 35%)",
          "700": "hsl(86, 78%, 27%)",
          "800": "hsl(86, 69%, 23%)",
          "900": "hsl(88, 61%, 20%)",
          "950": "hsl(89, 80%, 10%)",
        },
        slate: {
          "50": "hsl(210, 40%, 98%)",
          "100": "hsl(210, 40%, 96%)",
          "200": "hsl(214, 32%, 91%)",
          "300": "hsl(213, 27%, 84%)",
          "400": "hsl(215, 20%, 65%)",
          "500": "hsl(215, 16%, 47%)",
          "600": "hsl(215, 19%, 35%)",
          "700": "hsl(215, 25%, 27%)",
          "800": "hsl(217, 33%, 17%)",
          "900": "hsl(222, 47%, 11%)",
          "950": "hsl(229, 84%, 5%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
