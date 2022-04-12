<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state：{{ state }}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      name: "小哆啦",
      age: 8,
      brother: {
        name: "小糕糕",
        age: 2,
      },
    });
    const state2 = readonly(state); // readonly 获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。只读代理是深层的：访问的任何嵌套 property 也是只读的。
    const state3 = shallowReadonly(state); // shallowReadonly 创建一个代理，使其自身的 property 为只读，但深层的属性还是可写的
    const update = () => {
      console.log("6");
      state2.brother.name += "@"; //Cannot assign to 'name' because it is a read-only property.
      state3.brother.name += "@";
    };
    return {
      state,
      state2,
      update,
    };
  },
});
</script>
<style lang="" scoped></style>
