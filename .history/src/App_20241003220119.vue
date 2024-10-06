<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

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
          <img class="rounded-full" width="27" src="/src/assets/3c9f83bd6f032bf40dccc321d8b0c210.jpg" alt="Image">
          <div class="text-white text-[14px] ml-1.5 font-semibold">Ray Dev</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
        </div>
      </button>
      

    </div>
  </div>
</template>

