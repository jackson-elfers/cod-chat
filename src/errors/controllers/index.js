const User = require("./user.controller.error");
const Issue = require("./issue.controller.error");
const Silence = require("./silence.controller.error");
const Report = require("./report.controller.error");
const Comment = require("./comment.controller.error");
const Category = require("./category.controller.error");
const Notify = require("./notify.controller.error");

const utils = require("../../utils");
const config = require("../../config");
const check = require("check-types");

const method = {
  check: check,
  utils: utils,
  config: config
};

module.exports.user = new User({ method: method });

module.exports.issue = new Issue({ method: method });

module.exports.silence = new Silence({ method: method });

module.exports.report = new Report({ method: method });

module.exports.comment = new Comment({ method: method });

module.exports.category = new Category({ method: method });

module.exports.notify = new Notify({ method: method });
