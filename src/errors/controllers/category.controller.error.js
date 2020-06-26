module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async readOwner(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as second argument");
    const template = { owner_id: "string", category: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
