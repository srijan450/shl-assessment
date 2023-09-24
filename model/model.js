import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  technologies: { type: String },
  frontend: { type: String },
  backend: { type: String },
  databases: { type: String },
  infrastructre: { type: String },
});

const projectModel = model("Project", projectSchema);

export default projectModel;
