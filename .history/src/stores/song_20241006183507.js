import { defineStore } from 'pinia';
import artist from '../artist.json';

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentTrack: null,
    currentArtist: null,
    // Add more state as needed
  }),
  actions: {
    playSong(song) {
      // Implement play logic
    },
    pauseSong() {
      // Implement pause logic
    },
    nextSong() {
      // Implement next song logic
    },
    prevSong() {
      // Implement previous song logic
    },
    searchSongs(query) {
      // Implement search logic (this could be an API call in a real app)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Song 1', artist: 'Artist 1' },
            { id: 2, name: 'Song 2', artist: 'Artist 2' },
            // Add more mock results
          ].filter(song => 
            song.name.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase())
          ))
        }, 300)
      })
    }
  },
  persist: true
});
