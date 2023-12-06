import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
});

const Project = mongoose.model("project", projectSchema);

export default Project;
