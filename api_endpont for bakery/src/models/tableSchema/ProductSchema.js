import mongoose from "mongoose";

const product = {
  name: {
    type: String,
  },
  description: { type: String },
  // category_id,
  price: { type: Number },
  size_weight: { type: String },
  ingredients: { type: String },

  stock_quantity: { type: Number },

  image_url: { type: String },
  is_seasonal: { type: String, default: false },
};

export const productSchema = new mongoose.Schema(product);
