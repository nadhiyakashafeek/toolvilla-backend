// productModel.js
const mongoose = require("mongoose");

const hardwareToolSchema = new mongoose.Schema({
  itemname: { type: String, required: true},
  description: { type: String, default: "" },
  sku: { type: String, required: true},
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  email: { type: String, required: true },
  stock: { type: Number, default: 0 },
  images: { type: [String], default: [] },
  dimensions: { type: String, default: "" },
  weight: { type: String, default: "" },
});

// Create a compound index on sku and email to ensure uniqueness of products per user
hardwareToolSchema.index({ sku: 1, email: 1 }, { unique: true });
module.exports = mongoose.model("HardwareTool", hardwareToolSchema);
