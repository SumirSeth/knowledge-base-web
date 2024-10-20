/** @type {import('tailwindcss').Config} */
export default {
  content: ['/pages/index.vue'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

