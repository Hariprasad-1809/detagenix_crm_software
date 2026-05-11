const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: String,
  value: Number,
  stage: {
    type: String,
    enum: ["Prospecting", "Qualification", "Proposal", "Negotiation", "Closed Won", "Closed Lost"],
    default: "Prospecting"
  },
  aiCloseProbability: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  expectedCloseDate: Date,
  actualCloseDate: Date,
  revenuePrediction: {
    monthlyExpected: Number,
    actualRecognized: Number
  }
}, { timestamps: true });

module.exports = mongoose.model("Deal", dealSchema);
