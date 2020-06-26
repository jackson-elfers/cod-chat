const User = require("./user.db.error");
const Issue = require("./issue.db.error");
const Silence = require("./silence.db.error");
const Report = require("./report.db.error");
const Comment = require("./comment.db.error");
const Category = require("./category.db.error");
const Notify = require("./notify.db.error");

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
