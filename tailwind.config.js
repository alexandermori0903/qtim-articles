/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#ffffff",
          200: "#f3f3f3",
          300: "#868686",
          400: "#232323",
          500: "#101010",
        },
        main: {
          100: "#9effbf",
          200: "#7941a7",
          300: "#e2beff",
          400: "#1059c8",
        },
      },
      fontFamily: {
        ttcommons: ["TTCommons", "sans-serif"],
      },
    },
  },
  plugins: [],
};
