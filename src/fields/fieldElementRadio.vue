<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-radio-group
      v-if="schema.radioType === 'button'"
      v-model="value"
      :text-color="schema.textColor"
      :fill="schema.fill"
    >
      <el-radio-button
        v-bind:index="index"
        v-bind:key="item.label"
        v-for="(item, index) in items"
        :label="item.label"
        :disabled="schema.disabled"
        :size="schema.size"
        :name="schema.inputName"
        :id="schema.id"
        :border="schema.border"
      >
        {{ item.name }}
      </el-radio-button>
    </el-radio-group>
    <el-radio-group
      v-else
      v-model="value"
      :text-color="schema.textColor"
      :fill="schema.fill"
    >
      <el-radio
        v-bind:index="index"
        v-bind:key="item.label"
        v-for="(item, index) in items"
        :label="item.label"
        :disabled="schema.disabled"
        :size="schema.size"
        :name="schema.inputName"
        :id="schema.id"
        :border="schema.border"
      >
        {{ item.name }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";
import defaultValueSetter from "../mixins/defaultValueSetter";

export default {
  name: "fieldElementRadio",
  mixins: [abstractField, defaultValueSetter],
  computed: {
    items() {
      const values = this.schema.values;
      if (typeof values === "function") {
        return values.apply(this, [this.model, this.schema]);
      }
      return values;
    }
  }
};
</script>
