<template>
    <div>
        <el-radio v-model="value" v-for="item in items" :label="item.value">{{item.name}}</el-radio>
    </div>
</template>

<script>
    import { abstractField } from 'vue-form-generator'

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
    }
</script>