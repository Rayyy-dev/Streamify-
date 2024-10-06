<template>
  <li @mouseenter="isHover = true" @mouseleave="isHover = false"
      class="flex items-center justify-start pb-4 cursor-pointer">
    <component :is="icon" :size="24" :fillColor="isActive || isHover ? '#FFFFFF' : '#B3B3B3'" />
    <span :class="[
      'ml-4 font-semibold text-sm',
      isActive || isHover ? 'text-white' : 'text-gray-400'
    ]">{{ name }}</span>
  </li>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
import BookshelfIcon from 'vue-material-design-icons/Bookshelf.vue';

const props = defineProps({
  name: String,
  iconName: String,
  pageUrl: String
});

const route = useRoute();
const isHover = ref(false);

const isActive = computed(() => route.path === props.pageUrl);

const icon = computed(() => {
  switch (props.iconName) {
    case 'home': return HomeIcon;
    case 'search': return MagnifyIcon;
    case 'library': return BookshelfIcon;
    default: return null;
  }
});
</script>
