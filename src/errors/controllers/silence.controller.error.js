module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  // helpers
  async issueOwner(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", _id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  // controllers
  async create(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string", user_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
