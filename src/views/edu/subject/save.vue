<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag type="info">excel模版说明</el-tag>
        <el-tag>
          <i class="el-icon-download"/>
          <a :href="`<%= BASE_URL %>/01.xls`" target="_blank" download="01.xls">点击下载模版</a>
        </el-tag>

      </el-form-item>

      <el-form-item label="选择Excel">
        <el-upload
          ref="upload"
          :auto-upload="false"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadError"
          :disabled="importBtnDisabled"
          :limit="1"
          :action="BASE_API+'/eduservice/subject/addSubject'"
          name="file"
          accept="application/vnd.ms-excel">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            :loading="loading"
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload">上传到服务器
          </el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import teacher from '@/api/edu/teacher'
  import ImageCropper from '@/components/ImageCropper'
  import PanThumb from '@/components/PanThumb'

  export default {
    name: 'save',
    data() {
      return {
        BASE_API: process.env.VUE_APP_BASE_API, // 接口API地址
        importBtnDisabled: false, // 按钮是否禁用,
        loading: false
      }
    },
    created() {

    },
    methods: {
      submitUpload() {
        this.fileUploadBtnText = '正在上传'
        this.importBtnDisabled = true
        this.loading = true
        this.$refs.upload.submit()
      },
      fileUploadSuccess(response) {
        if (response.success === true) {
          this.fileUploadBtnText = '导入成功'
          this.loading = false
          this.$message({
            type: 'success',
            message: '导入成功'
          })
        }
      },
      fileUploadError(response) {
        this.fileUploadBtnText = '导入失败'
        this.loading = false
        this.$message({
          type: 'error',
          message: '导入失败'
        })
      }
    }
  }
</script>

<style scoped>

</style>
