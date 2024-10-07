const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonparser = bodyParser.json();

app.use("/", express.static("public"));
app.use(bodyParser.text());

app.post("/login", (req, res) => {
  const usersList = JSON.parse(req.body);
  const name = usersList.name;
  if (name.length < 20) {
    res.send({ error: "invalid length" });
  }

  res.send({
    message: "New user was added to the list",
  });
});

app.post("/contact", (req, res) => {
  const usersList = JSON.parse(req.body);
  const name = usersList.name;

  res.send({
    message: "New user was added to the list",
  });
});

app.listen(3000, function () {
  console.log("Server is lestening on port 3000");
});
