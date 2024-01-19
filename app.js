const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {doctors} = require("./data.js")
app.get("/", (req, res) =>  res.send(
  "<h3>Hello ,My name is Anushka Jaiswal and you are watching Doctors API.</h3>",
));
app.get("/doctors", (req, res) => {
  res.status(200).json(doctors)
});

const server = app.listen(port, () => console.log(`Health app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


