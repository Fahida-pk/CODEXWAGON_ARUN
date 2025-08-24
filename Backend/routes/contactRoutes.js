import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config();
// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Loaded" : "Missing");

router.post("/", async (req, res) => {
  const { name, phone, email, service, message } = req.body;
  console.log("[POST /api/contact] Data:", req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }

  try {
    const newContact = new Contact({ name, phone, email, service, message });
    await newContact.save();
    console.log("✅ Saved to MongoDB:", newContact);

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.TO_EMAIL,
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
    console.log("✅ Email sent successfully");

    res.status(200).json({ success: true, message: "Form saved to DB and email sent ✅" });

  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ success: false, message: "Something went wrong", error: err.message });
  }
});

export default router;
