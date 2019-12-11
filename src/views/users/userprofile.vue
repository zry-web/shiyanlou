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
                <div class="row-wrapper">
                  <div class="form-row form-group laty">
                    <label for="avatar" class="col-form-label" id="user-avatar__BV_label">头像</label>
                    <el-upload
                      class="avatar-uploader"
                      action="http://122.51.169.217:3000/file_upload"
                      name="file"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                </div>
                <div class="row-wrapper">
                  <div class="form-row form-group laty">
                    <label for="avatar" class="col-form-label">昵称</label>
                    <el-input v-model="nickname" placeholder="用户名(必填)" class="length"></el-input>
                  </div>
                </div>
                <div class="row-wrapper">
                  <div class="form-row form-group laty">
                    <label for="avatar" class="col-form-label">我的状态</label>
                    <el-radio-group v-model="radio">
                      <el-radio :label="3" class="danxuan">在上学</el-radio>
                      <el-radio :label="6" class="danxuan">在工作</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="row-wrapper" v-show="radio == 3">
                  <div class="form-row form-group laty">
                    <label for="avatar" class="col-form-label">我的学校</label>
                    <el-input v-model="address" placeholder="填写在读学校" class="length"></el-input>
                  </div>
                </div>
                <div class="row-wrapper" v-show="radio == 6">
                  <div class="form-row form-group laty">
                    <label for="avatar" class="col-form-label">职位</label>
                    <el-select v-model="vocation" placeholder="请选择活动区域" class="length">
                      <el-option label="其他" value="其他"></el-option>
                      <el-option label="教师" value="教师"></el-option>
                      <el-option label="产品经理" value="产品经理"></el-option>
                      <el-option label="DBA工程师" value="DBA工程师"></el-option>
                      <el-option label="硬件开发工程师" value="硬件开发工程师"></el-option>
                      <el-option label="测试工程师" value="测试工程师"></el-option>
                      <el-option label="运维工程师" value="运维工程师"></el-option>
                      <el-option label="Android工程师" value="Android工程师"></el-option>
                      <el-option label="iOS研发工程师" value="iOS研发工程师"></el-option>
                      <el-option label="Linux研发工程师" value="Linux研发工程师"></el-option>
                      <el-option label="Ruby研发工程师" value="Ruby研发工程师"></el-option>
                      <el-option label="PHP研发工程师" value="PHP研发工程师"></el-option>
                      <el-option label="C/C++研发工程师" value="C/C++研发工程师"></el-option>
                      <el-option label="JAVA研发工程师" value="JAVA研发工程师"></el-option>
                      <el-option label="NodeJS研发工程师" value="NodeJS研发工程师"></el-option>
                      <el-option label="Python研发工程师" value="Python研发工程师"></el-option>
                      <el-option label="Web前端工程师" value="Web前端工程师"></el-option>
                    </el-select>
                  </div>
                </div>
                <el-button type="success" @click="revise()">保存</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { putUserData, getUserData } from "../../api/user/user";
import { get } from "http";
export default {
  data() {
    return {
      imageUrl: "",
      nickname: "",
      vocation: "其他",
      address: "",
      radio: 3
    };
  },
  computed: {
    ...mapState({
      token: state => state.login.token
    })
  },
  created() {
    getUserData({ token: this.token }).then(res => {
      this.nickname = res.data.data.nickname;
      if (res.data.data.imgsrc) {
        this.imageUrl = res.data.data.imgsrc;
      }
      this.vocation = res.data.data.vocation;
    });
    this.imageUrl =
      "https://dn-simplecloud.shiyanlou.com/gravatarim3x7WqIvPML.jpg?imageView2/1/w/200/h/200";
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
    },
    revise() {
      putUserData(this.token, {
        imgsrc: this.imageUrl,
        nickname: this.nickname,
        vocation: this.vocation
      }).then(res => {
        console.log(res);
      });
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

/* 左边表单 */
.avatar-uploader .el-upload {
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
.row-wrapper {
  margin-bottom: 20px;
}
.laty {
  display: flex;
  align-items: center;
}
.col-form-label {
  padding-right: 5px;
  padding-left: 5px;
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.5;
  margin-right: 40px;
  font-weight: normal;
  width: 80px;
}
#user-avatar__BV_label {
  font-weight: normal;
}
.length {
  width: 400px;
}
.danxuan {
  font-size: 20px;
  vertical-align: middle;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #212529;
}
.el-radio__label {
  font-size: 16px;
}
.el-radio__input.is-checked .el-radio__inner {
  color: #fff;
  border-color: #08bf91;
  background-color: #08bf91;
}
.el-input__inner:focus {
  box-shadow: none;
  border-color: #08bf91;
}
.el-select .el-input.is-focus .el-input__inner {
  box-shadow: none;
  border-color: #08bf91;
}
.el-select-dropdown__item.selected {
  color: #08bf91;
}
</style>
