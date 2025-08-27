import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // hidden Gmail
    pass: process.env.GMAIL_PASS, // app password
  },
});

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  if (!emailRegex.test(email)) return res.status(400).json({ success: false, message: "Invalid email address." });
  if (phone && !phoneRegex.test(phone)) return res.status(400).json({ success: false, message: "Invalid phone number." });

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, phone, email, service, message });
    await newContact.save();

    // Send email
    const mailOptions = {
      from: 'Codex Wagon <no-reply@codexwagon.in>', // hide Gmail
      to: process.env.TO_EMAIL,                     // recipient
      replyTo: email,                               // user's email for reply
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Form saved to DB and email sent ✅" });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ success: false, message: "Something went wrong", error: err.message });
  }
});

export default router;
