<template>
		<el-input
      type="textarea"
      v-model="value"
      :placeholder="schema.placeholder"
      :class="schema.fieldClasses"
      :disabled="disabled"
      :name="schema.inputName"
      :readonly="schema.readonly"
      :autosize="{minRows: schema.rows || 2}"
    >
    </el-input>
</template>

<script>
  import { abstractField } from 'vue-form-generator'

	export default {
		mixins: [ abstractField ]
	}
</script>
