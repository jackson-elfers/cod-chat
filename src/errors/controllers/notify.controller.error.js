module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async readNew(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as second argument");
    const template = { owner_id: "string", index: "number", offset: "number" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readOld(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as second argument");
    const template = { owner_id: "string", index: "number", offset: "number" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async updateDismissed(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as second argument");
    const template = { owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
