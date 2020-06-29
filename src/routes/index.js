const utils = require("../utils");
const client = require("./client");
const config = require("../config");

module.exports = function(app) {
  // client
  app.get("/", client.home);
  app.get("*", client.home);
};
