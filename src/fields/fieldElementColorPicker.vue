<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-color-picker
      v-model="value"
      :name="schema.inputName"
      :id="schema.id"
      :disabled="schema.disabled"
      :format="schema.format"
      :show-alpha="schema.showAlpha"
      :size="schema.size"
      :color-format="schema.colorFormat"
      :popper-class="schema.popperClass"
      :predefine="schema.predefine"
    />
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import defaultValueSetter from "../mixins/defaultValueSetter";

export default {
  name: "fieldElementColorPicker",
  mixins: [abstractField,defaultValueSetter]
};
</script>
