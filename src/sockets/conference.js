module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async message(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    // { conference_id: "", user_id: "", message: "" }
    this.method.io.emit(
      `${this.method.config.routes.Conference}/message/${data.conference_id}`,
      this.method.utils.api.send(data)
    );
  }

  async invite(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    // { conference_id: "", user_id: "", new_conference_id: "" }
    this.method.io.emit(
      `${this.method.config.routes.Conference}/invite/${data.conference_id}/${data.user_id}`,
      this.method.utils.api.send(data)
    );
  }

  async question(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    // { conference_id: "" }
    this.method.io.emit(
      `${this.method.config.routes.Conference}/question/${data.conference_id}`,
      this.method.utils.api.send(data)
    );
  }
};
