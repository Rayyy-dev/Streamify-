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
import StreamifyLogo from './components/StreamifyLogo.vue';

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => { isPlaying.value = false })

let openMenu = ref(false)
</script>

<template>
  <div>
    <div id="TopNav" class="
            w-[calc(100%-240px)] 
            h-[60px] 
            fixed 
            right-0 
            z-20 
            bg-[#101010] 
            bg-opacity-80 
            flex 
            items-center 
            justify-between
          ">
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

    <div id="SideNav" class="h-full w-64 fixed z-50 bg-black p-6">
      <RouterLink to="/">
        <StreamifyLogo :width="125" :height="31" class="text-white mb-8" />
      </RouterLink>
      
      <nav class="mb-6">
        <ul class="space-y-2">
          <RouterLink to="/" custom v-slot="{ navigate }">
            <MenuItem @click="navigate" name="Home" iconString="home" pageUrl="/" />
          </RouterLink>
          <RouterLink to="/search" custom v-slot="{ navigate }">
            <MenuItem @click="navigate" name="Search" iconString="search" pageUrl="/search" />
          </RouterLink>
          <RouterLink to="/library" custom v-slot="{ navigate }">
            <MenuItem @click="navigate" name="Your Library" iconString="library" pageUrl="/library" />
          </RouterLink>
        </ul>
      </nav>
      
      <div class="mb-6">
        <ul class="space-y-2">
          <MenuItem name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
          <MenuItem name="Liked Songs" iconString="liked" pageUrl="/liked" />
        </ul>
      </div>
      
      <div class="border-t border-gray-800 pt-4">
        <h3 class="text-gray-400 font-semibold mb-2 text-sm uppercase">Playlists</h3>
        <ul class="space-y-2">
          <li v-for="playlist in playlists" :key="playlist" 
              class="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm">
            {{ playlist }}
          </li>
        </ul>
      </div>
    
</template>
