/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Example cyan
        neutral: "#13171F", // faded base
        accent: "#5B5B5B", // Example Amber
        secondary: "#5B5B5B", // Example Purple
      },
    },
  },
  plugins: [require("daisyui")],
};
