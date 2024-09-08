import { categoryCollection } from "../models/tableModel/CategoryModel.js";

// crud operation for category
export const createCategory = async (req, res) => {
  try {
    const category = await categoryCollection(req.body).save();
    category?._id
      ? res.status(200).json({
          status: "successfull",
          message: "product category is created succefully",
        })
      : res.status(200).json({
          status: "unsuccessfull",
          message: "product category is not inserted please try again later.",
        });
  } catch (error) {
    res.status(200).json({
      status: error,
      message: error.message,
    });
  }
};
