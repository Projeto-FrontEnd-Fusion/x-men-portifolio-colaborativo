/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",            // Se você usar um arquivo HTML
    "./src/**/*.{js,jsx,ts,tsx}", // Para escanear todos os arquivos JS/TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
