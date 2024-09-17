import mongoose, { Schema } from "mongoose";
export const UserModelName = "UserKapta";
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});

const userDocument = mongoose.model(UserModelName, userSchema);
export default mongoose.models.User || userDocument;
