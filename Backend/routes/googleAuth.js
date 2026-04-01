import express from "express";
import fetch from "node-fetch";
import User from "../models/User.js";

const router = express.Router();

// POST /api/google-login
router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;

    // 🔥 Google token verify
    const googleRes = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );

    const data = await googleRes.json();

    const { email, name, picture } = data;

    if (!email) {
      return res.status(400).json({ success: false, message: "Invalid token" });
    }

    // 🔍 Check DB
    let user = await User.findOne({ email });

    if (!user) {
      // New user
      user = await User.create({ name, email, picture });
      console.log("✅ New user:", email);
    } else {
      console.log("🔁 Existing user:", email);
    }

    res.json({
      success: true,
      user
    });

  } catch (err) {
    console.error("❌ Google login error:", err);
    res.status(500).json({ success: false, message: "Login failed" });
  }
});

export default router;