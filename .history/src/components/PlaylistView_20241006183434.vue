<template>
  <div v-if="selectedPlaylist" class="p-8">
    <h1 class="text-3xl font-bold text-white mb-6">{{ selectedPlaylist.name }}</h1>
    <ul>
      <li v-for="song in selectedPlaylist.songs" :key="song.id" class="flex items-center justify-between py-2 hover:bg-gray-800">
        <div>
          <p class="text-white">{{ song.name }}</p>
          <p class="text-gray-400 text-sm">{{ song.artist }}</p>
        </div>
        <button @click="playSong(song)" class="text-white hover:text-green-500">
          <Play v-if="!isPlaying || currentTrack.id !== song.id" :size="24" />
          <Pause v-else :size="24" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlaylistStore } from '../stores/playlist'
import { useSongStore } from '../stores/song'
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'

const playlistStore = usePlaylistStore()
const songStore = useSongStore()

const { selectedPlaylist } = storeToRefs(playlistStore)
const { isPlaying, currentTrack } = storeToRefs(songStore)

const playSong = (song) => {
  songStore.playSong(song)
}
</script>
