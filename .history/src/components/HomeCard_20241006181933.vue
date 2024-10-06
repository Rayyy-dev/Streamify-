<template>
    <RouterLink to="library" class="block">
        <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md">
            <div class="relative overflow-hidden rounded-lg mb-3 aspect-square">
                <div v-if="image" class="w-full h-full bg-cover bg-center" :style="{ backgroundImage: `url(${image})` }"></div>
                <div v-else class="w-full h-full bg-gray-600 flex items-center justify-center">
                    <MusicIcon :size="48" fillColor="#FFFFFF" />
                </div>
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play fillColor="#FFFFFF" :size="40" />
                </div>
            </div>
            <div class="text-white font-bold text-sm truncate">{{ title }}</div>
            <div class="text-gray-400 text-xs truncate mt-1">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>

<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import Play from 'vue-material-design-icons/Play.vue';
import MusicIcon from 'vue-material-design-icons/Music.vue';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})
const { image, title, subTitle } = toRefs(props)
</script>