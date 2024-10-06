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
    <RouterLink to="library" class="block">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img class="w-full h-48 object-cover" :src="image" :alt="title">
            <div class="p-4">
                <h3 class="text-white font-bold text-lg mb-1 truncate">{{ title }}</h3>
                <p class="text-gray-400 text-sm truncate">{{ subTitle }}</p>
            </div>
        </div>
    </RouterLink>
</template>