import mongoose from "mongoose";

const PixelSchema = new mongoose.Schema(
  {
    x: Number,
    y: Number,
    color: String,
    // counter: Number,
  }
  // { timestamps: true }
);

const Pixel = mongoose.model("Pixel", PixelSchema);

export default Pixel;
