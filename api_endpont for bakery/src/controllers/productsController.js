import { ProductsCollection } from "../models/tableModel/productModel.js";

// insert productTable into database
export const insertProduct = async(req, res) => {
  const result =await ProductsCollection(req.body).save();
  res.send("product is crreated succesfully");
};
