import mongoose from "mongoose";
import { Schema } from "mongoose";

export const productSchema = new Schema({
  name: {
    type: String,
  },
  description: { type: String },
  category_id: { type: Schema.Types.ObjectId, ref: "ProductCategory" },
  price: { type: Number },
  size_weight: { type: String },
  ingredients: { type: String },

  stock_quantity: { type: Number },

  image_url: { type: String },
  is_seasonal: { type: String, default: false },
});
