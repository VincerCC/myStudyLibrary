<template>
  <div>
    <div>{{ state }}</div>
    <button @click="handelClick">按钮</button>
  </div>
</template>

<script>
import { toRef } from "vue";
export default {
  setup() {
    //     ref：是复制，修改响应式数据不会影响以前的数据,数据发生变化，界面就会自动更新。
    //     toRef：是引用，修改响应式数据会影响以前的数据,数据发生变化，界面就不会更新。
    // 应用场景
    //    如果想让响应式数据和以前的数据关联起来，并且更新响应式数据之后还不想更新UI，那么就可以使用toRef
    let obj = { name: "lin" }; //原始数据

    let state = toRef(obj, "name"); //代理数据

    function handelClick() {
      state.value += "mu";
      console.log("原始数据", obj); //原始数据
      console.log("代理数据", state.value); //代理数据
    }
    return { state, handelClick };
  },
};
</script>
