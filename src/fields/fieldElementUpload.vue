<template>
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :multiple="schema.multiple"
        :limit="schema.limit"
        :on-exceed="handleExceed"
        :file-list="schema.fileList"
        :name="schema.inputName"
        :readonly="schema.readonly"
        :required="schema.required"
        :accept="schema.accept"
        :drag="schema.drag"
        :disabled="disabled"
    >
        <el-button
            v-if="!schema.drag"
            size="small"
            type="primary"
        >
            {{ schema.placeholder || "Click to upload" }}
        </el-button>

        <i
            v-if="schema.drag"
            class="el-icon-upload"
        />
        <div
            v-if="schema.drag"
            class="el-upload__text"
        >
            {{ schema.placeholder || `Drop file here or click to upload` }}
        </div>

        <div
            v-if="schema.tip"
            slot="tip"
            class="el-upload__tip"
        >
            {{ schema.tip }}
        </div>
    </el-upload>
</template>

<script>
import { abstractField } from "vue-form-generator";
import { isFunction } from "lodash";

export default {
    mixins: [abstractField],
    data(){
        return {
            fileList:null
        };
    },
    methods: {
        onChange() {
            if(isFunction(this.schema.onChanged)) {
                // Schema has defined onChange method.
                this.schema.onChanged.call(this, this.model, this.schema, event, this);
            }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning("The limit is " + this.schema.limit + `, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`Удалить ${ file.name }？`);
        }
    }
};

</script>
