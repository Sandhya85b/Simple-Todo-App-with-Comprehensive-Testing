const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {type:String, enum: ["pending", "completed"], default: "pending" },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;
