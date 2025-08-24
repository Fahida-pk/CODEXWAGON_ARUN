import express from "express";
import Contact from "../models/Contact.js";
import { Resend } from "resend";

const router = express.Router();

let resend = null;
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== "") {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log("✅ Resend initialized");
} else {
  console.error("❌ RESEND_API_KEY missing. Emails will not be sent.");
}

router.post("/", async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, phone, email, service, message });
    await newContact.save();

    // Send email
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL,
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
        });
        console.log("✅ Email sent successfully!");
      } catch (err) {
        console.error("❌ Email failed:", err);
      }
    }

    res.status(200).json({ success: true, message: "Form submitted successfully! Database saved and email sent." });

  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ success: false, message: "Something went wrong while saving the form." });
  }
});

export default router;
