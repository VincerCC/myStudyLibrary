<template>
  <!-- <lifecycle /> -->
  <!-- <setup :msg="msg" m="我没被子组件接收" @fn="fn" /> -->
  <!-- <ref /> -->
  <!-- <reactive /> -->
  <!-- <reactiveAndRef /> -->
  <!-- <watch /> -->
  <!-- <computed /> -->
  <!-- <watch /> -->
  <!-- <hook /> -->
  <!-- <toRefs /> -->
  <!-- <getEl /> -->
  <!-- <shallow /> -->
  <!-- <readOnly /> -->
  <!-- <raw /> -->
  <!-- <toRef /> -->
  <!-- <customRef /> -->
  <!-- <provideAndInject /> -->
  <teleportModel />
</template>
<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部传入一个配置对象
import { defineComponent, ref } from "vue";
// import lifecycle from "./components/lifecycle/父组件.vue";
// import setup from "./components/1_setup.vue";
// import ref from "./components/2_ref.vue";
// import reactive from "./components/3_reactive.vue";
// import reactiveAndRef from "./components/4_reactive和ref的细节问题.vue";
// import computed from "./components/5_computed.vue";
// import watch from "./components/6_watch和watchEffect.vue";
// import hook from "./components/7_自定义hook函数.vue";
// import toRefs from "./components/8_toRefs.vue";
// import getEl from "./components/9_ref获取元素.vue";
// import shallow from "./components/10_shallowReactive和shallowRef.vue";
// import readOnly from "./components/11_readonly和shallowReadonly.vue";
// import raw from "./components/12_toRaw和markRaw.vue";
// import toRef from "./components/13_toRef.vue";
// import customRef from "./components/14_customRef.vue";
// import provideAndInject from "./components/依赖and注入/main.vue";
import teleportModel from "./components/teleport瞬移组件/model.vue";

export default defineComponent({
  name: "App",
  components: {
    // ref,
    // reactive,
    // setup,
    // reactiveAndRef,
    // computed,
    // watch,
    // lifecycle,
    // hook,
    // toRefs,
    // getEl,
    // shallow,
    // readOnly,
    // raw,
    // toRef,
    // customRef,
    // provideAndInject,
    teleportModel,
  },
  setup() {
    const msg = ref('"我是来自APP，传递给setup的props"');

    const fn = function(txt: string) {
      msg.value += txt;
    };
    return {
      msg,
      fn,
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
