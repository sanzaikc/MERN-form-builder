import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

import { connectDB } from "./config/db.js";

import formRouter from "./routes/formRoutes.js";
import submissionRouter from "./routes/submissionRoutes.js";

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/forms", formRouter);
app.use("/submissions", submissionRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
