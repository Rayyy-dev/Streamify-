<script setup>
import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import SearchIcon from 'vue-material-design-icons/Magnify.vue';
import LibraryIcon from 'vue-material-design-icons/BookshelfOutline.vue';
import PlaylistIcon from 'vue-material-design-icons/PlaylistMusic.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';

const route = useRoute()

const props = defineProps({
    iconString: String,
    pageUrl: String,
    name: String
})
const { iconString, pageUrl, name } = toRefs(props)

const isActive = ref(false)

watchEffect(() => {
    isActive.value = route.path === pageUrl.value
})

const getIcon = () => {
    switch (iconString.value) {
        case 'home': return HomeIcon;
        case 'search': return SearchIcon;
        case 'library': return LibraryIcon;
        case 'playlist': return PlaylistIcon;
        case 'liked': return HeartIcon;
        default: return null;
    }
}
</script>

<template>
    <li class="flex items-center py-2 px-4 rounded-md transition-colors duration-200"
        :class="isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'">
        <component :is="getIcon()" :size="24" />
        <span class="ml-4 font-medium">{{ name }}</span>
    </li>
</template>