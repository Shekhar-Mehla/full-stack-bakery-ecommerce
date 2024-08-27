import express from "express";

import { getTask } from "../controllers/productController.js";
export const router = express.Router();

const routerfunc = () => {
  router.get("/", getTask);
  router.post("/");
  router.patch("/");
  router.delete("/");
};
routerfunc();
