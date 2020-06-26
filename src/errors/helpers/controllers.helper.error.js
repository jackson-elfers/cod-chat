module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async resolvedOrSilenced(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async notifyIssuer(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string", link: "string", body: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async notifyCommentors(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string", owner_id: "string", link: "string", body: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
