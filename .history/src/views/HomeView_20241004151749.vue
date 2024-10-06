<script setup>
import HomeCard from '../components/HomeCard.vue';

const podcastCards = [
  { image: "https://picsum.photos/id/30/300/300", title: "Science Today", subTitle: "Latest discoveries" },
  { image: "https://picsum.photos/id/45/300/300", title: "Tech Talk", subTitle: "Cutting-edge innovations" },
  { image: "https://picsum.photos/id/65/300/300", title: "History Unveiled", subTitle: "Secrets from the past" },
  { image: "https://picsum.photos/id/67/300/300", title: "Philosophy Now", subTitle: "Big ideas, simply explained" },
  { image: "https://picsum.photos/id/100/300/300", title: "Language Mastery", subTitle: "Polyglot techniques" },
]

const radioCards = [
  { image: "https://picsum.photos/id/120/300/300", title: "Chill Vibes", subTitle: "Relaxing beats" },
  { image: "https://picsum.photos/id/110/300/300", title: "Rock Classics", subTitle: "Timeless hits" },
  { image: "https://picsum.photos/id/221/300/300", title: "Jazz Lounge", subTitle: "Smooth rhythms" },
  { image: "https://picsum.photos/id/232/300/300", title: "Electronic Pulse", subTitle: "Future sounds" },
  { image: "https://picsum.photos/id/187/300/300", title: "Acoustic Sessions", subTitle: "Unplugged melodies" },
]

const songCards = [
  { image: "https://picsum.photos/id/88/300/300", title: "Summer Nights", subTitle: "Tropical house" },
  { image: "https://picsum.photos/id/243/300/300", title: "Urban Beats", subTitle: "Hip-hop essentials" },
  { image: "https://picsum.photos/id/123/300/300", title: "Indie Discoveries", subTitle: "Fresh talents" },
  { image: "https://picsum.photos/id/121/300/300", title: "Classical Gems", subTitle: "Timeless compositions" },
  { image: "https://picsum.photos/id/99/300/300", title: "Pop Hits", subTitle: "Chart-toppers" },
]
</script>

<template>
  <div class="p-8 bg-gradient-to-b from-gray-900 to-black min-h-screen">
    <h2 class="text-white text-3xl font-bold mb-6">Podcasts to make you smarter</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <HomeCard v-for="(card, index) in podcastCards" :key="index" v-bind="card" />
    </div>

    <h2 class="text-white text-3xl font-bold mt-12 mb-6">Recommended radio</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <HomeCard v-for="(card, index) in radioCards" :key="index" v-bind="card" />
    </div>

    <h2 class="text-white text-3xl font-bold mt-12 mb-6">Recommended songs</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <HomeCard v-for="(card, index) in songCards" :key="index" v-bind="card" />
    </div>
  </div>
</template>