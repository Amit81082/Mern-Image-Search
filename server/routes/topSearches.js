import express from "express";
import Search from "../models/Search.js";

const router = express.Router();

// GET top 5 most searched terms
router.get("/", async (req, res) => {
  try {
    const topSearches = await Search.aggregate([
      { $group: { _id: "$term", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);
    res.json(topSearches);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch top searches" });
  }
});

export default router;
