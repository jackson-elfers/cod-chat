module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async message(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { chat_id: "string", user_id: "string", message: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async invite(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { chat_id: "string", user_id: "string", new_chat_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async question(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { chat_id: "string", user_id: "string", message: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
