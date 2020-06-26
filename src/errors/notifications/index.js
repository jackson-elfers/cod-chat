const Issue = require("./issue.notification.error");
const Comment = require("./comment.notification.error");

const utils = require("../../utils");
const check = require("check-types");

const method = {
  check: check,
  utils: utils
};

module.exports.issue = new Issue({ method: method });

module.exports.comment = new Comment({ method: method });
