import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
  },
  {
    timestamps: true,
  }
);
