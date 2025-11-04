import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import passport from "passport";
import "./config/passport.js";

import authRoutes from "./routes/auth.js";
import searchRoutes from "./routes/search.js";
import historyRoutes from "./routes/history.js";
import topSearchRoutes from "./routes/topSearches.js";

const app = express();

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Trust proxy (VERY IMPORTANT for Render HTTPS cookies)
app.set("trust proxy", 1);

// ✅ CORS (keep origin EXACT — no trailing slash)
app.use(
  cors({
    origin: "https://mern-image-search-pied.vercel.app",
    credentials: true, // allow cookies
  })
);

app.use(express.json());

// ✅ Session (must come BEFORE passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    }),
    cookie: {
      secure: true, // HTTPS only
      sameSite: "none", // allows cross-site cookies
    },
  })
);

// ✅ Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use("/auth", authRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/top-searches", topSearchRoutes);

// ✅ Base route
app.get("/", (req, res) => {
  res.send("OAuth Server running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
