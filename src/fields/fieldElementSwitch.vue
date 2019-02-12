<template>
    <el-switch
        v-model="value"
        :active-color="schema.activeColor"
        :inactive-color="schema.inactiveColor"
        :active-text="schema.textOn"
        :inactive-text="schema.textOff"

        :disabled="disabled"
        :name="schema.inputName"
    />
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
                if (value)
                    return this.schema.valueOn;
                else
                    return this.schema.valueOff;
            }
            return value;
        }
    }
};
</script>