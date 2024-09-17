import mongoose, { Document, Schema } from "mongoose";

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  start_date: Date,
  end_date: Date,
  owner_id: { type: Schema.Types.ObjectId, ref: "Member", required: true },
  status: { type: String, enum: ["active", "completed", "archived"], default: "active" },
  backlog_general_id: { type: Schema.Types.ObjectId, ref: "BacklogGeneral" },
  sprints: [{ type: Schema.Types.ObjectId, ref: "Sprint" }],
  members: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Member" },
      role_id: { type: Schema.Types.ObjectId, ref: "Role" },
    },
  ],
});

const ProjectDocument = mongoose.model("Project", projectSchema);
export default mongoose.models.Project || ProjectDocument;
