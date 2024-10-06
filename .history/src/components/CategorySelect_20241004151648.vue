<template>
    <RouterLink to="library" class="block">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl aspect-square relative overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
            <div class="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex flex-col justify-between p-6">
                <div class="text-white font-bold text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">{{ category }}</div>
                <div class="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play fillColor="#FFFFFF" :size="40" />
                </div>
            </div>
            <img class="absolute right-0 bottom-0 w-2/3 opacity-50 group-hover:opacity-70 transition-opacity duration-300 transform rotate-12 translate-x-1/4 translate-y-1/4" :src="image || ''">
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Play from 'vue-material-design-icons/Play.vue';

const props = defineProps({ category: String, image: String })
</script>
