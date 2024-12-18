import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-black": "#333333",
        "base-gray-1": "#646464",
        "base-gray-2": "#979797",
        "base-gray-3": "#CACACA",
        "base-gray-4": "#F2F2F2",
        "base-gray-5": "#F5F5F5"
      },
    },
  },
  plugins: [],
} satisfies Config;
