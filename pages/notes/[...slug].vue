<script lang="ts" setup>
import { computed } from 'vue' // Make sure computed is imported
const route = useRoute()
const isClient = ref(false)

const config = useRuntimeConfig()
const correctPassword = config.public.PAGE_PASSWORD

// Only run password check on client side
onMounted(() => {
  isClient.value = true
})

const checkPassword = async () => {
    // try {
    //     const response = await useFetch(`https://ontological-debugging.vercel.app/api/getPassKB`, {
    //         method: 'POST',
    //         body: {
    //             password: password.value
    //         },
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
        
    //     if (response.data.value) {
    //         allowed.value = true
    //     }
    // } catch (error) {
    //     console.error('Password verification failed:', error)
    // }

    if (password.value === correctPassword) {
        allowed.value = true
    }
}

const password = ref('')
const allowed = ref(false)

// Computed property for the content path
const contentPath = computed(() => {
  if (route.params.slug && Array.isArray(route.params.slug)) {
    // Assuming your content files are in 'content/notes/...'
    // and route.params.slug is an array of segments after '/notes/'
    return `notes/${route.params.slug.join('/')}`
  }
  // Fallback or error handling if route.params.slug is not as expected
  // This might lead to a "not found" if slug is undefined/incorrect
  console.warn('Could not determine content path from route:', route.params.slug)
  return '' 
})

const isProtectedSlug = computed(() => {
  const slug = route.params.slug[0];
  return slug === 'second-year-plan' || slug === 'pixaverse-data';
});

</script>

<template>
    <div v-if="!isProtectedSlug">
        <ContentDoc :key="contentPath" :path="contentPath" class="prose prose-sm lg:prose-base dark:prose-invert">
            <template #not-found>
                <h1>Document not found (Unprotected)</h1>
                <p>The document at path "{{ contentPath }}" could not be found.</p>
            </template>
        </ContentDoc>
    </div>
    <div v-else-if="isClient"> <!-- This block handles protected slugs -->
        <div v-if="!allowed" class="password-prompt-container">
            <p class="text-lg font-semibold mb-2">This content is protected.</p>
            <p class="mb-4">Please enter the password to continue:</p>
            <input 
                class="dark:bg-slate-700 dark:text-white bg-slate-100 text-black rounded-lg p-2 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                type="password" 
                v-model="password"
                @keyup.enter="checkPassword"
                placeholder="Password"
            />
            <button 
                class="p-2 dark:bg-blue-600 dark:text-white bg-blue-500 text-white m-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
                @click="checkPassword"
            >
                Submit
            </button>
        </div>
        <ContentDoc 
            v-else 
            :key="contentPath + '-allowed'" 
            :path="contentPath" 
            class="prose prose-sm lg:prose-base dark:prose-invert"
        >
            <template #not-found>
                <h1>Document not found (Protected)</h1>
                <p>The document at path "{{ contentPath }}" could not be found. Please check the file exists and the path is correct.</p>
                <p>Content file expected at: <code>content/{{ contentPath }}.md</code></p>
            </template>
        </ContentDoc>
    </div>
    <div v-else>
        <!-- Optional: SSR fallback for protected pages before client-side JS loads -->
        <p>Loading...</p>
    </div>
</template>

<style>

</style>