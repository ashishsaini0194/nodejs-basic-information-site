const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public/"));

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact-me.html"));
});
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public/404.html"));
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Running!");
});
