<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-slider
      class="test"
      v-model="value"
      :min="schema.min"
      :max="schema.max"
      :step="schema.step"
      :disabled="schema.disabled"
      :show-input="schema.showInput"
      :show-input-controls="schema.showInputControls"
      :input-size="schema.inputSize"
      :show-stops="schema.showStops"
      :show-tooltip="schema.showTooltip"
      :format-tooltip="schema.formatTooltip"
      :range="schema.range"
      :vertical="schema.vertical"
      :height="schema.height"
      :debounce="schema.debounce"
      :tooltip-class="schema.tooltipClass"
    />
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import defaultValueSetter from "../mixins/defaultValueSetter";
export default {
  name: "fieldElementSlider",
  mixins: [abstractField, defaultValueSetter]
};
</script>
