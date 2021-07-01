<template>
  <h2>reactive基本使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>兄弟：{{ user.brother.name }}</h3>
  <h3>兄弟年龄：{{ user.brother.age }}</h3>
  <h3>兄弟的零食：{{ user.brother.foods }}</h3>
  <button @click="update">修改信息</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部传入一个配置对象
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  name: "reactive",
  // 需求，显示用户的相关信息，点击按钮，更新该用户信息
  /**
   * reactive
   *  作用：定义多个数据的响应式
   *  const proxy = reactive(obj) 接收一个普通对象然后返回该对象的响应式代理器对象
   *  响应式转换是深层的，会影响对象内部所有的嵌套属性
   *
   */
  setup() {
    const o = {
      name: "哆啦",
      age: 7,
      brother: {
        name: "糕糕",
        age: 2,
        foods: ["猫罐头", "冻干"],
      },
    };
    const user = reactive(o);
    console.log(user); // 返回的是proxy代理对象
    const update = function() {
      user.name = "小哆啦";
      user.brother.name = "小糕糕";
      user.brother.foods[0] = "猫条";
    };
    return {
      user,
      update,
    };
  },
});
</script>

function beforeCreate() { throw new Error("Function not implemented."); }
