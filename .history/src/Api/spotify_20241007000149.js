import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.VITE_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.VITE_SPOTIFY_REDIRECT_URI
});

async function getAccessToken() {
  try {
    // Get an access token
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (error) {
    console.error('Error getting access token:', error);
  }
}

export default async (req, res) => {
  const { method, query } = req;

  try {
    // Get an access token
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);

    let result;
    switch (method) {
      case 'GET':
        switch (query.endpoint) {
          case 'search':
            result = await spotifyApi.searchTracks(query.q);
            break;
          case 'recommendations':
            result = await spotifyApi.getRecommendations({ seed_tracks: query.seed_tracks });
            break;
          default:
            return res.status(400).json({ error: 'Invalid endpoint' });
        }
        break;
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }

    res.status(200).json(result.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
