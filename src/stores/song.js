import { defineStore } from 'pinia';
import artist from '../artist.json';

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null
  }),
  actions: {
    loadSong(artist, track) {
      this.currentArtist = artist;
      this.currentTrack = track;

      // Stop and reset the current audio if it's playing
      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.isPlaying = false;
        this.audio.src = '';
      }

      // Create a new Audio object and load the new song
      this.audio = new Audio();
      this.audio.src = track.path;

      // Play the song after a short delay
      setTimeout(() => {
        this.isPlaying = true;
        this.audio.play();
      }, 200);
    },

    playOrPauseSong() {
      if (this.audio.paused) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPlaying = false;
        this.audio.pause();
      }
    },

    playOrPauseThisSong(artist, track) {
      // If it's a different song, load it, otherwise toggle play/pause
      if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
        this.loadSong(artist, track);
        return;
      }
      this.playOrPauseSong();
    },

    prevSong(currentTrack) {
      // Prevent errors by ensuring the track ID is greater than 1
      if (currentTrack.id > 1) {
        let track = artist.tracks[currentTrack.id - 2];
        this.loadSong(artist, track);
      } else {
        // If at the first track, loop back to the last track
        let track = artist.tracks[artist.tracks.length - 1];
        this.loadSong(artist, track);
      }
    },

    nextSong(currentTrack) {
      // Check if we are at the last track
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0]; // Loop to the first track
        this.loadSong(artist, track);
      } else {
        let track = artist.tracks[currentTrack.id]; // Next track
        this.loadSong(artist, track);
      }
    },

    playFromFirst() {
      this.resetState();
      let track = artist.tracks[0];
      this.loadSong(artist, track);
    },

    resetState() {
      this.isPlaying = false;
      this.audio = null;
      this.currentArtist = null;
      this.currentTrack = null;
    }
  },
  persist: true
});
