const express = require("express");
const router = express.Router();

// Dummy Yoga Data (Later, store in MongoDB)
const yogaData = {
  benefits: [
    "Improves flexibility",
    "Enhances muscle strength",
    "Boosts immunity",
    "Reduces stress & anxiety",
    "Promotes better posture",
  ],
  asanas: [
    {
      name: "Ardha Chakrasana",
      description: "Stretches the front upper torso and tones arms.",
      image: "https://example.com/ardha-chakrasana.jpg",
      link: "https://www.artofliving.org/in-en/yoga/yoga-poses/standing-backward-bend",
    },
    {
      name: "Virabhadrasana",
      description: "Increases stamina, strengthens arms, and brings courage.",
      image: "https://example.com/virabhadrasana.jpg",
      link: "https://www.artofliving.org/in-en/yoga/yoga-poses/warrior-pose-virbhadrasana",
    },
  ],
  videos: [
    { title: "Beginner Yoga", videoId: "s2NQhpFGIOg" },
    { title: "Yoga for Stress Relief", videoId: "g_tea8ZNk5A" },
  ],
};

// API Route
router.get("/", (req, res) => {
  res.json(yogaData);
});

module.exports = router;
