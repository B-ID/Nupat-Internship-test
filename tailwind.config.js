/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1': '#ffbe34',
        'primary2': '#091242',
        'secondary1': '#f4f4f4',
        'text-paragraph': '#666c89',
        'text-heading': '#1c1f35',
        'primary-gradient': 'bg-gradient-to-r from-[#ffb629] to-[#ffd7a6] ease-linear'
      }
    },
  },
  plugins: [],
}

