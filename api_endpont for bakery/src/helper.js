import { categoryCollection } from "./models/tableModel/CategoryModel.js";

export const category_id_getter = async (category_id) => {
  try {
    switch (category_id) {
      case "bread":
        const result = await categoryCollection.findOne({ name: "bread" });
        return result._id;
        // code to be executed if expression === value1
        break;

      default:
        console.log("hello owrld1");
    }
  } catch (error) {}
};
