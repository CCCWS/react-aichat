import express, { Request, Response, Router } from "express";
import request from "request";
// import { Papago_client_id, Papago_client_secret } from "./ApiKey.js";

const router: Router = express.Router();

var client_id = "_lXQAvuTjq_l0PT8yBcA";
var client_secret = "E_eU2E8D34";

router.post("/translate", function (req: Request, res: Response) {
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  var options = {
    url: api_url,
    form: {
      source: req.body.source,
      target: req.body.target,
      text: req.body.value,
    },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
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
