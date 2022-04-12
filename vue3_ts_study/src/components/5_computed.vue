<template>
  <h2>computed基本使用</h2>
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
    <legend>计算属性的演示</legend>
    姓名：<input
      type="text"
      name=""
      id="3"
      placeholder="显示姓名"
      v-model="fullName1"
      disabled
    />
    姓名：<input
      type="text"
      name=""
      id="3"
      placeholder="显示姓名"
      v-model="fullName2"
    />
  </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const user = reactive({
      firstName: "独孤",
      lastName: "求败",
    });
    // 通过计算属性方式，计算全名
    // 计算属性只传入一个回调函数，表示的是get
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });

    // 计算属性传入对象，里边就需要传入get set
    const fullName2 = computed({
      get: () => {
        return user.firstName + "_" + user.lastName;
      },
      set: (val: string) => {
        console.log("设置", val);
        const newVal = val.split("_");
        user.firstName = newVal[0];
        user.lastName = newVal[1];
      },
    });
    return {
      user,
      fullName1,
      fullName2,
    };
  },
});
</script>
<style lang="" scoped></style>
