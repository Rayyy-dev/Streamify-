<template>
    <RouterLink to="library">
        <div class="bg-gradient-to-br from-gray-900 to-black rounded-lg aspect-square relative overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-800 hover:to-gray-900">
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="text-white pt-4 pl-5 font-bold text-2xl relative z-10">{{ category }}</div>
            <img class="
                    absolute 
                    right-0 
                    bottom-0 
                    w-3/5
                    opacity-60
                " :src="image || ''">
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({ category: String, image: String })
</script>
