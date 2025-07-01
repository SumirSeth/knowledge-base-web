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

  return {
    isDark,
    toggleDarkMode,
  }
}