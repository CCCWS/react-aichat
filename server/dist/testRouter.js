"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/tttt", (req, res) => {
    console.log("test");
});
exports.default = router;
