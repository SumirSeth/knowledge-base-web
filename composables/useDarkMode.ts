export const useDarkMode = () => {
  const isDark = useState('darkMode', () => false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark.value ? 'dark' : 'light')
  }

  // Initialize dark mode based on localStorage or system preference
  const initDarkMode = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      }
    }
  }

  return {
    isDark,
    toggleDarkMode,
    initDarkMode
  }
} 