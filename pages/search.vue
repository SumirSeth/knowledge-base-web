<template>
  <Title>Knowledge Base - Search</Title>
  <div class="space-y-6">
    <!-- Search Header -->
    <div>
      <h1 class="text-3xl lg:text-5xl font-bold">Search Knowledge Base</h1>
      <p class="mt-2 text-slate-600 dark:text-slate-400">
        Search through all content using tags
      </p>
    </div>

    <!-- Search Input -->
    <div class="flex flex-wrap gap-2">
      <div class="relative flex-1 max-w-md">
        <input 
          type="text" 
          placeholder="Enter tags (e.g. maths, coding)" 
          v-model="tags" 
          @keyup.enter="fetchPosts"
          class="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 outline-none transition-all"
        >
      </div>
      <button 
        @click="fetchPosts"
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
      >
        Search
      </button>
      <button 
        @click="clearSearch"
        class="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors"
      >
        Clear
      </button>
    </div>

    <!-- Search Tips -->
    <div class="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm">
      <h2 class="font-semibold mb-2">Search Tips</h2>
      <ul class="space-y-1 text-sm text-slate-600 dark:text-slate-400">
        <li>• Search videos with tags: <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">video</code> or <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">videos</code></li>
        <li>• Search research with: <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">research</code> or <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">papers</code></li>
        <li>• Search books with: <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">book</code> or <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">books</code></li>
        <li>• Search notes with: <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">note</code> or <code class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">notes</code></li>
      </ul>
    </div>

    <!-- Results -->
    <div v-if="success" class="space-y-4">
      <h2 class="text-xl font-bold">Search Results</h2>
      <div class="space-y-3">
        <NuxtLink 
          v-for="post in fetchedPost" 
          :key="post.link"
          :to="post.link"
          class="block p-4 bg-white/50 dark:bg-slate-800/50 hover:bg-white/70 dark:hover:bg-slate-800/70 rounded-lg backdrop-blur-sm transition-all"
        >
          <h3 class="text-lg font-medium text-blue-600 dark:text-blue-400">{{ post.title }}</h3>
          <p v-if="post.description" class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ post.description }}</p>
        </NuxtLink>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="err" class="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
      No results found. Try different tags.
    </div>
  </div>
</template>

<script lang="ts" setup>
const err = ref(false)
const tags = ref("")
const success = ref(false)
const { data: posts } = await useAsyncData('posts', () => queryContent('').find())
const fetchedPost = ref([])

const clearSearch = () => {
  tags.value = ''
  success.value = false
  err.value = false
  fetchedPost.value = []
}

const fetchPosts = () => {
  tags.value = tags.value.trim()
  fetchedPost.value = []
  for (let i in posts.value) {
    let t = posts.value[i].tags

    
    if (posts.value[i]._dir === 'videos'){
      if(!t.includes('video')){
      t.push('video')
      t.push('videos')
      }
    }

    if (posts.value[i]._dir === 'research'){
      if(!t.includes('research')){
      t.push('research')
      t.push('research papers')
      t.push('research paper')
      t.push('paper')
      t.push('papers')
      }
    }

    if (posts.value[i]._dir === 'books'){
      if(!t.includes('book')){
      t.push('book')
      t.push('books')
      }
    }

    if (posts.value[i]._dir === 'notes'){
      if(!t.includes('note')){
      t.push('note')
      t.push('notes')
      }
    }

    
    for (let j in t) {
      if (String(t[j]).toLowerCase() === tags.value.toLowerCase()){
        fetchedPost.value.push({"title" : posts.value[i].title, "description" : posts.value[i].description, "link" : posts.value[i]._file?.slice(0, -3)})
        success.value = true
        err.value = false
      }
    }
  }
  if (fetchedPost.value.length === 0){
    err.value = true
    success.value = false
  }
}
</script>

<style>

</style>