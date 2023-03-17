import express from "express";
import { routes } from "./routes";
import { db } from "./db/db";
import config from "../config/config";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
dotenv.config();

const app = express();

// body-parser can also be used instead of below two lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,AuthToken"
  );
  next();
});
app.use("/", userRoutes);
app.use("/", authRoutes);

routes.forEach((route) => app[route.method](route.path, route.handler));

const start = async () => {
  await db.connect(process.env.MONGODB_URL);
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(config.port, () => {
    console.log("Server is listening on Port ", config.port);
  });
};
start();
