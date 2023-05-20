import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
