import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.VITE_SPOTIFY_CLIENT_ID,
  redirectUri: process.env.VITE_SPOTIFY_REDIRECT_URI
});

export default spotifyApi;
