import express from "express";
import cors from "cors";
import { connection } from "./src/configuration/database_connection.js";
const app = express();
// middleware
app.use(express.json());
connection();
app.use(cors());

const PORT = process.env.PORT || 8000;
app.get("/", async (req, res) => {
  res.send("db is connecteed i guess");
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
