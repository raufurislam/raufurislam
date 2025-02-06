/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Example cyan
        neutral: "#13171F", // faded base
        secondary: "#8B8B8B", // Example Purple
        accent: "#5B5B5B", // faded 3
      },
    },
  },
  plugins: [require("daisyui")],
};
