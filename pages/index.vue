<template>
  <div>

    <div class="videos lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1">/videos</h1>
      <ul class="list-decimal list-inside">
      <li class="p-1" v-for="post in videoPosts" :key="post.slug">
        <a class="text-blue-900 lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">
          {{ post.title }}
        </a>
        <br>
        <span class="text-blue-500 italic lg:text-lg text-sm">{{ post.description }}</span>
        <br>
        <span class=" font-mono lg:text-sm text-xs"><u>tags:</u> {{ post.tags }}</span>
        <br>
        <span class=" font-mono lg:text-sm text-xs"><u>source:</u> {{ post.source }}</span>
      </li>
    </ul>
    </div>


    <div class="books lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1">/books</h1>
      <ul class="list-decimal list-inside">
        <li class="p-1" v-for="post in bookPosts" :key="post.slug">
          <a class="text-blue-900 lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}

          </a>
          <br>
          <span class="text-blue-500 italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs"><u>tags:</u> {{ post.tags }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs"><u>author(s):</u> {{ post.author }}</span>
        </li>
      </ul>
    </div>



    <div class="research lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1">/research</h1>
      <ul class="list-decimal list-inside">
        <li class="p-1" v-for="post in researchPosts" :key="post.slug">
          <a class="text-blue-900 lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}

          </a>
          <br>
          <span class="text-blue-500 italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs"><u>tags:</u> {{ post.tags }}</span>
        </li>
      </ul>
    </div>

    <div class="notes lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1">/notes</h1>
      <ul class="list-decimal list-inside">
        <li class="p-1" v-for="post in notePosts" :key="post.slug">
          <a class="text-blue-900 lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}

          </a>
          <br>
          <span class="text-blue-500 italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs"><u>tags:</u> {{ post.tags }}</span>
        </li>
      </ul>
    </div>


  </div>
</template>

<script lang="ts" setup>

const {data: allPosts} = await useAsyncData('posts', () => queryContent('').find())

const videoPosts = allPosts.value?.filter(post => post._dir==='videos')

const researchPosts = allPosts.value?.filter(post => post._dir==='research')

const bookPosts = allPosts.value?.filter(post => post._dir==='books')

const notePosts = allPosts.value?.filter(post => post._dir==='notes')

</script>

<style>

</style>