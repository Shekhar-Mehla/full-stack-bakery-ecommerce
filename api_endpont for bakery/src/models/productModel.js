import mongoose from "mongoose";
import { Schema } from "mongoose";
export const bakeryProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespace
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure price is not negative
  },
  category: {
    
    required: true,
  },
  ingredients: [
    {
      ingredient: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  available: {
    type: Boolean,
    default: true, // Default to true if not specified
  },
  
});

// Middleware to update the `updatedAt` field before saving

