/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        chubbs: {
          dark: '#0a0a0f',
          card: '#111116',
          lime: '#ccff00',
          yellow: '#ffcc00',
        },
      },
    },
  },
  plugins: [],
};
