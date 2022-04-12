<template>
  <h2>watch基本使用</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      name=""
      id="1"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    />
    <br />
    <hr />
    名字：<input
      type="text"
      name=""
      id="2"
      placeholder="请输入名字"
      v-model="user.lastName"
    />
    <br />
  </fieldset>
  <fieldset>
    <legend>watch的演示</legend>
    姓名：<input
      type="text"
      name=""
      id="3"
      placeholder="显示姓名"
      v-model="fullName1"
    />
    <br />
    姓名：<input
      type="text"
      name=""
      id="4"
      placeholder="显示姓名"
      v-model="fullName2"
    />
    <br />
    姓名：<input
      type="text"
      name=""
      id="5"
      placeholder="显示姓名"
      v-model="fullName3"
    />
  </fieldset>
</template>

<script lang="ts">
import { watch, defineComponent, reactive, ref, watchEffect } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const user = reactive({
      firstName: "独孤",
      lastName: "求败",
    });
    let fullName1 = ref("");
    let fullName2 = ref("");
    let fullName3 = ref("");
    // watchEffect 和 watch 最大区别是，watchEffect初次渲染也会触发，而watch是在监听值改变后触发

    // watch，传入前两个参数（函数）
    // 参数一 是需要监听的属性，
    // 参数二 是监听属性改变后触发的 动作，参数一是新值，参数二是旧值，参数三是onInValidate，这是个函数，触发时机是在每次改变值之前，
    // 参数三 是个对象，一般用于配置行为
    // watch默认在beforeUpdate之前触发
    // watch返回一个可执行函数，执行将会停止watch

    // watchEffect 里所用到过的的所有数据（test），都会被自动监听
    // 使用变量接收watchEffect的返回值，执行即会取消监听
    // watchEffect的第一个参数，可以传入一个onInValidate，这是个函数，触发时机是在每次改变值之前
    // watchEffect默认会在组件被更新onBeforeUpdate之前调用
    // watchEffect的第二个参数，传入对象，里边有一些配置项

    // watch 监视指定的数据
    watch(
      () => {
        return user;
      },
      ({ firstName, lastName }) => {
        fullName1.value = firstName + "_" + lastName;
      },
      {
        immediate: true, // 页面加载完后自动执行一次watch
        deep: true, // 深度监视
      }
    );
    // watch(
    //   () => {
    //     // 可以同时监听多个
    //     return [user.firstName, user.lastName]; // 监视多个属性
    //   },
    //   ([newFirst, newLast], [oldFirst, oldLast]) => {
    //     fullName1.value = newFirst + "_" + newLast;
    //   },
    //   {
    //     flush: "post", //这个参数可以控制watch在onBeforeUpdate之后触发
    //   }
    // );

    // watchEffect 默认会执行一次
    watchEffect(() => {
      fullName2.value = user.firstName + "_" + user.lastName;
      fullName3.value = user.firstName + "_" + user.lastName;
    });

    watchEffect(() => {
      const names = fullName3.value.split("_");
      user.firstName = names[0];
      user.lastName = names[1];
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
<style lang="" scoped></style>
