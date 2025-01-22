<template>
  <Title>Knowledge Base</Title>
  <div class="dark:text-dark-text">



    <div class="videos lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1 dark:text-dark-text"">/videos<button @click="videoShow = !videoShow">{{ videoShow ? '🔽' : '▶️' }}</button></h1>
      <ul v-if="videoShow" class="list-decimal list-inside">
        <li class="p-1" v-for="post in videoPosts" :key="post.slug">
          <a class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">
            {{ post.title }}
          </a>
          <a :href="post.video" class="font-mono lg:text-sm text-xs dark:text-dark-secondary"> (🔗)</a>
          <br>
          <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class="font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>
          <br>
          <span class="font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>source:</u> {{ post.source }}</span>
        </li>
      </ul>
    </div>

    <div class="books lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1 dark:text-dark-text">/books <button @click="bookShow = !bookShow">{{ bookShow ? '🔽' : '▶️' }}</button></h1>
      <ul v-if="bookShow" class="list-decimal list-inside">
        <li class="p-1" v-for="post in bookPosts" :key="post.slug">
          <a class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}

          </a>
          <br>
          <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>author(s):</u> {{ post.author }}</span>
        </li>
      </ul>
    </div>

    <div class="research lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1 dark:text-dark-text">/research<button @click="researchShow = !researchShow">{{ researchShow ? '🔽' : '▶️' }}</button></h1>
      <ul v-if="researchShow" class="list-decimal list-inside">
        <li class="p-1" v-for="post in researchPosts" :key="post.slug">
          <a class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}

          </a>
          <br>
          <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>
        </li>
      </ul>
    </div>

    <div class="notes lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1 dark:text-dark-text">/notes <button @click="noteShow = !noteShow">{{ noteShow ? '🔽' : '▶️' }}</button></h1>
      <div v-if="noteShow">


        <div class="lg:ml-3 ml-2">
          <h2 class="lg:text-3xl text-xl font-bold py-2 p-1 dark:text-dark-text">/philosphy <button @click="philosophyShow = !philosophyShow">{{ philosophyShow ? '🔽' : '▶️' }}</button></h2>
          <ul v-if="philosophyShow" class="list-decimal list-inside">
            <li class="p-1" v-for="post in philosophyPosts" :key="post.slug">
              <a class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}

              </a>
              <br>
              <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
              <br>
              <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>

            </li>
          </ul>
        </div>

        <ul class="list-decimal list-inside">
          <li class="p-1" v-for="post in notePosts" :key="post.slug">
            <a class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}
              
            </a>
            <br>
            <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
            <br>
            <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>
          </li>
        </ul>

        
      </div>
    </div>

    <!-- <div class="archive lg:py-7 py-4">
      <h1 class="lg:text-5xl text-3xl font-bold py-2 p-1 dark:text-dark-text opacity-40">/archive<button @click="archiveShow = !archiveShow">{{ archiveShow ? '🔽' : '▶️' }}</button></h1>
      <ul v-if="archiveShow" class="list-decimal list-inside">
        <li class="p-1" v-for="post in archivePosts" :key="post.slug">
          <a class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4" :href="post._file?.slice(0, -3)">{{ post.title }}
          </a>
          <br>
          <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>
        </li>
      </ul>
    </div> -->


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

const {data: allPosts} = await useAsyncData('posts', () => queryContent('').find())

const videoPosts = allPosts.value?.filter(post => post._dir==='videos')

const researchPosts = allPosts.value?.filter(post => post._dir==='research')

const bookPosts = allPosts.value?.filter(post => post._dir==='books')

const notePosts = allPosts.value?.filter(post => post._dir==='notes')

const archivePosts = allPosts.value?.filter(post => post._dir==='archive')

const { data: philosophyPosts } = await useAsyncData('philosophy', () => queryContent('notes/philosophy').find())

</script>

<style>

</style>