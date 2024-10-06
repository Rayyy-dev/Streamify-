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
        <div class="bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg m-2 hover:from-gray-800 hover:to-gray-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <img class="rounded-md shadow-md w-full object-cover h-48" :src="image" alt="">
            <div class="text-white pt-3 font-bold text-lg">{{ title }}</div>
            <div class="text-gray-400 pt-1 text-sm">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>