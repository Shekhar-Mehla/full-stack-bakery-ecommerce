import express from "express";
import { createCategory } from "../controllers/CategoryController.js";

export const categoryRouter = express.Router();

const routerfunc = () => {
  // categoryRouter.get("/", getProduct);
  categoryRouter.post("/", createCategory);
  //categoryRouter.patch("/", updateProduct);
  // categoryRouter.delete("/", deleteProduct);
};
routerfunc();
