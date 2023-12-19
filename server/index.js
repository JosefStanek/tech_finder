import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import companyRoute from "./Routes/companyRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.EXPRESS_PORT;
const mongoUri = process.env.MONGO_URI;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.get("/", (req, res, next) => {
  return res.end("Hello World");
});
app.use("/company", companyRoute);
mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
