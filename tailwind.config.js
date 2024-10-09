const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        belge: "#f6f3e4",
        orange: "#ff5b59",
        orangeClair: "#ff6e6c",
        orangeFonce: "#ff3d3a",
        bleu: "#38b6ff",
        bleuFonce: "#00a1ff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
