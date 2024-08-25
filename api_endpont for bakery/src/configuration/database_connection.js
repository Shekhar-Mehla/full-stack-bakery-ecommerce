import mongoose from "mongoose";
const connection_string = "mongodb://localhost:27017/bakery_db";

export const connection = () => {
  try {
    const connection_db = mongoose.connect(connection_string);
    connection_db && console.log("db is ocnnected");
  } catch (error) {
    console.log(error.message);
  }
};
