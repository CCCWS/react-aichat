import express, { Request, Response, Router } from "express";
import request from "request";
import dotenv from "dotenv";

const router: Router = express.Router();

dotenv.config();

router.post("/translate", function (req: Request, res: Response) {
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  const options = {
    url: api_url,
    form: {
      source: req.body.source,
      target: req.body.target,
      text: req.body.text,
    },
    headers: {
      "X-Naver-Client-Id": process.env.PAPAGO_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.PAPAGO_CLIENT_SECRET,
    },
  };
  request.post(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

export default router;
