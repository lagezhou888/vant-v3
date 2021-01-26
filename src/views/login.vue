<template>
  <div class="login">
    <s-header :title="type=='login'?'登录':'注册'"></s-header>
    <img class="logo" src="/@/assets/img/login-logo.png" alt="">
    <div v-if="type=='login'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            center
            clearable
            label="验证码"
            name="verify"
            placeholder="输入验证码"
            v-model="verify">
          <template #button>
            <vue-img-verify ref="verifyRef" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <div class="link-register" @click="toggle('register')">立即注册</div>
          <van-button round block color="#1baeae" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
            v-model="username1"
            name="username1"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password1"
            type="password"
            name="password1"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            center
            clearable
            label="验证码"
            name="verify"
            placeholder="输入验证码"
            v-model="verify"
        >
          <template #button>
            <vue-img-verify ref="verifyRef" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button round block color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import vueImgVerify from '/@/components/VueImageVerify.vue'
import sHeader from '/@/components/s-header.vue'
import { reactive, toRefs, ref } from 'vue'
import { Toast } from 'vant'
import { login, register } from '/@/api/systemInfo.js'
export default {
  name: 'login',
  setup(){
    const verifyRef = ref(null)
    // 定义响应式数据对象
    const state = reactive({
      type: 'login',
      username: '',
      password: '',
      username1: '',
      password1: '',
      imgCode: '',
      verify: ''
    })
    const toggle = (v) => {
      state.type = v
    }
    const onSubmit = async (values) => {
      state.imgCode = verifyRef.value.imgCode || ''
      if(values.verify.toLocaleLowerCase() != state.imgCode.toLocaleLowerCase()){
        Toast.fail('验证码错误')
        return
      }
      if(state.type == 'login'){
        const { data } = await login({
          'name': state.username,
          'password': state.password
        })
        // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
        window.location.href = '/'
      }else{
        await register({
          'name': state.username1,
          'password': state.password1
        })
        Toast.success('注册成功')
        state.type = 'login'
      }
    }
    return{
      // 将state上的每一个属性，都转化为ref形式的响应式数据
      ...toRefs(state),
      toggle,
      onSubmit,
      verifyRef
    }
  },
  components: {
    sHeader,
    vueImgVerify
  }
}
</script>

<style lang="less" scoped>
  .login {
    .logo {
      width: 120px;
      height: 120px;
      margin: 80px auto 20px;
      display: block;
    }
    .login-body {
      padding: 0 20px;
    }
    .login {
      .link-register {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        text-align: left;
      }
    }
    .register {
      .link-login {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        text-align: left;
      }
    }
  }
</style>
