"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_1 = __importDefault(require("request"));
const router = express_1.default.Router();
router.post("/translate", function (req, res) {
    var api_url = "https://openapi.naver.com/v1/papago/n2mt";
    const options = {
        url: api_url,
        form: {
            source: "ko",
            target: "en",
            text: "테스트",
        },
        headers: {
            "X-Naver-Client-Id": "jg9yEhUy3c9YvueE5AFa",
            "X-Naver-Client-Secret": "irC78M2ete",
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
