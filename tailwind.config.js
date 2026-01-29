/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // fichier HTML principal
    "./src/**/*.{js,jsx,ts,tsx}"  // tous vos fichiers React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // pour activer le dark mode si nécessaire
}
