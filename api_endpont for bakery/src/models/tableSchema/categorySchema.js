import mongoose from "mongoose";
import { Schema } from "mongoose";
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
export const categorySchema = new Schema(schema);
