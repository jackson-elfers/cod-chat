const Conference = require("./conference.socket");
const socketio = require("socket.io");
const redis = require("socket.io-redis");
const check = require("check-types");
const config = require("../config");
const utils = require("../utils");
const errors = require("../errors/sockets");

module.exports = function(server) {
  const io = socketio(server);

  if (process.env.REDIS === "true") {
    io.adapter(redis({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }));
  }

  io.on("connection", socket => {
    const method = { socket: socket, config: config, check: check, io: io, utils: utils, errors: errors };
    const conference = new Conference({ method: method });

    socket.on(config.api.conference.message, async data => {
      try {
        await conference.message(data);
      } catch (e) {
        io.emit(
          `${config.api.conference.message}/${data.chat_id}`,
          utils.api.error({ status: 500, detail: config.messages.serverError })
        );
      }
    });

    socket.on(config.api.conference.invite, async data => {
      try {
        await conference.invite(data);
      } catch (e) {
        io.emit(
          `${config.api.conference.invite}/${data.chat_id}/${data.user_id}`,
          utils.api.error({ status: 500, detail: config.messages.serverError })
        );
      }
    });

    socket.on(config.api.conference.question, async data => {
      try {
        await conference.question(data);
      } catch (e) {
        io.emit(
          `${config.api.conference.question}/${data.chat_id}/${data.user_id}`,
          utils.api.error({ status: 500, detail: config.messages.serverError })
        );
      }
    });
  });
};
