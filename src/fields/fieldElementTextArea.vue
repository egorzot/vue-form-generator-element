<template>
  <el-input
    v-model="value"
    type="textarea"
    :placeholder="schema.placeholder"
    :class="schema.fieldClasses"
    :disabled="disabled"
    :name="schema.inputName"
    :readonly="schema.readonly"
    :autosize="{ minRows: schema.rows || 2 }"
  />
</template>

<script>
import { abstractField } from "vue-form-generator";

export default {
  mixins: [abstractField]
};
</script>
