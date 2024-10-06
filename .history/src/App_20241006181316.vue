<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 ml-64">
      <RouterView />
    </main>
    <MusicPlayer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import MusicPlayer from './components/MusicPlayer.vue';
</script>
