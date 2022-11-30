import express, { request, response, NextFunction } from "express";
import testRouter from "./testRouter";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/test", testRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
