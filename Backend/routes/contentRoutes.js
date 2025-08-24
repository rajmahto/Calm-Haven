const express = require("express");
const router = express.Router();

const meditationSessions = [
  {
    id: 1,
    title: "5-Minute Mindfulness",
    duration: "5 min",
    type: "meditation",
  },
  {
    id: 2,
    title: "Deep Breathing Exercise",
    duration: "10 min",
    type: "meditation",
  },
];

const musicTracks = [
  { id: 1, title: "Calm Ocean Waves", duration: "3 min", type: "music" },
  { id: 2, title: "Relaxing Piano", duration: "4 min", type: "music" },
];

// Get Meditation Sessions
router.get("/meditation", (req, res) => {
  res.json(meditationSessions);
});

// Get Music Tracks
router.get("/music", (req, res) => {
  res.json(musicTracks);
});

module.exports = router;
