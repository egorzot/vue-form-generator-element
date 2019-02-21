<template>
  <el-form-item
    v-if="inputTypeSupported"
    :label="schema.elementLabel ? schema.elementLabel : ''"
  >
    <el-input
      :id="schema.id"
      v-model="value"
      :disabled="schema.disabled"
      :autocomplete="schema.autocomplete"
      :placeholder="schema.placeholder"
      :type="schema.inputType.toLowerCase()"
      :value="value"
      :alt="schema.alt"
      :max="schema.max"
      :maxlength="schema.maxlength"
      :min="schema.min"
      :minlength="schema.minlength"
      :name="schema.inputName"
      :size="schema.size"
      :step="schema.step"
      :clearable="schema.clearable"
      :required="schema.required"
      :readonly="schema.readonly"
      @blur="onBlur"
      @change="schema.onChange || null"
    />
  </el-form-item>
  <el-form-item
    v-else-if="schema.inputType.toLowerCase() === 'file'"
    :label="schema.elementLabel ? schema.elementLabel : ''"
  >
    <el-alert
      title='The inputType "file" value of the elementInput field is deprecated. Use "elementUpload" field instead.'
      type="error"
    >
    </el-alert>
  </el-form-item>
  <el-form-item
    v-else-if="
      schema.inputType.toLowerCase() === 'date' ||
        schema.inputType.toLowerCase() === 'datetime'
    "
    :label="schema.elementLabel ? schema.elementLabel : ''"
  >
    <el-alert
      title='The inputType "date" or "datetime" value of the elementInput field is deprecated. Use "elementDateTimePicker" field instead.'
      type="error"
    >
    </el-alert>
  </el-form-item>
  <el-form-item
    v-else-if="schema.inputType.toLowerCase() === 'color'"
    :label="schema.elementLabel ? schema.elementLabel : ''"
  >
    <el-alert
      title='The inputType "color" value of the elementInput field is deprecated. Use "elementColorPicker" field instead.'
      type="error"
    >
    </el-alert>
  </el-form-item>
  <el-form-item
    v-else-if="schema.inputType.toLowerCase() === 'range'"
    :label="schema.elementLabel ? schema.elementLabel : ''"
  >
    <el-alert
      title='The inputType "range" value of the elementInput field is deprecated. Use "elementSlider" field instead.'
      type="error"
    >
    </el-alert>
  </el-form-item>
  <el-form-item v-else :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-alert
      title='Not allowed inputType. Allowed inputType values:"text","number","password","e-mail","hidden","url","telephone","search"'
      type="error"
    >
    </el-alert>
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import { isNumber, debounce, isFunction } from "lodash";
import defaultValueSetter from "../mixins/defaultValueSetter";

const DEBOUNCE_FORMAT_MS = 1000;

export default {
  data: () => ({
    allowedInputTypes: [
      "text",
      "number",
      "password",
      "e-mail",
      "hidden",
      "url",
      "telephone",
      "search"
    ]
  }),
  mixins: [abstractField, defaultValueSetter],
  mounted() {
    this.setDebounceFunc();
  },
  methods: {
    formatValueToModel(value) {
      if (value != null) {
        if (!isFunction(this.debouncedFormatFunc)) {
          this.setDebounceFunc();
        }
        switch (this.schema.inputType.toLowerCase()) {
          case "number":
            // debounce
            return (newValue, oldValue) => {
              this.debouncedFormatFunc(value, oldValue);
            };
          default:
            break;
        }
      }

      return value;
    },
    formatNumberToModel(newValue, oldValue) {
      if (!isNumber(newValue)) {
        newValue = NaN;
      }
      this.updateModelValue(newValue, oldValue);
    },
    onBlur() {
      if (isFunction(this.debouncedFormatFunc)) {
        this.debouncedFormatFunc.flush();
      }
    },
    setDebounceFunc() {
      if (isFunction(this.debouncedFormatFunc)) return;
      switch (this.schema.inputType.toLowerCase()) {
        case "number":
          this.debouncedFormatFunc = debounce(
            (newValue, oldValue) => {
              this.formatNumberToModel(newValue, oldValue);
            },
            DEBOUNCE_FORMAT_MS,
            {
              trailing: true,
              leading: false
            }
          );
          break;
        default:
          break;
      }
    }
  },
  computed: {
    inputTypeSupported() {
      return (
        this.schema.inputType.toLowerCase() === "" ||
        this.allowedInputTypes.includes(this.schema.inputType.toLowerCase())
      );
    }
  }
};
</script>
