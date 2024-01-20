const express = require("express");
const {doctors} = require("./data.js")
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) =>  res.send(
  "<h3>Hello ,My name is Anushka Jaiswal and you are watching Doctors API.</h3>",
));
app.get("/doctors", (req, res) => {
  try {
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
const server = app.listen(port, () => console.log(`Health app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


