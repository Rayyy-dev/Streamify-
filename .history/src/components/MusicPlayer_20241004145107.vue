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

</script>

<template>
    <div id="MusicPlayer" v-if="audio" class="
            fixed
            flex
            items-center
            justify-between
            bottom-0
            w-full
            z-50
            h-[80px]
            bg-gradient-to-r from-teal-600 to-emerald-600
            border-t
            border-t-teal-400
        ">
        <div class="flex items-center w-1/4">
            <div class="flex items-center ml-4">
                <img class="rounded-full shadow-xl" width="50" :src="currentArtist.albumCover">
                <div class="ml-4">
                    <div class="text-[15px] text-white font-bold">
                        {{ currentTrack.name }}
                    </div>
                    <div class="text-[12px] text-teal-200">
                        {{ currentArtist.name }}
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-[40%] mx-auto w-2/4 mb-1">
            <div class="flex-col items-center justify-center">
                <div class="buttons flex items-center justify-center h-[30px]">
                    <button class="mx-3 bg-teal-700 p-2 rounded-full">
                        <SkipBackward fillColor="#FFFFFF" :size="20" @click="useSong.prevSong(currentTrack)" />
                    </button>
                    <button class="p-3 rounded-full mx-4 bg-emerald-400 hover:bg-emerald-300"
                        @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)">
                        <Play v-if="!isPlaying" fillColor="#1E1E1E" :size="24" />
                        <Pause v-else fillColor="#1E1E1E" :size="24" />
                    </button>
                    <button class="mx-3 bg-teal-700 p-2 rounded-full">
                        <SkipForward fillColor="#FFFFFF" :size="20" @click="useSong.nextSong(currentTrack)" />
                    </button>
                </div>

                <div class="flex items-center h-[20px] mt-2">
                    <div v-if="isTrackTimeCurrent" class="text-teal-200 text-[11px] pr-2">{{ isTrackTimeCurrent }}</div>
                    <div ref="seekerContainer" class="w-full relative" @mouseenter="isHover = true"
                        @mouseleave="isHover = false">
                        <input v-model="range" ref="seeker" type="range" class="
                                absolute
                                rounded-full
                                w-full
                                h-1
                                z-40
                                appearance-none
                                bg-opacity-100
                                focus:outline-none
                                accent-emerald-300
                            " :class="{ 'rangeDotHidden': !isHover }">
                        <div class="pointer-events-none absolute h-[3px] z-10 inset-y-0 left-0 w-0"
                            :style="`width: ${range}%;`" :class="isHover ? 'bg-emerald-300' : 'bg-teal-200'" />
                        <div
                            class="absolute h-[3px] z-[-0] inset-y-0 left-0 w-full bg-teal-800 rounded-full" />
                    </div>
                    <div v-if="isTrackTimeTotal" class="text-teal-200 text-[11px] pl-2">{{ isTrackTimeTotal }}</div>
                </div>
            </div>
        </div>

        <div class="flex items-center w-1/4 justify-end pr-6">
            <MusicPlayerVolume />
        </div>
    </div>
</template>

<style scoped>
.rangeDotHidden[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
}
</style>