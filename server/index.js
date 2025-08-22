import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: message }] }]
        })
      }
    );

    const data = await r.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    res.json({ reply });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "chat_failed" });
  }
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`✅ Backend running at http://localhost:${process.env.PORT || 5000}`)
);
