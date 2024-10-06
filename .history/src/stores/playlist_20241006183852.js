import { defineStore } from 'pinia'

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    playlists: [
      { id: 1, name: 'Chill Vibes', songs: [] },
      { id: 2, name: 'Workout Mix', songs: [] },
      { id: 3, name: 'Study Session', songs: [] },
      { id: 4, name: 'Road Trip Tunes', songs: [] },
    ],
  }),
  actions: {
    createPlaylist(name) {
      const newId = this.playlists.length > 0 ? Math.max(...this.playlists.map(p => p.id)) + 1 : 1
      this.playlists.push({ id: newId, name, songs: [] })
    },
    deletePlaylist(id) {
      const index = this.playlists.findIndex(p => p.id === id)
      if (index !== -1) {
        this.playlists.splice(index, 1)
      }
    },
    addSongToPlaylist(playlistId, song) {
      const playlist = this.playlists.find(p => p.id === playlistId)
      if (playlist && !playlist.songs.some(s => s.id === song.id)) {
        playlist.songs.push(song)
      }
    },
    removeSongFromPlaylist(playlistId, songId) {
      const playlist = this.playlists.find(p => p.id === playlistId)
      if (playlist) {
        const index = playlist.songs.findIndex(s => s.id === songId)
        if (index !== -1) {
          playlist.songs.splice(index, 1)
        }
      }
    },
    getPlaylistById(id) {
      return this.playlists.find(p => p.id === parseInt(id))
    }
  },
})
