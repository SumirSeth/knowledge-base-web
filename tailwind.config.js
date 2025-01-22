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
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            code: {
              color: 'inherit',
            },
          },
        },
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
