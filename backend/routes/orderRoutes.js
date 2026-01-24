const express = require("express");
const Order = require("../models/Order");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// Customer places order
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

// Admin views orders
router.get("/", protect, async (req, res) => {
  res.json(await Order.find());
});

// Update order status
router.put("/:id", protect, async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
});

module.exports = router;
