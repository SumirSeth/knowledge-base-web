<template>
  <div class="min-h-screen transition-colors duration-200 dark:bg-dark-bg dark:text-dark-text">
    <div class="flex justify-between items-center p-4">
      <p>
        <a href="/">
          <img alt="Nuxt logo" src="/favicon.png" style="height: 7vh;" class="rounded-md"/>
          <p class="opacity-70 italic font-thin">(click to go home)</p>
        </a>
      </p>
      <div class="flex items-center gap-4">
        <button @click="toggleDarkMode" class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <span v-if="isDark" class="text-yellow-500">🌙</span>
          <span v-else class="text-yellow-500">☀️</span>
        </button>
        <a href="/search">
          <span class="text-gray-800 dark:text-gray-200 font-semibold italic underline underline-offset-2 lg:text-base text-sm">
            Click to search in Knowledge base 
            <svg class="svg-icon search-icon h-5 lg:h-7" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g class="search-path" fill="none" stroke="currentColor">
                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/>
                <circle cx="8" cy="8" r="7"/>
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <NuxtPage class="m-1"/>
  </div>
</template>

<script setup>
const { isDark, toggleDarkMode, initDarkMode } = useDarkMode()

// Initialize dark mode on client side
onMounted(() => {
  initDarkMode()
})
</script>
