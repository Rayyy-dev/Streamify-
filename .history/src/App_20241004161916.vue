<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-900 to-black text-white">
    <!-- Sidebar -->
    <div id="SideNav" class="w-64 bg-black bg-opacity-50 backdrop-blur-md p-6 fixed h-full z-50 transition-all duration-300 ease-in-out">
      <RouterLink to="/" class="block mb-8">
        <h1 class="text-2xl font-bold text-teal-400">Streamify</h1>
      </RouterLink>
      <nav>
        <ul class="space-y-4">
          <li>
            <RouterLink to="/" class="flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
              <HomeIcon class="w-5 h-5" />
              <span>Home</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/search" class="flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
              <SearchIcon class="w-5 h-5" />
              <span>Search</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/library" class="flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
              <LibraryIcon class="w-5 h-5" />
              <span>Your Library</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main content area -->
    <div class="flex-1 flex flex-col ml-64">
      <!-- Top bar -->
      <div id="TopNav" class="h-16 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-between fixed top-0 right-0 left-64 z-20 px-6">
        <div class="flex items-center space-x-4">
          <button type="button" class="rounded-full bg-black bg-opacity-50 p-2 hover:bg-opacity-75 transition-all duration-200">
            <ChevronLeftIcon class="w-5 h-5" />
          </button>
          <button type="button" class="rounded-full bg-black bg-opacity-50 p-2 hover:bg-opacity-75 transition-all duration-200">
            <ChevronRightIcon class="w-5 h-5" />
          </button>
        </div>

        <div class="relative">
          <button @click="openMenu = !openMenu" 
            class="flex items-center space-x-2 bg-black bg-opacity-50 rounded-full py-1 px-2 hover:bg-opacity-75 transition-all duration-200">
            <img class="w-8 h-8 rounded-full object-cover" src="/src/assets/3c9f83bd6f032bf40dccc321d8b0c210.jpg" alt="Profile Picture">
            <span class="font-medium">Ray</span>
            <ChevronDownIcon v-if="!openMenu" class="w-4 h-4" />
            <ChevronUpIcon v-else class="w-4 h-4" />
          </button>

          <div v-if="openMenu"
            class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Log out</a>
          </div>
        </div>
      </div>

      <!-- Router view -->
      <div class="flex-1 overflow-y-auto pt-16 px-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { HomeIcon, SearchIcon, LibraryIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid'

let openMenu = ref(false)
</script>