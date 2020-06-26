module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  // helpers
  async removeUserComments(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string", owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readDistinctComments(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  // controllers
  async create(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string", owner_id: "string", body: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async read(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async update(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string", body: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async remove(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
