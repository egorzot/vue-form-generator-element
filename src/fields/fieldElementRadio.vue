<template>
    <div>
        <el-radio
            v-for="(item, key) in items"
            :key="key"
            v-model="value"
            :label="item.value"
        >
            {{ item.name }}
        </el-radio>
    </div>
</template>

<script>
import { abstractField } from "vue-form-generator";

export default {
    mixins: [abstractField],
    computed: {
        items() {
            let values = this.schema.values;
            if (typeof(values) == "function") {
                return values.apply(this, [this.model, this.schema]);
            } else {
                return values;
            }
        }
    }
};
</script>