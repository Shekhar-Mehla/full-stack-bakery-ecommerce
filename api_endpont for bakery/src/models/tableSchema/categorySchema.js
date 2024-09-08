import mongoose from "mongoose";

const schema = {
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  parentCategoryId: {
    type: String,
  },
};
export const categorySchema = new mongoose.Schema(schema);
