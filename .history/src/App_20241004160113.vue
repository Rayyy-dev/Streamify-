<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MenuItem from './components/MenuItem.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'

let openMenu = ref(false)
</script>

<template>
  <div class="flex h-screen bg-gray-900">
    <!-- Sidebar -->
    <div id="SideNav" class="w-[240px] bg-black p-6 fixed h-full z-50">
      <RouterLink to="/">
        <img width="125" src="/images/icons/streamify-logo.png" alt="Streamify Logo">
      </RouterLink>
      <div class="my-8"></div>
      <nav>
        <ul>
          <RouterLink to="/">
            <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
          </RouterLink>
          <RouterLink to="/search">
            <MenuItem class="ml-[1px]" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
          </RouterLink>
          <RouterLink to="/library">
            <MenuItem class="ml-[2px]" :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
          </RouterLink>
        </ul>
      </nav>
    </div>

    <!-- Main content area -->
    <div class="flex-1 flex flex-col ml-[240px]">
      <!-- Top bar -->
      <div id="TopNav" class="h-[60px] bg-[#101010] bg-opacity-80 flex items-center justify-between fixed top-0 right-0 left-[240px] z-20 px-6">
        <div class="flex items-center">
          <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
            <ChevronLeft fillColor="#FFFFFF" :size="30" />
          </button>
          <button type="button" class="rounded-full bg-black p-[1px] hover:bg-[#282828] ml-4 cursor-pointer">
            <ChevronRight fillColor="#FFFFFF" :size="30" />
          </button>
        </div>

        <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
          class="bg-black hover:bg-[#282828] rounded-full p-0.5 cursor-pointer">
          <div class="flex items-center">
            <img class="rounded-full" width="27" src="/src/assets/3c9f83bd6f032bf40dccc321d8b0c210.jpg" alt="Profile Picture">
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

      <!-- Router view -->
      <div class="flex-1 overflow-y-auto pt-[60px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>