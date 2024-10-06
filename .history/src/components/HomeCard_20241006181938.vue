<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import Play from 'vue-material-design-icons/Play.vue';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})
const { image, title, subTitle } = toRefs(props)
</script>
<template>
    <RouterLink to="library" class="block">
        <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md">
            <div class="relative overflow-hidden rounded-lg mb-3">
                <img class="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-110" :src="image" alt="">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play fillColor="#FFFFFF" :size="40" />
                </div>
            </div>
            <div class="text-white font-bold text-sm truncate">{{ title }}</div>
            <div class="text-gray-400 text-xs truncate mt-1">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>
