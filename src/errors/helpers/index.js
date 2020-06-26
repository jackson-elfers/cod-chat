const Controllers = require("./controllers.helper.error");

const utils = require("../../utils");
const check = require("check-types");

const method = {
  check: check,
  utils: utils
};

module.exports.controllers = new Controllers({ method: method });
