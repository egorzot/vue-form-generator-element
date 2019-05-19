<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-date-picker
      v-model="value"
      :type="getType()"
      :placeholder="schema.placeholder"
      :readonly="schema.readonly"
      :name="schema.inputName"
      :autocomplete="schema.autocomplete"
      :disabled="schema.disabled"
      :format="schema.format"
      :clearable="schema.clearable"
      :size="schema.size"
      :editable="schema.editable"
      :align="schema.align"
      :default-value="schema.defaultValue"
      :picker-options="{
        firstDayOfWeek: schema.firstDayOfWeek ? schema.firstDayOfWeek : 7
      }"
      :range-separator="schema.rangeSeparator"
      :start-placeholder="schema.startPlaceholder"
      :end-placeholder="schema.endPlaceholder"
      :default-time="schema.defaultTime"
      :unlink-panels="!!schema.unlinkPanels"
    />
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import defaultValueSetter from "../mixins/defaultValueSetter";

export default {
  name: "fieldElementDatePicker",
  mixins: [abstractField, defaultValueSetter],
  data: () => ({
    allowedTypes: [
      "date",
      "datetime",
      "daterange",
      "datetimerange",
      "monthrange"
    ]
  }),
  methods: {
    getType() {
      if (
        this.schema.dateType &&
        this.allowedTypes.includes(this.schema.dateType.toLowerCase())
      ) {
        return this.schema.dateType.toLowerCase();
      }
      return "datetime";
    }
  }
};
</script>
