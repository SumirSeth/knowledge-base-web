<template>
  <Body class="antialiased font-sans bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900" />
  <div class="min-h-screen transition-all duration-500 dark:text-slate-200 relative">
    <!-- <div class="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none"></div> -->
    
    <!-- Header -->
    <header class="sticky top-0 z-50">
      <div class="absolute inset-0 backdrop-blur-md bg-white/70 dark:bg-slate-950/70"></div>
      <div class="relative max-w-2xl mx-auto flex justify-between items-center px-6 py-4">
        <NuxtLink to="/" class="group flex items-center space-x-3">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-90 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img alt="Logo" src="/favicon.png" class="relative h-9 w-9 rounded-lg" />
          </div>
          <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Knowledge Base</span>
        </NuxtLink>
        
        <div class="flex items-center space-x-4">
          <button 
            @click="toggleDarkMode" 
            class="p-2.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300"
          >
          <span v-if="isDark" class="text-lg">◐</span>
          <span v-else class="text-lg">◑</span>
          </button>
          <NuxtLink 
            to="/search"
            class="px-4 py-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            Search
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative max-w-2xl mx-auto px-6 py-16">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 dark:border-slate-800 mt-24">
      <div class="max-w-4xl mx-auto px-6 py-12">
        <div class="flex flex-col items-center space-y-4">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            © {{ new Date().getFullYear() }} Knowledge Base by <a href="https://github.com/sumirseth"><i><u>Sumir Seth</u></i></a>
          </p>
          <div class="flex space-x-6">
            <NuxtLink to="/about" class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">About</NuxtLink>
            <NuxtLink to="/archive" class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">Archive</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { isDark, toggleDarkMode } = useDarkMode()

onMounted(() => {
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
})
</script>

<style>
@import url('https://rsms.me/inter/inter.css');

/* .bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
} */

::selection {
  @apply bg-blue-500/20;
}

html {
  scroll-behavior: smooth;
}

.prose {
  @apply max-w-none;
}

.prose a {
  @apply text-blue-600 dark:text-blue-400 no-underline hover:underline decoration-2 underline-offset-2 transition-all duration-500;
}

.prose h1 {
  @apply transition-all duration-500;
}

body {
  font-family: 'Inter', sans-serif;
}

::-webkit-scrollbar {
  width: 0.7rem;
}

::-webkit-scrollbar-track {
  background: rgba(235, 235, 235, 0);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(26, 31, 61);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(83, 192, 235);
}
</style>
