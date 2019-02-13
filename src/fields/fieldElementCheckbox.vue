<template>
  <el-checkbox
    v-model="value"
    :disabled="disabled"
    :autocomplete="schema.autocomplete"
  >
    {{ schema.text }}
  </el-checkbox>
</template>

<script>
import { abstractField } from "vue-form-generator";

export default {
  mixins: [abstractField]
};
</script>
