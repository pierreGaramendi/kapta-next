import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  start_date: Date,
  end_date: Date,
  owner_id: { type: Schema.Types.ObjectId, ref: "UserKapta", required: true },
  status: { type: String, enum: ["active", "completed", "archived"], default: "active" },
  backlog_id: { type: Schema.Types.ObjectId, ref: "Backlog" },
  sprints: [{ type: Schema.Types.ObjectId, ref: "Sprint" }],
  members: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "UserKapta" },
      role_id: { type: Schema.Types.ObjectId, ref: "Role" },
    },
  ],
});

export const ProjectDocument = mongoose.models.Project || mongoose.model("Project", projectSchema);
