/** @type {import('tailwindcss').Config} */
module.exports = { // Notez module.exports pour CRA
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers JS, JSX, TS, TSX dans src/
    "./public/index.html", // Inclut votre fichier HTML principal
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}