<template>
  <van-nav-bar
    :title="title"
    fixed
    left-arrow
    @click-left="onClickLeft">
  </van-nav-bar>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(){
    const router = useRouter()
    const onClickLeft = () => {
      router.go(-1)
    }
    return {
      onClickLeft
    }
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar {
  background: url('/@/assets/img/head.png');
  background-size: 100% 100%;
  z-index: 10;
}
</style>
