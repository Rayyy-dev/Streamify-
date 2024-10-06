import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

let tokenExpirationTime = 0;

async function getAccessToken() {
  if (Date.now() > tokenExpirationTime) {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
    tokenExpirationTime = Date.now() + data.body['expires_in'] * 1000;
  }
  return spotifyApi.getAccessToken();
}

export default async function handler(req, res) {
  try {
    await getAccessToken();
    
    const { method, query } = req;
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
          // Add more endpoints as needed
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
}
