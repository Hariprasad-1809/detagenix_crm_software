const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["Call", "Meeting", "Email", "WhatsApp", "Follow-up"],
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    ipAddress: String,
    followUpReminder: {
      type: Date,
    },
    interactionAnalysis: {
      sentiment: { type: String, enum: ["Positive", "Neutral", "Negative"], default: "Neutral" },
      summary: String,
      keyActionItems: [String]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);