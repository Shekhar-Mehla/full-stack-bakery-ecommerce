import mongoose from "mongoose";
const connection_string = "mongodb://localhost:27017/bakery_db";

export const connection = async () => {
  try {
    const connection_db = await mongoose.connect(connection_string);
    connection_db && console.log("db is connected");
  } catch (error) {
    console.log(error.message);
  }
};
