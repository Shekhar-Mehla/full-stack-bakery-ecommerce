import express from "express";

import {
  insertProduct,
  getProduct,
  getcakes,
} from "../controllers/productsController.js";
export const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.get("/:cakes", getcakes);

productRouter.post("/", insertProduct);
// productRouter.patch("/", updateProduct);
// productRouter.delete("/", deleteProduct);
