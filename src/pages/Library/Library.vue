<template>
  <div class="outer">
    <div class="login-item">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="id">
          <el-input type="id" v-model="ruleForm.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="登录类型" prop="login">
          <el-select type="login-id" v-model="ruleForm.login" placeholder="请选择登录类型">
            <el-option label="学生" value="student"></el-option>
            <el-option label="老师" value="teacher"></el-option>
            <el-option label="管理员" value="admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择登录方式"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        id: "",
        checkPass: "",
        login:""
      },
      rules: {
        id: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        login: [{ validator: validatePass3, trigger: "blur" }],
        
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("登录成功!");
          this.$router.push("/Library/Lib-table")
        } else {
          console.log("登录失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.login = ''
    },
  },
};
</script>

<style>
.el-form.demo-ruleForm {
  margin-left: -45px;
}
.outer {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
.login-item {
  width: 500px;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>

<style scoped>
.el-form-item__content {
  margin-left: 75px;
}
</style>