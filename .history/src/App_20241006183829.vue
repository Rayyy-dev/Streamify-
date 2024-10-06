<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import SidebarMenuItem from './components/SidebarMenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue'
import StreamifyLogo from './components/StreamifyLogo.vue';
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';
import PlaylistMusicIcon from 'vue-material-design-icons/PlaylistMusic.vue';

import { useSongStore } from './stores/song'
import { usePlaylistStore } from './stores/playlist'
import { storeToRefs } from 'pinia';

const songStore = useSongStore()
const playlistStore = usePlaylistStore()
const { isPlaying, currentTrack } = storeToRefs(songStore)
const { playlists } = storeToRefs(playlistStore)

const route = useRoute()

onMounted(() => { isPlaying.value = false })

const createPlaylist = () => {
  playlistStore.createPlaylist(`My Playlist #${playlists.value.length + 1}`)
}

const goToLikedSongs = () => {
  // Implement navigation to liked songs page
}
</script>

<template>
  <div>
    <!-- Top Navigation -->
    <div id="TopNav" class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <!-- Add navigation controls here if needed -->
    </div>

    <!-- Sidebar -->
    <div id="SideNav" class="h-[100%] w-[240px] fixed z-50 bg-black flex flex-col">
      <div class="p-6">
        <RouterLink to="/">
          <StreamifyLogo :width="125" :height="31" class="text-white" />
        </RouterLink>
      </div>
      <div class="mt-2 px-2">
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
      </div>
      <div class="mt-6 px-2">
        <ul>
          <li>
            <button @click="createPlaylist" class="flex items-center w-full py-2 px-4 text-gray-300 hover:text-white transition-colors">
              <PlusIcon :size="20" />
              <span class="ml-4 text-sm font-semibold">Create Playlist</span>
            </button>
          </li>
          <li>
            <button @click="goToLikedSongs" class="flex items-center w-full py-2 px-4 text-gray-300 hover:text-white transition-colors">
              <HeartIcon :size="20" />
              <span class="ml-4 text-sm font-semibold">Liked Songs</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="mt-6 px-2 flex-grow overflow-y-auto">
        <h3 class="text-gray-400 font-semibold uppercase text-xs px-4 mb-2">Playlists</h3>
        <ul>
          <li v-for="playlist in playlists" :key="playlist.id" class="mb-1">
            <RouterLink :to="`/playlist/${playlist.id}`" class="flex items-center w-full py-2 px-4 text-gray-300 hover:text-white transition-colors rounded-md hover:bg-gray-900">
              <PlaylistMusicIcon :size="20" />
              <span class="ml-4 text-sm font-medium truncate">{{ playlist.name }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <MusicPlayer v-if="currentTrack" />
</template>
