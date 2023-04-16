import express from "express";
import papago from "./papago";
import test from "./test";
import path from "path";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/papago", papago);
app.use("/api/test", test);

// app.get("*", (req, res) => {
//   res.send("Hello, Express");
// });

// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(process.env.NODE_ENV);
});
