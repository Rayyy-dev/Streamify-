<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MenuItem from './components/MenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => { isPlaying.value = false })

let openMenu = ref(false)
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-indigo-900 text-white">
      <!-- Sidebar content goes here -->
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Streamify</h1>
        <nav>
          <ul>
            <li class="mb-2">
              <RouterLink to="/" class="block py-2 px-4 rounded hover:bg-indigo-800">Discover</RouterLink>
            </li>
            <li class="mb-2">
              <RouterLink to="/library" class="block py-2 px-4 rounded hover:bg-indigo-800">Your Library</RouterLink>
            </li>
            <li class="mb-2">
              <RouterLink to="/search" class="block py-2 px-4 rounded hover:bg-indigo-800">Explore</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content area -->
    <div class="flex-1 flex flex-col">
      <!-- Top bar -->
      <div class="bg-gray-800 text-white p-4">
        <!-- Top bar content goes here -->
        <div class="flex justify-between items-center">
          <div>
            <input type="text" placeholder="Search for music..." class="bg-gray-700 text-white px-4 py-2 rounded">
          </div>
          <div>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>

      <!-- Router view -->
      <div class="flex-1 overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>

  <MusicPlayer v-if="currentTrack" />
</template>