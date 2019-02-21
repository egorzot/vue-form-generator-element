const defaultValueSetter = {
  created() {
    if(!this.model){
      return;
    }
    if (typeof this.value === "undefined") {
      if (this.model && this.model.hasOwnProperty(this.schema.model)) {
        this.value = this.model[this.schema.model];
      } else if (this.schema.default) {
        this.value = this.schema.default;
      }
    }
  }
};

export default defaultValueSetter;
