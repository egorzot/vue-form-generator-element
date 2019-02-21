const defaultValueSetter = {
  created() {
    if (!this.model) {
      return;
    }
    if (typeof this.value === "undefined") {
      if (
        this.schema.hasOwnProperty("model") &&
        this.model.hasOwnProperty(this.schema.model)
      ) {
        this.value = this.model[this.schema.model];
      } else if (this.schema.hasOwnProperty("default")) {
        this.value = this.schema.default;
      }
    }
  }
};

export default defaultValueSetter;
