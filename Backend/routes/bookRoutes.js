const express = require("express");
const axios = require("axios");

const router = express.Router();

// Fetch books from Open Library API
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://openlibrary.org/search.json?q=mental+health&limit=6"
    );

    const books = response.data.docs.map((book) => ({
      title: book.title,
      author: book.author_name ? book.author_name[0] : "Unknown",
      year: book.first_publish_year || "N/A",
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150?text=No+Cover",
    }));


    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Error fetching books", error });
  }
});

module.exports = router;
