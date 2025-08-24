const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// ✅ User Registration (Ensures password is hashed)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Let Mongoose handle password hashing (Remove manual hashing)
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Fix Login Issue
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("🔍 Login Request Received:", { email, password });

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ No user found with this email.");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("✅ User found:", user.email);
    console.log("🔑 Stored Hashed Password:", user.password);

    // ✅ Fix bcrypt password comparison
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔄 Password Match Result:", isMatch);

    if (!isMatch) {
      console.log("❌ Password does not match.");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("🎉 Login successful for:", user.email);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// ✅ Get User Info
const authMiddleware = require("../middleware/authMiddleware");

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
