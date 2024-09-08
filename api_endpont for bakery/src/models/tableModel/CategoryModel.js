import mongoose from "mongoose";
import {categorySchema} from "../tableSchema/categorySchema.js"
export const categoryCollection = new mongoose.model("ProductCategory", categorySchema)

