const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
    },
    company: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "lost"],
      default: "new",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    renewalProbability: {
      type: Number,
      min: 0,
      max: 100,
      default: 50
    },
    relationshipHealthScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 80
    },
    churnRisk: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Low"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);