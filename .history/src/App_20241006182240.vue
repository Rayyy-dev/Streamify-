<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SidebarMenuItem from './components/SidebarMenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue'
import StreamifyLogo from './components/StreamifyLogo.vue';

import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia';

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => { isPlaying.value = false })

let openMenu = ref(false)
</script>

<template>
  <div>
    <div id="TopNav" class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] hover:bg-[#] ml-4 cursor-pointer">
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>

      <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer">
        <div class="flex items-center">
          <img class="rounded-full" width="27" src="/src/assets/3c9f83bd6f032bf40dccc321d8b0c210.jpg">
          <div class="text-white text-[14px] ml-1.5 font-semibold">Ray</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
        </div>
      </button>

      <span v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>

    </div>

    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <StreamifyLogo :width="125" :height="31" class="text-white" />
      </RouterLink>
      <div class="my-8"></div>
      <ul>
        <RouterLink to="/">
          <SidebarMenuItem name="Home" iconName="home" pageUrl="/" />
        </RouterLink>
        <RouterLink to="/search">
          <SidebarMenuItem name="Search" iconName="search" pageUrl="/search" />
        </RouterLink>
        <RouterLink to="/library">
          <SidebarMenuItem name="Your Library" iconName="library" pageUrl="/library" />
        </RouterLink>
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
      </ul>
    </div>
  </div>

  <div class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <MusicPlayer v-if="currentTrack" />
</template>
