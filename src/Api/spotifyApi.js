import axios from 'axios';

const spotifyApi = {
  search: async (query) => {
    try {
      const response = await axios.get('/api/spotify', {
        params: { endpoint: 'search', q: query }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching tracks:', error);
      throw error;
    }
  },
  getRecommendations: async (seedTracks) => {
    try {
      const response = await axios.get('/api/spotify', {
        params: { endpoint: 'recommendations', seed_tracks: seedTracks.join(',') }
      });
      return response.data;
    } catch (error) {
      console.error('Error getting recommendations:', error);
      throw error;
    }
  },
};

export default spotifyApi;
