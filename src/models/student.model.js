import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});

export default mongoose.model("Student", StudentSchema)