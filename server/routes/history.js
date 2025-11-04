import express from "express";
import Search from "../models/Search.js";

const router = express.Router();

// GET user search history
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await Search.find({ userId })
      .sort({ timestamp: -1 })
      .limit(10); // latest 10 searches
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

export default router;
