/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1b3c83",
        "secondary-blue": "#0d214d",
      },
    },
  },
  plugins: [],
};
