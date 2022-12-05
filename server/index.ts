import express from "express";
import papago from "./papago";
import path from "path";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use("/api/papago", papago);

if (process.env.NODE_ENV === "production") {
  app.get("/*", (req, res) => {
    app.use(express.static("client/build"));
    res.set({
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Date: Date.now(),
    });
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(process.env.NODE_ENV);
});
