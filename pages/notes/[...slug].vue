<script lang="ts" setup>
const route = useRoute()
const isClient = ref(false)

// Only run password check on client side
onMounted(() => {
  isClient.value = true
})

const checkPassword = async () => {
    try {
        const response = await useFetch(`https://ontological-debugging.vercel.app/api/getPassKB`, {
            method: 'POST',
            body: {
                password: password.value
            },
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        if (response.data.value) {
            allowed.value = true
        }
    } catch (error) {
        console.error('Password verification failed:', error)
    }
}

const password = ref('')
const allowed = ref(false)
</script>

<template>
    <div v-if="route.params.slug[0] !== 'second-year-plan'">
        <ContentDoc class="prose prose-sm lg:prose-base dark:prose-invert"/>
    </div>
    <div v-else-if="isClient">
        <div v-if="!allowed">
            <p>Password?</p>
            <input class="dark:bg-white dark:text-black bg-black text-white rounded-lg" 
                   type="password" 
                   v-model="password"/>
            <button class="p-2 dark:bg-white dark:text-black bg-black text-white m-2 rounded-lg" 
                    @click="checkPassword">Submit</button>
        </div>
        <ContentDoc v-else class="prose prose-sm lg:prose-base dark:prose-invert"/>
    </div>
</template>

<style>

</style>