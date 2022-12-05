"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const papago_1 = __importDefault(require("./papago"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
app.use("/api/papago", papago_1.default);
app.use(express_1.default.static("client/build"));
app.get("*", (req, res) => {
    // res.set({
    //   "Cache-Control": "no-cache, no-store, must-revalidate",
    //   Pragma: "no-cache",
    //   Date: Date.now(),
    // });
    path_1.default.resolve(__dirname + "/../client/build/index.html");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(process.env.NODE_ENV);
});
