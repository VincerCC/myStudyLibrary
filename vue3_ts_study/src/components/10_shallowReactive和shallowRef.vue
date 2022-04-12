<template>
  <h2>shallowReactive</h2>
  <div>reactive->name: {{ m1 }}</div>
  <button @click="changeM1">改变m1</button>
  <hr />

  <div>shallowReactive->name: {{ m2 }}</div>
  <button @click="changeM2">改变m2</button>

  <hr />
  <div>ref->name: {{ m3 }}</div>
  <button @click="changeM3">改变m3</button>

  <hr />
  <div>shallowRef->name: {{ m4 }}</div>
  <button @click="changeM4">改变m4</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  shallowReactive,
  ref,
  shallowRef,
} from "vue";
export default defineComponent({
  name: "",
  setup() {
    const m1 = reactive({
      name: "小哆啦",
      age: 8,
      brother: {
        name: "小糕糕",
        age: 2,
        brother: {
          name: "lucy",
          brother: {
            name: "jack",
          },
        },
      },
    });
    const changeM1 = () => {
      m1.name += "@";
      m1.brother.brother.brother.name += "@";
    };
    // shallowReactive创建一个响应式代理，该代理跟踪其自身 property 的响应性，但不执行嵌套对象的深度响应式转换 (暴露原始值)。
    const m2 = shallowReactive({
      name: "小哆啦",
      age: 8,
      brother: {
        name: "小糕糕",
        age: 2,
        brother: {
          name: "lucy",
          brother: {
            name: "jack",
          },
        },
      },
    });

    const changeM2 = () => {
      m2.name += "@";
      m2.brother.brother.brother.name += "@";
    };
    const m3 = ref({
      name: "小哆啦",
      age: 8,
      brother: {
        name: "小糕糕",
        age: 2,
        brother: {
          name: "lucy",
          brother: {
            name: "jack",
          },
        },
      },
    });
    const changeM3 = () => {
      m3.value.name += "@";
      m3.value.brother.brother.brother.name += "@";
    };
    // 创建一个 ref，它跟踪自己的 .value 更改，但不会使其值成为响应式的。
    const m4 = shallowRef({
      name: "小哆啦",
      age: 8,
      brother: {
        name: "小糕糕",
        age: 2,
        brother: {
          name: "lucy",
          brother: {
            name: "jack",
          },
        },
      },
    });

    const changeM4 = () => {
      m4.value.name += "@";
      m4.value.brother.brother.brother.name += "@";
    };
    return {
      m1,
      m2,
      m3,
      m4,
      changeM1,
      changeM2,
      changeM3,
      changeM4,
    };
  },
});
</script>
<style lang="" scoped></style>
