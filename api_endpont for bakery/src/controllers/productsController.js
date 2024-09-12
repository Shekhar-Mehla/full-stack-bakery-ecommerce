import { ProductsCollection } from "../models/tableModel/productModel.js";
import { category_id_getter } from "../helper.js";

// insert productTable into database
export const insertProduct = async (req, res) => {
  try {
    const categoryId = await category_id_getter(req.body.category_id);
    req.body.category_id = categoryId;
    console.log(req.body.category_id);
    const product = await ProductsCollection(req.body).save({ new: true });
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

// get all products
export const getProduct = async (req, res) => {
  try {
    const product = await ProductsCollection.find();
    console.log(product);
    product
      ? res.status(200).json({
          status: "successfull",
          message: "product list is reterieved succefully",
          product,
        })
      : res.status(200).json({
          status: "unsuccessfull",
          message: "unable to get product list check for database connection",
        });
  } catch (error) {
    res.status(200).json({
      status: error,
      message: error.message,
    });
  }
};
// get product by category
export const getcakes = (req, res) => {
  res.send(req.params);
};
