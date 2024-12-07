/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",            // Se você usar um arquivo HTML
    "./src/**/*.{js,jsx,ts,tsx}", // Para escanear todos os arquivos JS/TS
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-glow': '0px 1px 4px 0px rgba(40, 238, 237, 0.4)', // sombra customizada
      },
      colors: {
        'custom-cyan': '#28EEED', // Cor personalizada para consistência
      },
    },
  },
};