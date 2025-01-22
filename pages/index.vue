<template>
  <Title>Knowledge Base</Title>
  <div class="dark:text-dark-text max-w-4xl mx-auto">
    <!-- Section Grid -->
    <div class="grid gap-6  lg:gap-10">
      <!-- Videos Section -->
      <section class="space-y-4 p-4 bg-white/30 backdrop-blur-sm dark:bg-slate-800/20 brightness-110 rounded-xl shadow-md dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black hover:shadow-2xl transition-shadow duration-300">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl lg:text-4xl font-bold">/videos</h2>
          <button 
            @click="videoShow = !videoShow"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span class="text-lg">{{ videoShow ? '↑' : '↓' }}</span>
          </button>
        </div>
        
        <div v-if="videoShow" class="space-y-6">
          <article v-for="post in videoPosts" :key="post.slug" 
            class="p-4 rounded-lg outline-dashed outline-1 outline-offset-1 dark:outline-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all hover:shadow-xl">
            <div class="flex justify-between items-start">
              <a :href="post._file?.slice(0, -3)" 
                class="text-lg lg:text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ post.title }}
              </a>
              <a :href="post.video" 
                class="text-sm text-slate-500 hover:text-blue-500 transition-colors" 
                target="_blank">
                Watch ↗
              </a>
            </div>
            <p class="mt-2 text-slate-600 dark:text-slate-300">{{ post.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="tag in post.tags" :key="tag"
                class="px-2 py-1 text-xs rounded-full bg-stone-300/70 dark:bg-slate-700">
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- Books Section -->
      <section class="space-y-4 p-4 bg-white/30 backdrop-blur-sm dark:bg-slate-800/20 brightness-110 rounded-xl shadow-md dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black hover:shadow-2xl transition-shadow duration-300">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl lg:text-4xl font-bold">/books</h2>
          <button @click="bookShow = !bookShow"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span class="text-lg">{{ bookShow ? '↑' : '↓' }}</span>
          </button>
        </div>
        
        <div v-if="bookShow" class="space-y-6">
          <article v-for="post in bookPosts" :key="post.slug" 
            class="p-4 rounded-lg outline-dashed outline-1 outline-offset-1 dark:outline-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all hover:shadow-xl">
            <div class="flex justify-between items-start">
              <a :href="post._file?.slice(0, -3)" 
                class="text-lg lg:text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ post.title }}
              </a>
            </div>
            <p class="mt-2 text-slate-600 dark:text-slate-300">{{ post.description }}</p>
            <p class="text-sm text-slate-500">Author: <span v-for="auth in post.author">{{ auth }}<span v-if="auth !== post.author[post.author.length - 1]">, </span></span></p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="tag in post.tags" :key="tag"
                class="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700">
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- Research Section -->
      <section class="space-y-4 p-4 bg-white/30 backdrop-blur-sm dark:bg-slate-800/20 brightness-110 rounded-xl shadow-md dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black hover:shadow-2xl transition-shadow duration-300">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl lg:text-4xl font-bold">/research</h2>
          <button @click="researchShow = !researchShow"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span class="text-lg">{{ researchShow ? '↑' : '↓' }}</span>
          </button>
        </div>
        
        <div v-if="researchShow" class="space-y-6">
          <article v-for="post in researchPosts" :key="post.slug" 
            class="p-4 rounded-lg outline-dashed outline-1 outline-offset-1 dark:outline-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all hover:shadow-xl">
            <div class="flex justify-between items-start">
              <a :href="post._file?.slice(0, -3)" 
                class="text-lg lg:text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ post.title }}
              </a>
              <span class="text-sm text-slate-500">{{ post.date }}</span>
            </div>
            <p class="mt-2 text-slate-600 dark:text-slate-300">{{ post.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="tag in post.tags" :key="tag"
                class="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700">
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- Notes Section -->
      <section class="space-y-4 p-4 bg-white/30 backdrop-blur-sm dark:bg-slate-800/20 brightness-110 rounded-xl shadow-md dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black hover:shadow-2xl transition-shadow duration-300">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl lg:text-4xl font-bold">/notes</h2>
          <button 
            @click="noteShow = !noteShow"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span class="text-lg">{{ noteShow ? '↑' : '↓' }}</span>
          </button>
        </div>

        <div v-if="noteShow" class="space-y-6">
          <!-- Philosophy Subsection -->
          <div class="ml-4 space-y-4 p-4 bg-white/30 backdrop-blur-sm dark:bg-slate-800/10 brightness-110 rounded-xl shadow-md dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <h3 class="text-xl lg:text-3xl font-bold">/philosophy</h3>
              <button 
                @click="philosophyShow = !philosophyShow"
                class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span class="text-lg">{{ philosophyShow ? '↑' : '↓' }}</span>
              </button>
            </div>

            <div v-if="philosophyShow" class="space-y-4">
              <article v-for="post in philosophyPosts" :key="post.slug" 
                class="p-4 rounded-lg outline-dashed outline-1 outline-offset-1 dark:outline-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-800/70 shadow-lg transition-all">
                <a :href="post._file?.slice(0, -3)" 
                  class="block text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {{ post.title }}
                </a>
                <p class="mt-2 text-slate-600 dark:text-slate-300">{{ post.description }}</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span v-for="tag in post.tags" :key="tag"
                    class="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700">
                    {{ tag }}
                  </span>
                </div>
              </article>
            </div>
          </div>

          <!-- Regular Notes -->
          <div class="space-y-4">
            <article v-for="post in notePosts" :key="post.slug" 
              class="p-4 rounded-lg outline-dashed outline-1 outline-offset-1 dark:outline-none bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all hover:shadow-xl">
              <a :href="post._file?.slice(0, -3)" 
                class="block text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ post.title }}
              </a>
              <p class="mt-2 text-slate-600 dark:text-slate-300">{{ post.description }}</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span v-for="tag in post.tags" :key="tag"
                  class="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700">
                  {{ tag }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>

const videoShow = ref(true)
const bookShow = ref(true)
const noteShow = ref(true)
const researchShow = ref(true)
const philosophyShow = ref(true)
const archiveShow = ref(true)

onMounted(() => {
  setTimeout(() => {
    videoShow.value = false
    bookShow.value = false
    noteShow.value = false
    researchShow.value = false
    philosophyShow.value = false
    archiveShow.value = false
  }, 10)
})


const { data: videoPosts } = await useAsyncData('videos', () => queryContent('videos').find())
const { data: bookPosts } = await useAsyncData('books', () => queryContent('books').find())
const { data: researchPosts } = await useAsyncData('research', () => queryContent('research').find())
const { data: notePosts } = await useAsyncData('notes', () => queryContent('notes').find())
const { data: philosophyPosts } = await useAsyncData('philosophy', () => queryContent('notes/philosophy').find())

// const archivePosts = allPosts.value?.filter(post => post._dir==='archive')
</script>

<style>

</style>