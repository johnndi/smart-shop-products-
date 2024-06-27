import express from "express";
import product from "./product.router.js";
const app = express();
import { config } from "dotenv";
config();
app.use(express.json());

app.use("/products", product);
app.listen(4000, () => {
  console.log("localhost running on port 4000");
});
