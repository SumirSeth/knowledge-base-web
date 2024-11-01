<template>
  <div>
    <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1">Enter a tag: </h1>
    <p class="p-1">Enter a tag, for example: <code>maths</code> or <code>clothing</code></p>
    <p class="p-1">You can search in the video(s) category by adding <code>video</code> or <code>videos</code> to your search.</p>
    <p class="p-1">You can search in the research category by adding <code>research</code> or <code>research papers</code> to your search.</p>
    <p class="p-1">You can search in the books category by adding <code>book</code> or <code>books</code> to your search.</p>
    <p class="p-1">You can search in the notes category by adding <code>note</code> or <code>notes</code> to your search.</p>
    <input class="border border-blue-500 rounded-lg my-4 w-80 py-1 m-1 dark:bg-black" type="text" placeholder="maths, differential equations" v-model="tags" @keyup.enter="fetchPosts" >
    <button class="bg-blue-500 text-white rounded-lg px-3 py-2 mx-1 my-4" @click="fetchPosts">Search</button>
    <button class="bg-blue-500 text-white rounded-lg px-3 py-2 mx-1 my-4" @click="success=false; tags=''; err=false">Clear</button>
    
    <div v-if="success">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1">Results</h1>
      <ul class="list-decimal list-inside">
        <NuxtLink class="text-blue-900 lg:text-xl text-base underline underline-offset-4 dark:text-dark-link" :to="post.link" v-for="post in fetchedPost">
        
          <li class="p-1">{{ post.title }}</li>
        
        </NuxtLink>
      </ul>
    </div>
    <p v-if="err" class="error text-red-600 text-xl font-bold">No results found</p>
  </div>
</template>

<script lang="ts" setup>

const err = ref(false)

const tags = ref("")
const success = ref(false)

const { data : posts } = await useAsyncData('posts', () => queryContent('').find())
const fetchedPost = ref([])

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