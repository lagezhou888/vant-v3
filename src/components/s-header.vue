<template>
  <van-nav-bar
    :title="title"
    fixed
    left-arrow
    @click-left="onClickLeft">
  </van-nav-bar>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'NICE模型'
    }
  },
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
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
