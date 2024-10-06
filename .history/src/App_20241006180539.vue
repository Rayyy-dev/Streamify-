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
  <div class="bg-gray-900 text-white min-h-screen">
    <div id="TopNav" class="
      w-full 
      h-16 
      fixed 
      top-0
      z-20 
      bg-gray-800 
      flex 
      items-center 
      justify-between
      px-6
    ">
      <div class="flex items-center space-x-4">
        <button type="button" class="rounded-full bg-gray-700 p-2 hover:bg-gray-600">
          <ChevronLeft fillColor="#FFFFFF" :size="24" />
        </button>
        <button type="button" class="rounded-full bg-gray-700 p-2 hover:bg-gray-600">
          <ChevronRight fillColor="#FFFFFF" :size="24" />
        </button>
      </div>

      <button @click="openMenu = !openMenu" 
        class="bg-gray-700 hover:bg-gray-600 rounded-full p-2 flex items-center space-x-2">
        <img class="rounded-full w-8 h-8" src="/src/assets/3c9f83bd6f032bf40dccc321d8b0c210.jpg">
        <span class="font-semibold">Ray</span>
        <ChevronDown v-if="!openMenu" fillColor="#FFFFFF" :size="20" />
        <ChevronUp v-else fillColor="#FFFFFF" :size="20" />
      </button>

      <span v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>

    </div>

    <div id="SideNav" class="w-64 fixed left-0 top-16 bottom-0 bg-gray-800 p-6 overflow-y-auto">
      <RouterLink to="/" class="block mb-8">
        <img width="125" src="/images/icons/streamify-logo.png" alt="Streamify Logo">
      </RouterLink>
      <ul class="space-y-4">
        <RouterLink to="/">
          <MenuItem name="Home" iconString="home" pageUrl="/" />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem name="Search" iconString="search" pageUrl="/search" />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem name="Your Library" iconString="library" pageUrl="/library" />
        </RouterLink>
        <MenuItem name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
        <MenuItem name="Liked Songs" iconString="liked" pageUrl="/liked" />
      </ul>
      <div class="border-t border-gray-700 my-4"></div>
      <ul class="space-y-2">
        <li class="text-sm text-gray-400 hover:text-white">My Playlist #1</li>
        <li class="text-sm text-gray-400 hover:text-white">My Playlist #2</li>
        <li class="text-sm text-gray-400 hover:text-white">My Playlist #3</li>
        <li class="text-sm text-gray-400 hover:text-white">My Playlist #4</li>
      </ul>
    </div>
  </div>

  <div class="ml-64 pt-16 pb-24">
    <RouterView />
  </div>

  <MusicPlayer v-if="currentTrack" />
</template>