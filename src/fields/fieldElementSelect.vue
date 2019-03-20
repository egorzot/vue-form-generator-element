<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-select
      v-model="value"
      :placeholder="schema.placeholder"
      :disabled="schema.disabled"
      :name="schema.inputName"
      :id="schema.id"
      :value-key="schema.valueKey"
      :multiple="schema.multiple"
      :filterable="schema.filterable"
      :clearable="schema.clearable"
      :collapse-tags="schema.collapseTags"
      :multiple-limit="schema.multipleLimit"
      :autocomplete="schema.autocomplete"
      :allow-create="schema.allowCreate"
      :filter-method="schema.filterMethod"
      :remote="schema.remote"
      :remote-method="schema.remoteMethod"
      :loading-text="schema.loadingText"
      :no-match-text="schema.noMatchText"
      :no-data-text="schema.noDataText"
      :popper-class="schema.popperClass"
      :reserve-keyword="schema.reserveKeyword"
      :default-first-option="schema.defaultFirstOption"
      :popper-append-to-body="schema.popperAppendToBody"
      :automatic-dropdown="schema.automaticDropdown"
      :size="schema.size"
    >
      <el-option
        v-for="item in items"
        :key="getItemValue(item)"
        :label="getItemName(item)"
        :value="getItemValue(item)"
      />
    </el-select>
  </el-form-item>
</template>

<script>
//todo: сделать группировку, протестировать (смотри group)
import { isObject, isNil, find } from "lodash";
import { abstractField } from "vue-form-generator";
export default {
  name: "fieldElementSelect",
  mixins: [abstractField],
  created() {
    if (!this.model) {
      return;
    }
    if (typeof this.value === "object" && this.value === null) {
      if (
        this.schema.hasOwnProperty("model") &&
        this.model.hasOwnProperty(this.schema.model)
      ) {
        this.value = this.model[this.schema.model];
      } else if (this.schema.hasOwnProperty("default")) {
        this.value = this.schema.default;
      }
    }
  },
  computed: {
    // selectOptions() {
    //   return this.schema.selectOptions || {};
    // },

    items() {
      const values = this.schema.values;
      if (typeof values === "function") {
        return this.groupValues(values.apply(this, [this.model, this.schema]));
      }
      return this.groupValues(values);
    }
  },

  methods: {
    formatValueToField(value) {
      if (this.schema.multiple && !Array.isArray(value)) {
        return [value];
      }
      if (isNil(value)) {
        return null;
      }
      return value;
    },

    groupValues(values) {
      const array = [];
      let arrayElement = {};

      values.forEach(item => {
        arrayElement = null;

        if (item.group && isObject(item)) {
          // There is in a group.

          // Find element with this group.
          arrayElement = find(array, i => i.group == item.group);

          if (arrayElement) {
            // There is such a group.

            arrayElement.ops.push({
              id: item.id,
              name: item.name
            });
          } else {
            // There is not such a group.

            // Initialising.
            arrayElement = {
              group: "",
              ops: []
            };

            // Set group.
            arrayElement.group = item.group;

            // Set Group element.
            arrayElement.ops.push({
              id: item.id,
              name: item.name
            });

            // Add array.
            array.push(arrayElement);
          }
        } else {
          // There is not in a group.
          array.push(item);
        }
      });

      // With Groups.
      return array;
    },

    getGroupName(item) {
      if (item && item.group) {
        return item.group;
      }

      throw "Group name is missing! https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
    },

    getItemValue(item) {
      if (isObject(item)) {
        // if (
        //   typeof this.schema.selectOptions !== "undefined" &&
        //   typeof this.schema.selectOptions.value !== "undefined"
        // ) {
        //   return item[this.schema.selectOptions.value];
        // }
        // Use 'id' instead of 'value' cause of backward compatibility
        if (typeof item.id !== "undefined") {
          return item.id;
        }
        throw "`id` is not defined. If you want to use another key name, add a `value` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
      } else {
        return item;
      }
    },

    getItemName(item) {
      if (isObject(item)) {
        // if (
        //   typeof this.schema.selectOptions !== "undefined" &&
        //   typeof this.schema.selectOptions.name !== "undefined"
        // ) {
        //   return item[this.schema.selectOptions.name];
        // }
        if (typeof item.name !== "undefined") {
          return item.name;
        }
        throw "`name` is not defined. If you want to use another key name, add a `name` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
      } else {
        return item;
      }
    }
  }
};
</script>
