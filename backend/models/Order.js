const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    customerName: String,
    phone: String,
    address: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
