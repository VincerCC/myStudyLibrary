<template>
  <h2>toRefs</h2>
  <h3>name：{{ name }}</h3>
  <h3>age：{{ age }}</h3>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    /**
     * toRefs 把一个reactive响应式对象转换成 普通对象，该普通对象里的每个属性都是一个ref
     */
    const state = reactive({
      name: "小哆啦",
      age: 8,
    });

    // 定时器，更新数据
    setInterval(() => {
      state.name += "@";
      state.age++;
    }, 1000);
    // state在模板使用需要state.name，如果我想直接使用name
    // 需要解构，但是直接...解构会丧失响应式
    // 所以需要使用toRefs包裹，再解构，
    console.log({ ...state }); // {name: "小哆啦",age: 8,} 失去响应式
    console.log({ ...toRefs(state) }); // {name: ObjectRefImpl,age: ObjectRefImpl,} 对象每个属性都具有响应式
    return {
      // ...state,//这样解构会丧失响应式，可以使用toRefs
      ...toRefs(state),
      a: "666",
    };
  },
});
</script>
<style lang="" scoped></style>
