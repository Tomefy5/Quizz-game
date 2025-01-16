/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclure les fichiers React
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // Activer DaisyUI
  ],
  daisyui: {
    themes: [
      "light",  // Utiliser un thème clair
      // "dark",   // thème sombre
      // "cupcake",  // thème cupcake
      // "bumblebee"  // thème bumblebee
    ],
  },
};
