<template>
  <div>
    <g-uploader
      accept="image/png, image/jpeg"
      :size="500*1024"
      :limit="3"
      :multiple="true"
      qiniu_domain="http://7xq22v.com2.z0.glb.qiniucdn.com"
      :on-success="uploadSuccess"
      :on-error="uploadError"
    >

      <div
        class="uploader-area"
        slot="uploader-area"
      >
        <g-icon name="jia"></g-icon>
        <div class="g-uploader--text">将文件拖到此处，或<em>点击上传</em></div>

      </div>
      <div
        class="g-uploader--tip"
        slot="tip"
      >
        只能上传jpg/png文件，且不超过500kb!!
      </div>
    </g-uploader>
  </div>
</template>

<script>
export default {
  methods: {
    uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg
      });
    }
  }
};
</script>

<style scoped>
</style>