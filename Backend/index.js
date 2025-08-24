import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

console.log("✅ RESEND_API_KEY loaded:", process.env.RESEND_API_KEY ? true : false);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection failed:", err));
