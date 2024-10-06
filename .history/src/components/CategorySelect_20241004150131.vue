<template>
    <RouterLink to="library" class="block">
        <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="relative z-10 p-6 flex flex-col h-full justify-between">
                <h3 class="text-white font-bold text-2xl">{{ category }}</h3>
                <StreamifyLogo class="text-white opacity-50" :width="80" :height="20" />
            </div>
            <img class="absolute right-0 bottom-0 w-2/3 opacity-50 object-cover" :src="image" :alt="category">
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import StreamifyLogo from './StreamifyLogo.vue'

defineProps({ 
    category: String, 
    image: String 
})
</script>
