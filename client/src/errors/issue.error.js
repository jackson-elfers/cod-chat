export default class {
  constructor(props) {
    this.method = props.method;
  }

  create(data) {
    const body = this.method.config.settings.issue.body;
    const categories = this.method.config.settings.issue.categories;
    if (data.body.length < body.min) {
      throw new Error(`Issue must be greater than ${body.min} characters.`);
    }
    if (data.body.length > body.max) {
      throw new Error(`Issue must be less than ${body.max} characters.`);
    }
    if (data.categories.length < categories.min) {
      throw new Error(`Must have at least ${categories.min} categories selected.`);
    }
    if (data.categories.length > categories.max) {
      throw new Error(`Must have less than ${categories.max} categories selected.`);
    }
  }

  update(data) {
    const body = this.method.config.settings.issue.body;
    const categories = this.method.config.settings.issue.categories;
    if (data.body.length < body.min) {
      throw new Error(`Issue must be greater than ${body.min} characters.`);
    }
    if (data.body.length > body.max) {
      throw new Error(`Issue must be less than ${body.max} characters.`);
    }
    if (data.categories.length < categories.min) {
      throw new Error(`Must have at least ${categories.min} categories selected.`);
    }
    if (data.categories.length > categories.max) {
      throw new Error(`Must have less than ${categories.max} categories selected.`);
    }
  }
}
