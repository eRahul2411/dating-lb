/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#FF4C4C',
        'light-red': '#FF7373',
        'dark-red': '#CC0000',
        'primary-pink': '#FF69B4',
        'light-pink': '#FFC0CB',
        'dark-pink': '#C71585',
        'soft-beige': '#FFF5E1',
        'warm-beige': '#F4D1AE',
        'light-brown': '#D2B48C',
        'dark-brown': '#8B4513',
        'light-blue': '#ADD8E6',
        'primary-blue': '#87CEEB',
        'dark-blue': '#4682B4',
        'light-purple': '#D8BFD8',
        'primary-purple': '#9370DB',
        'dark-purple': '#8A2BE2',
      },
    },
  },
  plugins: [],
}

