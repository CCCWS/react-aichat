import express, { Request, Response, Router } from "express";
import request from "request";
const router: Router = express.Router();

router.get("/test", (req, res) => {
  console.log("test");
  return res.status(200).json({ success: true });
});

export default router;
