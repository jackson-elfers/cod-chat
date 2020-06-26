const Conference = require("./conference");

const socketio = require("socket.io");
const redis = require("socket.io-redis");
const check = require("check-types");
const config = require("../config");
const utils = require("../utils");

module.exports = function(server) {
  const io = socketio(server);

  if (process.env.REDIS === "true") {
    io.adapter(redis({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }));
  }

  io.on("connection", socket => {
    const method = { socket: socket, config: config, check: check, io: io, utils: utils };
    const conference = new Conference({ method: method });

    socket.on(`${config.routes.Conference}/message`, async data => {
      try {
        await conference.message(data);
      } catch (e) {
        io.emit(
          `${this.method.config.routes.Conference}/message/${data.conference}`,
          utils.api.error({ status: 500, detail: config.messages.serverError })
        );
      }
    });

    socket.on(`${config.routes.Conference}/invite`, async data => {
      try {
        await conference.invite(data);
      } catch (e) {
        io.emit(
          `${this.method.config.routes.Conference}/invite/${data.conference}/${data.user_id}`,
          utils.api.error({ status: 500, detail: config.messages.serverError })
        );
      }
    });

    socket.on(`${config.routes.Conference}/question`, async data => {
      try {
        await conference.question(data);
      } catch (e) {
        io.emit(
          `${this.method.config.routes.Conference}/question/${data.conference}/${data.user_id}`,
          utils.api.error({ status: 500, detail: config.messages.serverError })
        );
      }
    });
  });
};
