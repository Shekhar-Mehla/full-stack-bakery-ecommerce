import { categoryCollection } from "./models/tableModel/CategoryModel.js";

export const category_id_getter = async (category_id) => {
  console.log(category_id);
  try {
    switch (category_id) {
      case "Bread":
        const bread = await categoryCollection.findOne({ name: "Bread" });
        return bread._id;
        // code to be executed if expression === value1
        break;
      case "Cake":
        const cake = await categoryCollection.findOne({ name: "Cake" });
        return cake._id;
        // code to be executed if expression === value1
        break;
      case "Muffin":
        const muffin = await categoryCollection.findOne({ name: "Muffin" });
        return muffin._id;
        // code to be executed if expression === value1
        break;
      case "Cookies":
        const cookies = await categoryCollection.findOne({ name: "Cookies" });
        return cookies._id;
        // code to be executed if expression === value1
        break;
      case "Pastries":
        const pastries = await categoryCollection.findOne({ name: "Pastries" });
        return pastries._id;
        // code to be executed if expression === value1
        break;

      default:
        console.log("hello owrld1");
    }
  } catch (error) {}
};
