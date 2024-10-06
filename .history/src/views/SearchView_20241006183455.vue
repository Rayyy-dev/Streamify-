<script setup>
import CategorySelect from '../components/CategorySelect.vue';
import { ref, watch } from 'vue'
import { useSongStore } from '../stores/song'
import Play from 'vue-material-design-icons/Play.vue'

const songStore = useSongStore()
const searchQuery = ref('')
const searchResults = ref([])

watch(searchQuery, async (newQuery) => {
  if (newQuery.length > 2) {
    // Implement actual search logic here
    searchResults.value = await songStore.searchSongs(newQuery)
  } else {
    searchResults.value = []
  }
})

const playSong = (song) => {
  songStore.playSong(song)
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-white mb-6">Search</h1>
    <input v-model="searchQuery" type="text" placeholder="Search for songs, artists, or albums" class="w-full p-2 rounded-md bg-gray-800 text-white mb-4">
    <div v-if="searchResults.length > 0">
      <h2 class="text-2xl font-bold text-white mb-4">Results</h2>
      <ul>
        <li v-for="result in searchResults" :key="result.id" class="flex items-center justify-between py-2 hover:bg-gray-800">
          <div>
            <p class="text-white">{{ result.name }}</p>
            <p class="text-gray-400 text-sm">{{ result.artist }}</p>
          </div>
          <button @click="playSong(result)" class="text-white hover:text-green-500">
            <Play :size="24" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>