/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    // Substituindo as cores do tailwindcss
    colors: {
      transparent: 'transparent',
      'black': '#18181C',
      'ciano': '#61DAFB',
      'acqua': '#81D8F7',
      gray: {
        600: '#7C7C8A',
        900: '#202024',
      },
      'white-300': '#E1E1E1'
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 32,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
