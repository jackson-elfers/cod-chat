module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  // helpers
  async readSingleOwnerId(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", _id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readUnresolvedIssue(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", categories: "array" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  // controllers

  async create(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", body: "string", categories: "array", public: "boolean" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async findIssue(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async resolvedDate(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { index: "number", offset: "number" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async resolvedCategory(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { category: "string", index: "number", offset: "number" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async unresolvedOwner(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", index: "number", offset: "number" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async resolvedOwner(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { owner_id: "string", index: "number", offset: "number" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readSingleUrlTitle(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { url_title: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async readSingleId(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async update(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string", body: "string", categories: "array", public: "boolean" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async resolved(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string", user_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }

  async remove(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
