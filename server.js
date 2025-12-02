import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./sendMail.js";

dotenv.config();

const app = express();

// CORS
app.use(cors({
  origin: "https://digikets-frontend.vercel.app", // your frontend URL
}));

// Body parser
app.use(express.json());

// Routes
app.post("/api/contact", sendMail);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
