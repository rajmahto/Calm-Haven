const express = require("express");
const axios = require("axios");

const router = express.Router();

// Fetch real meditation videos from YouTube API
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          q: "guided meditation",
          type: "video",
          maxResults: 6,
          key: process.env.YOUTUBE_API_KEY, // ✅ Use Environment Variable
        },
      }
    );

    const videos = response.data.items.map((video) => ({
      title: video.snippet.title,
      videoId: video.id.videoId,
      thumbnail: video.snippet.thumbnails.high.url,
    }));

    console.log("✅ Sent Videos Data to Frontend:", videos); // ✅ Check Data
    res.json(videos);
  } catch (error) {
    console.error("❌ Error fetching videos:", error.response?.data || error);
    res.status(500).json({ message: "Error fetching videos", error });
  }
});


module.exports = router;
