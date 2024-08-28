import { cakeCollection } from "../models/Cakemodel.js";

export const getProduct = async (req, res) => {
  const result = await cakeCollection.find();
  return res.status(200).json({ result });
};
export const updateProduct = async (req, res) => {
  try {
    const result = cakeCollection(req.body).save();
    return res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = async (req, res) => {
  try {
    const result = cakeCollection(req.body).save();
    return res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (req, res) => {
  res.send("hello here is the delete");
};
