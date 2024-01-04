import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import companyRoute from "./Routes/companyRoutes.js";
import authRoute from "./Routes/authRoutes.js";
import listRoute from "./Routes/listRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const port = process.env.EXPRESS_PORT;
const mongoUri = process.env.MONGO_URI;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://mern-test-app.ordered.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(cookieParser());
app.get("/", (req, res, next) => {
  return res.end("Hello World");
});
app.use("/company", companyRoute);
app.use("/auth", authRoute);
app.use("/list", listRoute);
app.use(express.static("Images"));
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
