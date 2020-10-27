const http = require("http");
let PORT = process.env.PORT || '8989';
const express = require("express");
import { data } from './data/MOCK_DATA.json';

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Wao your app is workinggggg");
});

app.get("/home", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(PORT, () => {
  console.log(`app is listen to port ${PORT}`);
});

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('pedar sag');
//   res.end();
// }).listen(PORT);

// console.log(`serve is listeting to portçc ${PORT}`);
