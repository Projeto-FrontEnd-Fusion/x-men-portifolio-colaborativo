/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos dentro de subdiretórios
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1920px', // Adiciona um novo breakpoint para telas de 1920px
      },
    },
  },
  plugins: [], // Mantenha plugins fora do tema
};
