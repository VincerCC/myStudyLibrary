<template>
  <h2>setup</h2>
  <h3>msg：{{ msg }}</h3>
  <button @click="emitFn">通知父级改变msg</button>
</template>
<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部传入一个配置对象
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "setup",
  props: {
    msg: {
      type: String,
      default: "msg",
    },
  },
  emits: ["fn"],
  setup(props, ctx) {
    // 参数 props,是一个对象，里面有父组件向子组件传递的数据且在子组件通过props接收的所有属性
    // 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
    // 如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作。
    console.log(props);
    const { msg } = toRefs(props);
    console.log(msg);

    // 参数 ctx,是一个对象，可以使用结构 setup(props, {attrs, emit, slots})
    // ctx.attrs,对象（有父组件向子组件传递的数据且没有在子组件通过props接收的所有属性），
    console.log(ctx.attrs);
    // ctx.emit,方法（向父级分发事件），
    const emitFn = function() {
      ctx.emit("fn", "传递数据");
    };
    // ctx.slots,对象（插槽）
    console.log(ctx);
    console.log("this", this); // undefined
    // setup是在beforeCreate之前执行，在setup执行的时候组件没有创建出来，实例化对象this是不能用的
    return {
      emitFn,
    };
  },
});
</script>
