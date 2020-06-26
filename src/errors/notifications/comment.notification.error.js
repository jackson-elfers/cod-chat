module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async create(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string", owner_id: "string", body: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
