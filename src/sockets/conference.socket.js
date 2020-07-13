module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async message(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    //await this.method.errors.conference.message(data);
    this.method.io.emit(
      `${this.method.config.api.conference.message}/${data.chat_id}`,
      this.method.utils.api.send(data)
    );
  }

  async invite(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    //await this.method.errors.conference.invite(data);
    this.method.io.emit(
      `${this.method.config.api.conference.invite}/${data.chat_id}/${data.user_id}`,
      this.method.utils.api.send(data)
    );
  }

  async question(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    //await this.method.errors.conference.question(data);
    this.method.io.emit(
      `${this.method.config.api.conference.question}/${data.chat_id}`,
      this.method.utils.api.send(data)
    );
  }
};
