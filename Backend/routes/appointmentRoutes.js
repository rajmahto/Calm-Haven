const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Appointment = require("../models/Appointment");

const router = express.Router();

// Create an appointment
router.post("/book", authMiddleware, async (req, res) => {
  const { doctorName, date, time } = req.body;

  try {
    const appointment = new Appointment({
      userId: req.user.id,
      doctorName,
      date,
      time,
    });

    await appointment.save();
    res
      .status(201)
      .json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all appointments for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
