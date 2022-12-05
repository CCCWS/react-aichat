import express from "express";
import papago from "./papago";
import path from "path";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use("/api/papago", papago);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  // res.set({
  //   "Cache-Control": "no-cache, no-store, must-revalidate",
  //   Pragma: "no-cache",
  //   Date: Date.now(),
  // });
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(process.env.NODE_ENV);
});
