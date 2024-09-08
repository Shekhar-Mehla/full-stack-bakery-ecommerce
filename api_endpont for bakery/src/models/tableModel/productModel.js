import mongoose from "mongoose";
// import product schema to create the product table.

import { productSchema } from "../tableSchema/ProductSchema.js";


export const ProductsCollection = new mongoose.model("Products", productSchema);
