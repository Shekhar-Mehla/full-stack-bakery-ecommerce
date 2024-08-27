import express from "express";
import cors from "cors";
import { connection } from "./src/configuration/database_connection.js";
import { router } from "./src/routers/product.js";
const app = express();
// middleware
app.use(express.json());
connection();
app.use(cors());

const PORT = process.env.PORT || 8000;
app.use("/", router);
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
