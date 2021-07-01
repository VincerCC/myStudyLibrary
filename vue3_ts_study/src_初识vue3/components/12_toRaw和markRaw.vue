<template>
  <h2>toRaw和markRaw</h2>
  <h3>state: {{ state }}</h3>
  <button @click="textToRaw">测试toRaw</button>
  <button @click="textMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from "vue";
interface userInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "",
  setup() {
    const state = reactive<userInfo>({
      name: "小哆啦",
      age: 8,
    });
    const textToRaw = () => {
      console.log("textToRaw");
      // 把代理对象变成普通对象，数据变化界面不变化
      const user = toRaw(state);
      // const user = state;
      user.name += "@";
    };
    const textMarkRaw = () => {
      console.log("textMarkRaw");
      // markRaw 标记的对象数据，从此以后都不能再成为代理对象了
      state.likes = markRaw(["吃鸡胸肉", "吃猫条"]);
      // state.likes = ["吃鸡胸肉", "吃猫条"];
      setInterval(() => {
        if (state.likes) {
          console.log("@");
          state.likes[0] += "@";
        }
      }, 1000);
    };
    return {
      state,
      textToRaw,
      textMarkRaw,
    };
  },
});
</script>
<style lang="" scoped></style>
