<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})
const { image, title, subTitle } = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div class="bg-gradient-to-br from-blue-900 to-purple-900 p-5 rounded-xl m-2 hover:from-blue-800 hover:to-purple-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <img class="rounded-lg shadow-lg" :src="image" alt="">
            <div class="text-white pt-4 font-bold text-[18px]">{{ title }}</div>
            <div class="text-indigo-200 pt-1 pb-3 text-[15px]">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>