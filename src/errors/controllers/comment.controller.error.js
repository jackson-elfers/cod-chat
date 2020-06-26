module.exports = class {
  constructor(props) {
    this.method = props.method;
  }

  async create(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { parent_id: "string", owner_id: "string", body: "string" };
    this.method.utils.checktypes({ template: template, params: data });

    const body = this.method.config.settings.comment.body;
    if (data.body.length < body.min) {
      throw new Error(`Comment must be at least ${body.min} characters.`);
    }
    if (data.body.length > body.max) {
      throw new Error(`Comment must be less than ${body.max} characters.`);
    }
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

    const body = this.method.config.settings.comment.body;
    if (data.body.length < body.min) {
      throw new Error(`Comment must be at least ${body.min} characters.`);
    }
    if (data.body.length > body.max) {
      throw new Error(`Comment must be less than ${body.max} characters.`);
    }
  }

  async remove(data) {
    this.method.check.assert(this.method.check.object(data), "expected object as first argument");
    const template = { _id: "string", owner_id: "string" };
    this.method.utils.checktypes({ template: template, params: data });
  }
};
