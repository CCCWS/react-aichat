"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_1 = __importDefault(require("request"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = express_1.default.Router();
dotenv_1.default.config();
router.post("/translate", function (req, res) {
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
