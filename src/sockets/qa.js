module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async message(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    this.method.io.emit(
      `${this.method.config.routes.ReadIssue}/message/${data.url_title}`,
      this.method.utils.api.send(null)
    );
  }

  async typing(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    this.method.io.emit(
      `${this.method.config.routes.ReadIssue}/typing/${data.url_title}`,
      this.method.utils.api.send(data)
    );
  }
};
