<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-checkbox
      v-model="value"
      :disabled="schema.disabled"
      :autocomplete="schema.autocomplete"
      :true-label="schema.checkedValue"
      :false-label="schema.uncheckedValue"
      :name="schema.inputName"
      :id="schema.id"
      :checked="checked"
    >
    </el-checkbox>
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import { isBoolean } from "lodash";

export default {
  name: "fieldElementCheckbox",
  mixins: [abstractField],
  data: () => ({
    checked: false
  }),
  mounted() {
    this.checkedValue();
  },
  methods: {
    checkedValue() {
      if (
        this.schema.hasOwnProperty("default") &&
        this.schema.hasOwnProperty("checkedValue")
      ) {
        if (
          this.schema.default === this.schema.checkedValue ||
          this.schema.default === true
        ) {
          this.value = this.schema.checkedValue;
          this.checked = true;
          return;
        }
      }
      if (
        this.schema.hasOwnProperty("default") &&
        this.schema.hasOwnProperty("uncheckedValue")
      ) {
        if (
          this.schema.default === this.schema.uncheckedValue ||
          this.schema.default === false
        ) {
          this.value = this.schema.uncheckedValue;
          this.checked = false;
          return;
        }
      }
      if (
        this.schema.hasOwnProperty("default") &&
        this.schema.hasOwnProperty("uncheckedValue") &&
        this.schema.hasOwnProperty("checkedValue")
      ) {
        if (
          this.schema.default !== this.schema.uncheckedValue &&
          this.schema.default !== this.schema.checkedValue
        ) {
          this.value = this.schema.uncheckedValue;
          this.checked = false;
          return;
        }
      }
      if (this.schema.hasOwnProperty("default")) {
        if (isBoolean(this.schema.default)) {
          this.value = this.schema.default;
          this.checked = this.schema.default;
          return;
        }
      }
      this.value = this.schema.hasOwnProperty("uncheckedValue")
        ? this.schema.uncheckedValue
        : false;
      this.checked = false;
    }
  }
};
</script>
