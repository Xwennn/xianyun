<template>
  <!-- 登录表单 -->
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    class="form"
  >
    <el-form-item class="form-item" prop="username">
      <el-input
        v-model="form.username"
        placeholder="用户名/手机"
      />
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input
        v-model="form.password"
        placeholder="密码"
        type="password"
      />
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">
        忘记密码
      </nuxt-link>
    </p>
    <!-- 登录 -->
    <el-button
      @click="handleLoginSubmit"
      class="submit"
      type="primary"
    >
      登录
    </el-button>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据
      form: {
        username: '',
        password: ''
      },
      // 表单规则
      rules: {
        username: {
          required: true, // 是否必填
          message: '请输入用户名',
          trigger: 'blur' // 失去焦点时触发
        },
        password: {
          required: true, // 是否必填
          message: '请输入密码',
          trigger: 'blur' // 失去焦点时触发
        }
      }
    }
  },
  methods: {
    // 提交登录
    handleLoginSubmit () {
      // 验证表单
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.form)
            .then((res) => {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              setTimeout(() => {
                this.$router.replace('/')
                console.log(res)
              }, 1000)
            })
        }
      })
    }
  }

}
</script>

<style lang="less">
 .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>
