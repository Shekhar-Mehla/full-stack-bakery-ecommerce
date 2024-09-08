import express from "express";

import  {insertProduct}  from "../controllers/productsController.js";
export const productRouter = express.Router();

const routerfunc = () => {
  // productRouter.get("/", getProduct);
  productRouter.post("/", insertProduct);
  // productRouter.patch("/", updateProduct);
  // productRouter.delete("/", deleteProduct);
};
routerfunc();
