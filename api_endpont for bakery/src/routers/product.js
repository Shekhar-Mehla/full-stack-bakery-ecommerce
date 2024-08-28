import express from "express";

import {
  getProduct,
  updateProduct,
  addProduct,
  deleteProduct,
} from "../controllers/cakeController.js";
export const router = express.Router();

const routerfunc = () => {
  router.get("/", getProduct);
  router.post("/", addProduct);
  router.patch("/", updateProduct);
  router.delete("/", deleteProduct);
};
routerfunc();
