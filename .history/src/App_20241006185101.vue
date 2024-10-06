<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SidebarMenuItem from './components/SidebarMenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue'
import StreamifyLogo from './components/StreamifyLogo.vue';
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';
import PlaylistMusicIcon from 'vue-material-design-icons/PlaylistMusic.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import { useRouter } from 'vue-router';

import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia';
import { usePlaylistStore } from './stores/playlist';

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => { isPlaying.value = false })

let openMenu = ref(false)

const playlists = ref([
  { id: 1, name: 'Chill Vibes' },
  { id: 2, name: 'Workout Mix' },
  { id: 3, name: 'Study Session' },
  { id: 4, name: 'Road Trip Tunes' },
])

const router = useRouter();
const goBack = () => router.go(-1);
const goForward = () => router.go(1);

const playlistStore = usePlaylistStore()
const { playlists: playlistList } = storeToRefs(playlistStore)

const createNewPlaylist = () => {
  const playlistName = `My Playlist #${playlistList.value.length + 1}`
  playlistStore.createPlaylist(playlistName)
}

</script>

<template>
  <div>
    <!-- Top Navigation -->
    <div id="TopNav" class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <div class="flex items-center ml-6">
        <button @click="goBack" type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button @click="goForward" type="button" class="rounded-full bg-black p-[1px] hover:bg-[#282828] ml-4 cursor-pointer">
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
            <button @click="createNewPlaylist" class="flex items-center w-full py-2 px-4 text-gray-300 hover:text-white transition-colors">
              <PlusIcon :size="20" />
              <span class="ml-4 text-sm font-semibold">Create Playlist</span>
            </button>
          </li>
          <li>
            <RouterLink to="/liked-songs" class="flex items-center w-full py-2 px-4 text-gray-300 hover:text-white transition-colors">
              <HeartIcon :size="20" />
              <span class="ml-4 text-sm font-semibold">Liked Songs</span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="mt-6 px-2 flex-grow overflow-y-auto">
        <h3 class="text-gray-400 font-semibold uppercase text-xs px-4 mb-2">Playlists</h3>
        <ul>
          <li v-for="playlist in playlists" :key="playlist.id" class="mb-1">
            <button class="flex items-center w-full py-2 px-4 text-gray-300 hover:text-white transition-colors rounded-md hover:bg-gray-900">
              <PlaylistMusicIcon :size="20" />
              <span class="ml-4 text-sm font-medium truncate">{{ playlist.name }}</span>
            </button>
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
