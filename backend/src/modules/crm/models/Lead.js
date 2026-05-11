const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  source: String,
  status: {
    type: String,
    enum: ["New", "Contacted", "Qualified", "Lost"],
    default: "New"
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium"
  },
  classification: {
    type: String,
    enum: ["Hot", "Warm", "Cold"],
    default: "Warm"
  },
  consentCompliance: {
    type: Boolean,
    default: false
  },
  aiScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Lead", leadSchema);
