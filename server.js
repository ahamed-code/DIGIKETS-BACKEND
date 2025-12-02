import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./sendmail.js";

dotenv.config();

const app = express();

// Allow Vercel frontend
app.use(
  cors({
    origin: [
      "https://digikets-frontend.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000"
    ],
    methods: ["POST", "GET"],
    credentials: true,
  })
);


app.use(express.json());

// Test route to check backend is live
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Backend is reachable" });
});

// Contact form route
app.post("/api/contact", sendMail);

// Default root route
app.get("/", (req, res) => {
  res.send("DIGIKETS BACKEND RUNNING ✔");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
