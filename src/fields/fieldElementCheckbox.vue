<template>
    <el-checkbox
            :disabled="disabled"
            v-model="value"
            :autocomplete="schema.autocomplete"
    >{{schema.text}}</el-checkbox>
</template>

<script>
    import { abstractField } from 'vue-form-generator'

    export default {
      mixins: [abstractField]
    }
</script>