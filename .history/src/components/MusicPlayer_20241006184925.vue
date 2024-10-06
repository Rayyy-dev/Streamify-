<script setup>
import { ref, watch, onMounted } from 'vue'
import MusicPlayerVolume from '../components/MusicPlayerVolume.vue'
import Heart from 'vue-material-design-icons/Heart.vue';
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue';
import SkipForward from 'vue-material-design-icons/SkipForward.vue';

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {
    if (audio.value) {
        setTimeout(() => {
            timeupdate()
            loadmetadata()
        }, 300)
    }

    if (currentTrack.value) {
        seeker.value.addEventListener("change", function () {
            const time = audio.value.duration * (seeker.value.value / 100);
            audio.value.currentTime = time;
        });

        seeker.value.addEventListener("mousedown", function () {
            audio.value.pause();
            isPlaying.value = false
        });

        seeker.value.addEventListener("mouseup", function () {
            audio.value.play();
            isPlaying.value = true
        });

        seekerContainer.value.addEventListener("click", function (e) {
            const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
            const time = audio.value.duration * clickPosition;
            audio.value.currentTime = time;
            seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
        });
    }
})

const timeupdate = () => {
    audio.value.addEventListener("timeupdate", function () {
        var minutes = Math.floor(audio.value.currentTime / 60);
        var seconds = Math.floor(audio.value.currentTime - minutes * 60);
        isTrackTimeCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0')
        const value = (100 / audio.value.duration) * audio.value.currentTime;
        range.value = value
        seeker.value.value = value;
    });
}

const loadmetadata = () => {
    audio.value.addEventListener('loadedmetadata', function () {
        const duration = audio.value.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTimeTotal.value = minutes + ':' + seconds.toString().padStart(2, '0')
    });
}

watch(() => audio.value, () => {
    timeupdate()
    loadmetadata()
})

watch(() => isTrackTimeCurrent.value, (time) => {
    if (time && time == isTrackTimeTotal.value) {
        useSong.nextSong(currentTrack.value)
    }
})

const toggleLike = () => {
  // Implement like functionality
  console.log('Toggle like for:', currentTrack.value.name);
};

const togglePictureInPicture = async () => {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled && audio.value) {
      await audio.value.requestPictureInPicture();
    }
  } catch (error) {
    console.error('Failed to enter/exit Picture-in-Picture mode:', error);
  }
};
</script>

<template>
    <div v-if="audio" class="fixed bottom-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div class="flex items-center justify-between px-4 py-2">
            <div class="flex items-center w-1/4">
                <img :src="currentArtist.albumCover" alt="Album Cover" class="w-12 h-12 rounded-md mr-3">
                <div>
                    <div class="text-white text-sm font-medium truncate">{{ currentTrack.name }}</div>
                    <div class="text-gray-400 text-xs truncate">{{ currentArtist.name }}</div>
                </div>
                <button class="ml-4 text-gray-400 hover:text-white">
                    <Heart :size="18" />
                </button>
            </div>

            <div class="flex flex-col items-center w-2/4">
                <div class="flex items-center space-x-4 mb-1">
                    <button @click="useSong.prevSong(currentTrack)" class="text-gray-400 hover:text-white">
                        <SkipBackward :size="20" />
                    </button>
                    <button @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)" 
                        class="bg-white rounded-full p-2 hover:bg-gray-200">
                        <Play v-if="!isPlaying" fillColor="#000000" :size="20" />
                        <Pause v-else fillColor="#000000" :size="20" />
                    </button>
                    <button @click="useSong.nextSong(currentTrack)" class="text-gray-400 hover:text-white">
                        <SkipForward :size="20" />
                    </button>
                </div>
                <div class="w-full flex items-center space-x-2">
                    <span class="text-xs text-gray-400 w-10 text-right">{{ isTrackTimeCurrent }}</span>
                    <div ref="seekerContainer" class="flex-grow relative">
                        <input 
                            ref="seeker" 
                            v-model="range" 
                            type="range" 
                            class="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
                        >
                        <div class="absolute top-0 h-1 bg-white rounded-full" :style="`width: ${range}%`"></div>
                    </div>
                    <span class="text-xs text-gray-400 w-10">{{ isTrackTimeTotal }}</span>
                </div>
            </div>

            <div class="flex items-center justify-end w-1/4 space-x-4">
                <button class="text-gray-400 hover:text-white">
                    <PictureInPictureBottomRight :size="18" />
                </button>
                <MusicPlayerVolume />
            </div>
        </div>
    </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
}
</style>