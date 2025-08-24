const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY; // Ensure it's in your .env file

// AI Chat Endpoint
router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // Use a valid model
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error("AI Chat Error:", error.response?.data || error);
    res
      .status(500)
      .json({ response: "Sorry, I'm unable to respond right now." });
  }
});

module.exports = router;
