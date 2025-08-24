const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define Message Schema
const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.model("ContactMessage", ContactMessageSchema);

// POST: Store Contact Message in Database
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error sending message", error });
  }
});

// GET: Retrieve All Contact Messages
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving messages", error });
  }
});


module.exports = router;
