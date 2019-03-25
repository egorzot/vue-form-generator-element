<template>
  <el-form-item :label="schema.elementLabel ? schema.elementLabel : ''">
    <el-upload
      :action="schema.action"
      :on-preview="schema.onPreview"
      :on-remove="schema.onRemove"
      :on-exceed="schema.onExceed"
      :on-error="schema.onError"
      :on-success="schema.onSuccess"
      :on-progress="schema.onProgress"
      :on-change="schema.onChange"
      :before-remove="schema.beforeRemove"
      :before-upload="schema.beforeUpload"
      :multiple="schema.multiple"
      :limit="schema.limit"
      :file-list="schema.fileList"
      :name="schema.inputName"
      :accept="schema.accept"
      :drag="schema.drag"
      :disabled="schema.disabled"
      :auto-upload="schema.autoUpload"
      :http-request="schema.httpRequest"
      :thumbnail-mode="schema.thumbnailMode"
      :show-file-list="schema.showFileList"
      :with-credentials="schema.withCredentials"
      :data="schema.data"
      :headers="schema.headers"
      :list-type="schema.listType"
    >
      <el-button v-if="!schema.drag" size="small" type="primary">
        {{ schema.placeholder || "Click to upload" }}
      </el-button>

      <i v-if="schema.drag" class="el-icon-upload" />
      <div v-if="schema.drag" class="el-upload__text">
        {{ schema.placeholder || `Drop file here or click to upload` }}
      </div>

      <div v-if="schema.tip" slot="tip" class="el-upload__tip">
        {{ schema.tip }}
      </div>
    </el-upload>
  </el-form-item>
</template>

<script>
import { abstractField } from "vue-form-generator";

export default {
  mixins: [abstractField]
};
</script>
