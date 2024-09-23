import mongoose, { Schema } from "mongoose";

const permissionSchema = new Schema({
  name: { type: String, required: true },
  description: String,
});

const Permission = mongoose.model("Permission", permissionSchema);
