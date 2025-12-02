import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./sendMail.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", sendMail);

app.listen(5000, () => {
  console.log("Backend server running on port 5000");
});
