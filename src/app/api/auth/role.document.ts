import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
});

const Role = mongoose.model("Role", roleSchema);
