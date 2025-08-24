const express = require("express");
const axios = require("axios");

const router = express.Router();

const SPOTIFY_CLIENT_ID =
  process.env.SPOTIFY_CLIENT_ID || "f6e27f4baf2f46c38987e1584b512ad4";
const SPOTIFY_CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET || "78751c4c6fc545a0b78dd186896fe3cb";
const PLAYLIST_ID = "37i9dQZF1DX0jgyAiPl8Af"; // ✅ Ensure this is correct!

// Function to Get Spotify Token
const getSpotifyToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error(
      "❌ Spotify Token Error:",
      error.response?.data || error.message
    );
    return null;
  }
};

// Route to Fetch Playlist Data
router.get("/", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    if (!token) {
      return res.status(500).json({ message: "Spotify authentication failed" });
    }

    // Fetch the Playlist
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // Check if playlist contains tracks
    if (!response.data.tracks || !response.data.tracks.items) {
      return res.status(500).json({ message: "No tracks found in playlist." });
    }

    // Extract Playlist Data
    const playlist = {
      name: response.data.name,
      url: response.data.external_urls.spotify,
      image: response.data.images?.[0]?.url || "",
      tracks: response.data.tracks.items
        .filter((item) => item.track && item.track.name) // Ensure track exists
        .map((item) => ({
          title: item.track.name,
          artist: item.track.artists.map((artist) => artist.name).join(", "),
          preview_url: item.track.preview_url || null, // Some tracks don’t have previews
        })),
    };

    res.json(playlist);
  } catch (error) {
    console.error(
      "❌ Error Fetching Spotify Playlist:",
      error.response?.data || error.message
    );
    res.status(500).json({ message: "Error fetching Spotify playlist", error });
  }
});

module.exports = router;
