<template>
  <div>
    <div class="archive lg:py-7 py-4">
      <ul class="list-decimal list-inside">
        <li class="p-1" v-for="post in archivePosts" :key="post.slug">
          <NuxtLink
            class="text-blue-900 dark:text-dark-link lg:text-xl text-base underline underline-offset-4"
            :to="post._file?.slice(0, -3)"
          >
            {{ post.title }}
          </NuxtLink>
          <br>
          <span class="text-blue-500 dark:text-dark-link italic lg:text-lg text-sm">{{ post.description }}</span>
          <br>
          <span class=" font-mono lg:text-sm text-xs dark:text-dark-secondary"><u>tags:</u> {{ post.tags }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {data: allPosts} = await useAsyncData('posts', () => queryContent('').find())
const archivePosts = allPosts.value?.filter(post => post._dir==='archive')
</script>

<style>

</style>