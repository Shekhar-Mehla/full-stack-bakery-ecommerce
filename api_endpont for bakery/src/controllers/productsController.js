import { ProductsCollection } from "../models/tableModel/productModel.js";

// insert productTable into database
export const insertProduct = async (req, res) => {
  try {
    const product = await ProductsCollection(req.body).save();
    console.log(product._id);
    product?._id
      ? res.status(200).json({
          status: "successfull",
          message: "product is inserted succefully",
        })
      : res.status(200).json({
          status: "unsuccessfull",
          message: "product is not inserted please try again later.",
        });
  } catch (error) {
    res.status(200).json({
      status: error,
      message: error.message,
    });
  }
};
