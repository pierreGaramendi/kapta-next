import mongoose, { Document, Schema } from "mongoose";

interface IBanner extends Document {
  title: string;
  description?: string;
  imageUrl: string;
  linkUrl?: string;
  startDate?: Date;
  endDate?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    linkUrl: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

//export const mongoose.models.Banner || BannerDocument = mongoose.model<IBanner>('Banner', BannerSchema);
export default mongoose.models.Banner || mongoose.model<IBanner>("Banner", BannerSchema);
