import express, { Router } from "express";
const router: Router = express.Router();

router.get("/test", (req, res) => {
  console.log("test");
  return res.status(200).json("test??");
});

router.get("/ttest", (req, res) => {
  res.send("Hello, Express");
});

export default router;
