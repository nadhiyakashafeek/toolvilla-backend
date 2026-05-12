// productModel.js
const mongoose = require('mongoose');

const hardwareToolSchema = new mongoose.Schema({
  itemname: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  sku: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  images: { type: [String], default: [] },
  dimensions: { type: String, default: "" },
  weight: { type: String, default: "" },
});

module.exports = mongoose.model('HardwareTool', hardwareToolSchema);