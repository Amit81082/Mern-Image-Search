import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import Search from "../models/Search.js";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { term, userId } = req.body;
    await Search.create({ userId, term });
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${term}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    res.json({
      message: `You searched for "${term}"`,
      results: response.data.results,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

export default router;
