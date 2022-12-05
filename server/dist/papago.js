"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_1 = __importDefault(require("request"));
// import { Papago_client_id, Papago_client_secret } from "./ApiKey.js";
const router = express_1.default.Router();
var client_id = "_lXQAvuTjq_l0PT8yBcA";
var client_secret = "E_eU2E8D34";
router.post("/translate", function (req, res) {
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
    request_1.default.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            res.end(body);
        }
        else {
            res.status(response.statusCode).end();
            console.log("error = " + response.statusCode);
        }
    });
});
exports.default = router;
