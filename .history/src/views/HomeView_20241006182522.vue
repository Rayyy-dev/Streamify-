<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-white mb-6">Home</h1>
    <div v-for="(section, index) in sections" :key="index" class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-4">{{ section.title }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <HomeCard v-for="(card, cardIndex) in section.cards" :key="cardIndex" v-bind="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeCard from '../components/HomeCard.vue';

const sections = ref([
  {
    title: "Recently played",
    cards: [
      { title: "Liked Songs", subTitle: "Playlist", image: "https://misc.scdn.co/liked-songs/liked-songs-640.png" },
      { title: "Daily Mix 1", subTitle: "Playlist", image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1d0a8b66e7919d72f9360c7e/1/en/default" },
      // ... add more cards ...
    ]
  },
  {
    title: "Your top mixes",
    cards: [
      { title: "Pop Mix", subTitle: "Dua Lipa, The Weeknd, Taylor Swift and more", image: "https://seed-mix-image.spotifycdn.com/v6/img/pop/2wY79sveU1sp5g7SokKOiI/en/default" },
      { title: "Rock Mix", subTitle: "Foo Fighters, The Killers, Muse and more", image: "https://seed-mix-image.spotifycdn.com/v6/img/rock/7jy3rLJdDQY21OgRLCZ9sD/en/default" },
      // ... add more cards ...
    ]
  },
  // ... add more sections ...
]);
</script>