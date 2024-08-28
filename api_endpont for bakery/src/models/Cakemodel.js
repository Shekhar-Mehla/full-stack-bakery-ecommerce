import mongoose from "mongoose"
import {bakeryProductSchema} from "./productModel.js"
import Mongoose  from "mongoose"

export const cakeCollection = mongoose.model("cake", bakeryProductSchema)