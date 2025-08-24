const express = require("express");
const router = express.Router();

const teamMembers = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    linkedin: "https://linkedin.com/in/janesmith",
    github: "https://github.com/janesmith",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alex Johnson",
    role: "Backend Engineer",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    linkedin: "https://linkedin.com/in/emilydavis",
    github: "https://github.com/emilydavis",
    image: "https://via.placeholder.com/150",
  },
];

// API Route to get team members
router.get("/", (req, res) => {
  res.json(teamMembers);
});

module.exports = router;
