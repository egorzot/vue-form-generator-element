<template>
    <el-input
        v-model="value"
        :disabled="disabled"
        :autocomplete="schema.autocomplete"
        :placeholder="schema.placeholder"
        :type="schema.inputType.toLowerCase()"
        :value="value"
        :alt="schema.alt"
        :max="schema.max"
        :maxlength="schema.maxlength"
        :min="schema.min"
        :minlength="schema.minlength"
        :multiple="schema.multiple"
        :name="schema.inputName"
        :size="schema.size"
        :src="schema.src"
        :step="schema.step"
        :width="schema.width"
        :files="schema.files"
    />
</template>

<script>
import { abstractField } from "vue-form-generator";

export default {
    mixins: [abstractField],

    mounted() {
        switch (this.schema.inputType.toLowerCase()) {
        case "number":
        case "range":
            this.debouncedFormatFunc = debounce((newValue, oldValue) => {
                this.formatNumberToModel(newValue, oldValue);
            }
            , DEBOUNCE_FORMAT_MS, {
                trailing: true,
                leading: false
            });
            break;
        case "date":
        case "datetime":
        case "datetime-local":
            // wait 1s before calling 'formatDatetimeToModel' to allow user to input data
            this.debouncedFormatFunc = debounce((newValue, oldValue) => {
                this.formatDatetimeToModel(newValue, oldValue);
            }
            , DEBOUNCE_FORMAT_MS, {
                trailing: true,
                leading: false
            });
            break;
        }
    },

    created() {
        if (this.schema.inputType.toLowerCase() == "file") {
            console.warn("The 'file' type in input field is deprecated. Use 'file' field instead.");
        }
    },
    methods: {
        formatValueToModel(value) {
            if (value != null) {
                switch (this.schema.inputType.toLowerCase()) {
                case "date":
                case "datetime":
                case "datetime-local":
                case "number":
                case "range":
                    // debounce
                    return (newValue, oldValue) => {
                        this.debouncedFormatFunc(value, oldValue);
                    };
                }
            }

            return value;
        },
        formatDatetimeToModel(newValue, oldValue) {
            let defaultFormat = DATETIME_FORMATS[this.schema.inputType.toLowerCase()];
            let m = fecha.parse(newValue, defaultFormat);
            if (m !== false) {
                if (this.schema.format) {
                    newValue = fecha.format(m, this.schema.format);
                } else {
                    newValue = m.valueOf();
                }
            }
            this.updateModelValue(newValue, oldValue);
        },
        formatNumberToModel(newValue, oldValue) {
            if (!isNumber(newValue)) {
                newValue = NaN;
            }
            this.updateModelValue(newValue, oldValue);
        },
        onInput($event) {
            let value = $event.target.value;
            switch (this.schema.inputType.toLowerCase()) {
            case "number":
            case "range":
                if ($event.target.valueAsNumber) {
                    value = $event.target.valueAsNumber;
                }
                break;
            }
            this.value = value;
        },
        onBlur() {
            if (isFunction(this.debouncedFormatFunc)) {
                this.debouncedFormatFunc.flush();
            }
        }
    }
};
</script>