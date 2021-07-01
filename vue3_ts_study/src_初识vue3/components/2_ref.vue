<template>
  <h2>ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="add">+</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部传入一个配置对象
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ref",
  // 需求，实现计数器

  // vue2写法
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   add() {
  //     this.count++;
  //   },
  // },

  // vue3写法
  // setup是入口函数
  setup() {
    // 变量
    // let count = 0; // 此时数据并非响应式数据
    const count = ref(0);
    // ref作用，定义一个响应式的数据,返回的是一个Ref对象，对象中有一个value属性，一般用来定义基本类型的响应式数据
    // js中 如果要对数据进行操作，需要使用value进行数据的操作
    // html模板中   不需要使用 .value获取值
    console.log(count); //是一个对象
    const add = function() {
      console.log("add");
      count.value++;
    };
    return {
      count,
      add,
    };
  },
});
</script>
