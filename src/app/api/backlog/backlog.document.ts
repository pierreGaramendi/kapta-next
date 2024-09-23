import mongoose, { Schema } from "mongoose";

export const backlogItemSchema = new Schema({
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
  //items: [backlogItemSchema],
  items: [{ type: Schema.Types.ObjectId, ref: "BacklogItem" }],
});

export const backlogItemDocument = mongoose.models.BacklogItem || mongoose.model("BacklogItem", backlogItemSchema);
export const BacklogDocument = mongoose.models.Backlog || mongoose.model("Backlog", backlogSchema);
