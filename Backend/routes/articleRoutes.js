const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const NEWSAPI_KEY = process.env.NEWSAPI_KEY;
    if (!NEWSAPI_KEY) {
      return res.status(500).json({ message: "NewsAPI key is missing!" });
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=meditation OR stress+relief&apiKey=${NEWSAPI_KEY}`
    );


    res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ message: "Error fetching articles", error });
  }
});

module.exports = router;
