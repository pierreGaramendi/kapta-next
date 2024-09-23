import mongoose, { Schema } from "mongoose";

const backlogSprintSchema = new Schema({
  sprint_id: { type: Schema.Types.ObjectId, ref: "Sprint", required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "BacklogItem" }],
});

const BacklogSprint = mongoose.model("BacklogSprint", backlogSprintSchema);
