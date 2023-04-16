"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const papago_1 = __importDefault(require("./papago"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use("/api/papago", papago_1.default);
app.get("/", (req, res) => {
    res.send(`Listening on port ${port}`);
});
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
// });
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(process.env.NODE_ENV);
});
