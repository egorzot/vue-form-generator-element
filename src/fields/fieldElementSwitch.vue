<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-switch
      v-model="value"
      :disabled="schema.disabled"
      :name="schema.inputName"
      :id="schema.id"
      :active-value="schema.activeValue"
      :inactive-value="schema.inactiveValue"
      :active-color="schema.activeColor"
      :inactive-color="schema.inactiveColor"
      :active-text="schema.activeText"
      :inactive-text="schema.inactiveText"
      :width="schema.width ? schema.width : 40"
    />
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";

export default {
  mixins: [abstractField],
  methods: {
    formatValueToField(value) {
      if (value != null && this.schema.valueOn)
        return value == this.schema.valueOn;
      return value;
    },
    formatValueToModel(value) {
      if (value != null && this.schema.valueOn) {
        if (value) return this.schema.valueOn;
        return this.schema.valueOff;
      }
      return value;
    }
  }
};
</script>
