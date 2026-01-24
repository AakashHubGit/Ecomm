const express = require("express");
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// Public
router.get("/", async (req, res) => {
  res.json(await Product.find());
});

// Admin only
router.post("/", protect, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.put("/:id", protect, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
});

router.delete("/:id", protect, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
