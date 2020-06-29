const Conference = require("./conference.socket.error");

const utils = require("../../utils");
const config = require("../../config");
const check = require("check-types");

const method = {
  check: check,
  utils: utils,
  config: config
};

module.exports.conference = new Conference({ method: method });
