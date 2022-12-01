import express, { request, response, NextFunction } from "express";
import papago from "./papago";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/papago", papago);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
