<template>
  <div class="flex items-center space-x-2">
    <button @click="toggleMute" class="text-gray-400 hover:text-white">
      <VolumeMute v-if="vol == 0" :size="20" />
      <VolumeHigh v-else :size="20" />
    </button>
    <div class="w-24 relative">
      <input v-model="vol" ref="volume" type="range" 
        class="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer">
      <div class="absolute top-0 h-1 bg-white rounded-lg" :style="`width: ${vol}%`"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VolumeMute from 'vue-material-design-icons/VolumeMute.vue'
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue'

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia'

const useSong = useSongStore()
const { audio } = storeToRefs(useSong)

let vol = ref(80)
let volume = ref(null)

const toggleMute = () => {
  vol.value = vol.value === 0 ? 80 : 0
  audio.value.volume = vol.value / 100
}

// ... rest of the script
</script>