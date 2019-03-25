<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-input
      v-model="value"
      :value="value"
      type="textarea"
      :placeholder="schema.placeholder"
      :disabled="schema.disabled"
      :name="schema.inputName"
      :id="schema.id"
      :readonly="schema.readonly"
      :autosize="schema.autosize"
      :rows="schema.rows"
      :alt="schema.alt"
    />
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import defaultValueSetter from "../mixins/defaultValueSetter";

export default {
  name: "fieldElementTextArea",
  mixins: [abstractField, defaultValueSetter]
};
</script>
