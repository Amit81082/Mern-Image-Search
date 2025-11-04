import dotenv from "dotenv";
dotenv.config();



import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import "./config/passport.js";
import authRoutes from "./routes/auth.js";
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));




app.use(express.json());

import searchRoutes from "./routes/search.js";
app.use("/api/search", searchRoutes);

import historyRoutes from "./routes/history.js";
app.use("/api/history", historyRoutes);

import topSearchRoutes from "./routes/topSearches.js";
app.use("/api/top-searches", topSearchRoutes);

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true only if using https
      httpOnly: false,
      sameSite: "lax",
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("OAuth Server running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
