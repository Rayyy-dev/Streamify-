<script setup>
import { ref, watch } from 'vue';
import CategorySelect from '../components/CategorySelect.vue';
import spotifyApi from '../Api/spotifyApi';

const searchQuery = ref('');
const searchResults = ref([]);

const performSearch = async () => {
  try {
    const data = await spotifyApi.search(searchQuery.value);
    searchResults.value = data.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name
    }));
  } catch (error) {
    console.error('Error searching tracks:', error);
  }
};

watch(searchQuery, () => {
  if (searchQuery.value.length > 2) {
    performSearch();
  } else {
    searchResults.value = [];
  }
});
</script>

<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold text-white mb-6">Search</h1>
        <input v-model="searchQuery" type="text" placeholder="Search for songs, artists, or albums" 
               class="w-full p-3 rounded-full bg-gray-800 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-white">
        
        <div v-if="searchResults.length > 0" class="mb-8">
            <h2 class="text-2xl font-bold text-white mb-4">Search Results</h2>
            <ul>
                <li v-for="result in searchResults" :key="result.id" class="flex items-center justify-between py-2 hover:bg-gray-800 rounded-md px-3">
                    <div>
                        <p class="text-white">{{ result.name }}</p>
                        <p class="text-gray-400 text-sm">{{ result.artist }}</p>
                    </div>
                    <button class="text-white hover:text-green-500">
                        <Play :size="24" />
                    </button>
                </li>
            </ul>
        </div>

        <h2 class="text-2xl font-bold text-white mb-4">Browse All</h2>
        <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300" />
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300" />
            <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300" />
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300" />
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300" />
            <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300" />
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300" />
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300" />
            <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300" />
            <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300" />
            <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300" />
            <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300" />
            <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300" />
        </div>
    </div>
</template>