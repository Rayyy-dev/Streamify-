<template>
  <div class="p-8 bg-gray-900">
    <section v-for="(section, index) in sections" :key="index" class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-white text-2xl font-bold">{{ section.title }}</h2>
        <button class="text-gray-400 hover:text-white transition-colors text-sm font-semibold">See All</button>
      </div>

      <div class="relative">
        <button @click="scroll(index, 'left')" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          <ChevronLeftIcon :size="24" />
        </button>
        <div :ref="'carousel' + index" class="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
          <HomeCard v-for="(card, cardIndex) in section.cards" :key="cardIndex" v-bind="card" class="flex-shrink-0 w-48" />
        </div>
        <button @click="scroll(index, 'right')" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          <ChevronRightIcon :size="24" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeCard from '../components/HomeCard.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

const sections = [
  {
    title: "Podcasts to make you smarter",
    cards: [
      { image: "https://picsum.photos/id/30/300/300", title: "Science Today", subTitle: "Latest discoveries" },
      { image: "https://picsum.photos/id/45/300/300", title: "Tech Talk", subTitle: "Cutting-edge innovations" },
      { image: "https://picsum.photos/id/65/300/300", title: "History Unveiled", subTitle: "Secrets from the past" },
      { image: "https://picsum.photos/id/67/300/300", title: "Philosophy Now", subTitle: "Big ideas, simply explained" },
      { image: "https://picsum.photos/id/100/300/300", title: "Language Mastery", subTitle: "Polyglot techniques" },
      { image: "https://picsum.photos/id/110/300/300", title: "Business Insights", subTitle: "Entrepreneurial wisdom" },
      { image: "https://picsum.photos/id/120/300/300", title: "Health & Wellness", subTitle: "Mind and body balance" },
    ]
  },
  {
    title: "Recommended radio",
    cards: [
      { image: "https://picsum.photos/id/120/300/300", title: "Chill Vibes", subTitle: "Relaxing beats" },
      { image: "https://picsum.photos/id/110/300/300", title: "Rock Classics", subTitle: "Timeless hits" },
      { image: "https://picsum.photos/id/221/300/300", title: "Jazz Lounge", subTitle: "Smooth rhythms" },
      { image: "https://picsum.photos/id/232/300/300", title: "Electronic Pulse", subTitle: "Future sounds" },
      { image: "https://picsum.photos/id/187/300/300", title: "Acoustic Sessions", subTitle: "Unplugged melodies" },
      { image: "https://picsum.photos/id/200/300/300", title: "Classical Hour", subTitle: "Timeless compositions" },
      { image: "https://picsum.photos/id/210/300/300", title: "World Music", subTitle: "Global rhythms" },
    ]
  },
  {
    title: "Recommended songs",
    cards: [
      { image: "https://picsum.photos/id/88/300/300", title: "Summer Nights", subTitle: "Tropical house" },
      { image: "https://picsum.photos/id/243/300/300", title: "Urban Beats", subTitle: "Hip-hop essentials" },
      { image: "https://picsum.photos/id/123/300/300", title: "Indie Discoveries", subTitle: "Fresh talents" },
      { image: "https://picsum.photos/id/121/300/300", title: "Classical Gems", subTitle: "Timeless compositions" },
      { image: "https://picsum.photos/id/99/300/300", title: "Pop Hits", subTitle: "Chart-toppers" },
      { image: "https://picsum.photos/id/201/300/300", title: "Rock Anthems", subTitle: "Legendary tracks" },
      { image: "https://picsum.photos/id/222/300/300", title: "EDM Bangers", subTitle: "Dance floor fillers" },
    ]
  }
];

const carousels = ref([]);

const scroll = (index, direction) => {
  const carousel = carousels.value[index];
  if (carousel) {
    const scrollAmount = direction === 'left' ? -carousel.offsetWidth : carousel.offsetWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};
</script><style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

