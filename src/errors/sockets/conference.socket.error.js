module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async message(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { chat_id: "number", user_id: "number", user_name: "string", message: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async invite(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { chat_id: "number", user_id: "number", user_name: "string", message: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async question(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { chat_id: "number", user_id: "number", user_name: "string", message: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
