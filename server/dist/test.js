"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/test", (req, res) => {
    console.log("test");
    return res.status(200).json("test??");
});
router.get("/ttest", (req, res) => {
    res.send("Hello, Express");
});
exports.default = router;
