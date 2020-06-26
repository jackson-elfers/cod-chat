const asyn = require("./asyn");
const api = require("./api");
const bcrypt = require("./bcrypt");
const recaptcha = require("./recaptcha");
const db = require("./db");
const checktypes = require("./checktypes");

module.exports = {
  db: db,
  asyn: asyn,
  api: api,
  bcrypt: bcrypt,
  recaptcha: recaptcha,
  checktypes: checktypes
};
