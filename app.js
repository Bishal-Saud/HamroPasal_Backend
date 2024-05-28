import express from "express";
import dbConnect from "./config/dbConnect.js";
import productRoutes from "./routes/product.router.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorMiddleware from "./middleware/error.middleware.js";
const app = express();
import cors from "cors";

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/p1/product", productRoutes);

dbConnect();
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.get("*", (req, res) => {
  res.send("OOPS ! Page Not Found");
});

app.use(errorMiddleware);

export default app;
