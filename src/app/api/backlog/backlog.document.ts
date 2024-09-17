import mongoose, { Schema } from "mongoose";

const backlogItemSchema = new Schema({
  type: { type: String, enum: ["Epic", "Story", "Task", "Test", "Bug"], required: true },
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  status: { type: String, enum: ["open", "in progress", "closed"], default: "open" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const backlogSchema = new Schema({
  project_id: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  items: [backlogItemSchema],
});

export const BacklogDocument = mongoose.models.Backlog || mongoose.model("Backlog", backlogSchema);
