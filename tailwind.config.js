/** @type {import('tailwindcss').Config} */
export default {
  content: ['/pages/index.vue'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Add dark mode colors
        dark: {
          bg: '#000',
          text: '#ffffff',
          link: '#60a5fa',
          secondary: '#9ca3af'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

