import express, { Request, Response, Router } from "express";
import request from "request";

const router: Router = express.Router();

router.post("/translate", function (req: Request, res: Response) {
  const api_url = "https://openapi.naver.com/v1/papago/n2mt";
  const options = {
    url: api_url,
    form: {
      source: req.body.source,
      target: req.body.target,
      text: req.body.value,
    },
    headers: {
      "X-Naver-Client-Id": req.body.clientId,
      "X-Naver-Client-Secret": req.body.clientSecret,
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
