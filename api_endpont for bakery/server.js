import express from "express";
import cors from "cors";
import { connection } from "./src/configuration/database_connection.js";
import { productRouter } from "./src/routers/productRouter.js";
import { categoryRouter } from "./src/routers/categoryRouter.js";
const app = express();
// middleware
app.use(express.json());
connection();
app.use(cors());

const PORT = process.env.PORT || 8000;
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
