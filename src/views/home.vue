<template>
  <s-header title="登录页"></s-header>
  <div class="demo">热带雨林</div>
  <van-button type="primary" size="large">大号按钮</van-button>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <ul>
    <li v-for="number in numbers" :key="number">
      <h1>{{ number }}</h1>
    </li>
  </ul>
  <h1>{{ persion.name }}</h1>
  <h1>{{ greetings }}</h1>
  <button @click="increase">+1</button>
  <button @click="updateGreeting">updateTitle</button>
</template>

<script lang="ts">
import sHeader from '/@/components/s-header.vue'
import { defineComponent } from "vue";
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
  watch,
} from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  persion: { name?: string };
}
export default defineComponent({
  name: "Home",
  components: {
    sHeader
  },
  setup(){
    onMounted(() => {
      console.log("on mounted");
    });
    onUpdated(() => {
      console.log("on updated");
    });
    onRenderTriggered((event) => {
      console.log(event);
    });
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
      numbers: [1, 2, 3],
      persion: {},
    });
    data.numbers[0] = 5;
    data.persion.name = "lage";
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "hello!";
    };
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
      document.title = "update" + greetings.value + data.count;
    });
    const dataRefs = toRefs(data);
    return {
      ...dataRefs,
      greetings,
      updateGreeting,
    };
  }
})
</script>

<style lang="less" scoped>
  .demo {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
</style>
