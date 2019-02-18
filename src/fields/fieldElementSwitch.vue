<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-switch
      @input="change"
      :value="value"
      :disabled="schema.disabled"
      :name="schema.inputName"
      :id="schema.id"
      :active-value="schema.valueOn"
      :inactive-value="schema.valueOff"
      :active-color="schema.colorOn"
      :inactive-color="schema.colorOff"
      :active-text="schema.textOn"
      :inactive-text="schema.textOff"
      :width="schema.width ? schema.width : 40"
    />
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import defaultValueSetter from "../mixins/defaultValueSetter";

export default {
  mixins: [abstractField, defaultValueSetter],
  methods: {
    change: function(v) {
      //by default Element Switch element sets inactive value because of our default value has not been resolved yet
      if (typeof this.value === "undefined") {
        return;
      }
      this.value = v;
    }
  }
};
</script>
