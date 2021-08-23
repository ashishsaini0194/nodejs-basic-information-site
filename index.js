const express = require("express");
const path = require("path");
const app = express();

const path1 = path.join(__dirname, "public/")

app.get("", (req, res) => {
  res.sendFile("index1.html", { root: path1 });
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: path1 });
});
app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", { root: path1 });
});
app.use((req, res, next) => {
  res.sendFile("404.html"), { root: path1 };
});
var PORT = app.listen(process.env.PORT || 8080, () => {
  console.log("Running on PORT : ", PORT.address().port);
});
