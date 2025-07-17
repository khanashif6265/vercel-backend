const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST: Submit form
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User submitted successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all users (Admin Panel)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
