import mongoose from "mongoose";
import { Schema } from "mongoose";
export const bakeryProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespace
  },
  // description: {
  //   type: String,
  //   trim: true
  // },
  // price: {
  //   type: Number,
  //   required: true,
  //   min: 0, // Ensure price is not negative
  // },
  // category: {
  //   type: String,
  //   enum: ['bread', 'cake', 'pastry', 'cookie','muffin'], // Restrict to specific values
  //   required: true,
  // },
  // ingredients: [
  //   {
  //     ingredient: {
  //       type: String,
  //       required: true,
  //     },
  //     quantity: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // available: {
  //   type: Boolean,
  //   default: true, // Default to true if not specified
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now, // Automatically set to the current date
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

// Middleware to update the `updatedAt` field before saving
bakeryProductSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
