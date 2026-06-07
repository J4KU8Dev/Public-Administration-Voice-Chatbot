import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Brak wiadomości" });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-002",
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    return res.json({ reply: text });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ reply: "Błąd Gemini API" });
  }
});

app.listen(3000, () => {
  console.log("Backend działa na http://localhost:3000");
});