/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
};
