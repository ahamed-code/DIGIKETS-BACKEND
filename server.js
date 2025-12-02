import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./sendMail.js";

dotenv.config();

const app = express();

// ✅ Allow your Vercel frontend to access backend
app.use(
  cors({
    origin: "https://digikets-frontend.vercel.app", // your frontend URL
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/contact", sendMail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
