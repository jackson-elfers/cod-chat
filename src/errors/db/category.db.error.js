module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async create(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", category: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readOwnerId(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readOwnerCategory(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", category: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async updateScoreUp(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", category: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async updateScoreDown(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", category: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
