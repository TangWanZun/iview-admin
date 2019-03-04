<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="" srcset="">
    </div>
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      // 提交用户名密码
      'handleLogin',
      // 获取userInfo
      'getUserInfo',
      // 获取左侧菜单树
      'getMenuList'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
        this.getMenuList()
      })
    }
  }
}
</script>

<style>

</style>
