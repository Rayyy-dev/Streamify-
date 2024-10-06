import axios from 'axios';

export default async function handler(req, res) {
    try {
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

        // Encode the client ID and secret as Base64
        const authToken = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        // Request access token using Client Credentials Flow
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${authToken}`,
                },
            }
        );

        const accessToken = response.data.access_token;

        // Use this access token to make a request to the Spotify API (e.g., get new releases)
        const spotifyResponse = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // Return the new releases to the frontend
        res.status(200).json(spotifyResponse.data);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong while fetching public data.' });
    }
}
