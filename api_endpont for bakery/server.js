import express from "express";
const app = express();
// middleware
app.use(express.json());
import router from "./src/routers/products.js";
app.use("/api/v1/products", router);
const PORT = 8000;
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
