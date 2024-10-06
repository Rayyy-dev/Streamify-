<template>
    <RouterLink to="library">
        <div v-if="randColor.color" :style="`background: linear-gradient(135deg, ${randColor.color}, ${darkenColor(randColor.color, 30)});`" class="
                contrast-[1.5] 
                brightness-[0.95] 
                rounded-2xl 
                aspect-square 
                relative 
                overflow-hidden
                shadow-lg
                transition duration-300 ease-in-out transform hover:scale-105
            ">
            <div class="text-white pt-4 pl-5 font-bold text-[25px]">{{ category }}</div>
            <img class="
                    absolute 
                    contrast-[0.8]
                    -right-2 
                    bottom-0 
                    max-w-[110px] 
                    rotate-[15deg]
                " :src="image || ''">
        </div>
    </RouterLink>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';

let randColor = ref('')
randColor.value = uniqolor.random()

const props = defineProps({ category: String, image: String })
const { category } = toRefs(props)

// Function to darken a color
const darkenColor = (color, amount) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.max(0, Math.min(255, parseInt(color, 16) - amount)).toString(16)).substr(-2));
}
</script>
