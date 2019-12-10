<template>
  <div class="user-profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="col-lg-3">
            <div class="content-tabs">
              <div class="profile-tabs">
                <span class="tab-title tab-title-active">基本信息</span>
                <span class="tab-title">账号密码</span>
                <span class="tab-title">邮件通知</span>
                <span class="tab-title">兑换码</span>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="common-content">
              <div class="container content-container">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.user-profile {
  min-height: calc(100vh - 263px);
  margin: 30px 0 20px;
}
.content-tabs {
  height: 100%;
  min-height: 700px;
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
}
.tab-title {
  display: block;
  margin: 30px auto;
  padding: 10px 25px;
  width: 118px;
  height: 40px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}
.tab-title-active {
  background: #efefef;
}
.common-content {
  height: 100%;
  min-height: 700px;
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
}
.content-container {
  width: 70%;
}
/* 左边表单 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 125px;
  height: 125px;
  line-height: 125px;
  text-align: center;
  border-radius: 25px;
}
.avatar {
  border-radius: 25px;
  width: 125px;
  height: 125px;
  display: block;
}
input[type="file"] {
  display: none;
}
</style>
