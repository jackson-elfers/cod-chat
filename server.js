require("dotenv").config();
const express = require("express");
const utils = require("./src/utils");
const app = express();
const server = require("http").Server(app);
const sockets = require("./src/sockets");
const pingmydyno = require("pingmydyno");

async function main() {
  // connect sockets
  sockets(server);
  console.log("sockets: connected");
  // start server
  server.listen(process.env.PORT, function() {
    pingmydyno("https://codchat.herokuapp.com");
    require("./src")(app);
    console.log("server: connected");
    console.log("port: " + process.env.PORT);
  });
}

main().catch(error => {
  console.log(error);
});
