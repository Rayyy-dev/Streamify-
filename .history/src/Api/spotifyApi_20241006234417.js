import axios from 'axios';

const spotifyApi = {
  search: async (query) => {
    const response = await axios.get('/api/spotify', {
      params: { endpoint: 'search', q: query }
    });
    return response.data;
  },
  getRecommendations: async (seedTracks) => {
    const response = await axios.get('/api/spotify', {
      params: { endpoint: 'recommendations', seed_tracks: seedTracks.join(',') }
    });
    return response.data;
  },
  // Add more methods as needed
};

export default spotifyApi;
