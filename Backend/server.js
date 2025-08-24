const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const contentRoutes = require("./routes/contentRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const articleRoutes = require("./routes/articleRoutes");
const bookRoutes = require("./routes/bookRoutes");
const meditationRoutes = require("./routes/meditationRoutes");
const musicRoutes = require("./routes/musicRoutes");
const contactRoutes = require("./routes/contactRoutes"); // ⬅️ Added Contact API
const aboutRoutes = require("./routes/aboutRoutes"); // ⬅️ Added About API
const yogaRoutes = require("./routes/yogaRoutes");
const chatRoutes = require("./routes/chatRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/meditation", meditationRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/contact", contactRoutes); // ⬅️ New Route for Contact Us Messages
app.use("/api/about", aboutRoutes); // ⬅️ New Route for About Us Data
app.use("/api/yoga", yogaRoutes);
app.use("/api/chat", chatRoutes);

// Root API Route
app.get("/", (req, res) => {
  res.send("Calm Haven API is running...");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
