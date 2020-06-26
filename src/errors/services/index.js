const User = require("./user.service.error");
const Issue = require("./issue.service.error");
const Silence = require("./silence.service.error");
const Report = require("./report.service.error");
const Comment = require("./comment.service.error");
const Category = require("./category.service.error");
const Notify = require("./notify.service.error");

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
