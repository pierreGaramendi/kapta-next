import mongoose, { Schema } from "mongoose";

const listSchema = new Schema({
    name: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: "BacklogItem" }],
  });

const sprintSchema = new Schema({
  project_id: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  name: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  backlog_sprint_id: { type: Schema.Types.ObjectId, ref: "BacklogSprint" },
  lists: [listSchema],
});

export const SprintDocument = mongoose.models.Sprint || mongoose.model("Sprint", sprintSchema);
