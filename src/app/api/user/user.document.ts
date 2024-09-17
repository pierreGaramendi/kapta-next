import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});

export const UserDocument = mongoose.models.UserKapta || mongoose.model("UserKapta", userSchema);
