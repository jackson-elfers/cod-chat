export default class {
  constructor(props) {
    this.method = props.method;
  }

  create(data) {
    const body = this.method.config.settings.comment.body;
    if (data.body.length < body.min) {
      throw new Error(`Comment must be at least ${body.min} characters.`);
    }
    if (data.body.length > body.max) {
      throw new Error(`Comment must be less than ${body.max} characters.`);
    }
  }

  update(data) {
    const body = this.method.config.settings.comment.body;
    if (data.body.length < body.min) {
      throw new Error(`Comment must be at least ${body.min} characters.`);
    }
    if (data.body.length > body.max) {
      throw new Error(`Comment must be less than ${body.max} characters.`);
    }
  }
}
