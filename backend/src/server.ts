import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import replaceRoute from "./routes/replace";
import formulasRoute from "./routes/formulas";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.use("/replace", replaceRoute);
app.use("/formulas", formulasRoute);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
