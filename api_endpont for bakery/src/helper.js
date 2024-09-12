import { categoryCollection } from "./models/tableModel/CategoryModel.js";

export const category_id_getter = async (category_id) => {
  console.log(category_id);
  try {
    switch (category_id) {
      case "breads":
        const bread = await categoryCollection.findOne({ name: "breads" });
        return bread._id;
        // code to be executed if expression === value1
        break;
      case "cake":
        const cake = await categoryCollection.findOne({ name: "Cakes" });
        return cake._id;
        // code to be executed if expression === value1
        break;
      case "muffins":
        const muffin = await categoryCollection.findOne({ name: "muffins" });
        return muffin._id;
        // code to be executed if expression === value1
        break;
      case "cookies":
        const cookies = await categoryCollection.findOne({ name: "cookies" });
        return cookies._id;
        // code to be executed if expression === value1
        break;
      case "pastries":
        const pastries = await categoryCollection.findOne({ name: "pastries" });
        return pastries._id;
        // code to be executed if expression === value1
        break;

      default:
        console.log("no category find");
    }
  } catch (error) {}
};
