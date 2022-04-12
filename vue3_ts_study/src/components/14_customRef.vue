<template>
  <h2>customRef</h2>
  <input type="text" v-model="keyWord" />
  <br />
  {{ keyWord }}
</template>

<script lang="ts">
import { defineComponent, customRef } from "vue";
// 自定义防抖函数
// 传入数据类型不确定，用泛型确定类型，delay传入时间，默认500ms
function useDebounceRef<T>(value: T, delay: number | undefined = 200) {
  // 存储定时器id
  let timeOut: number;
  return customRef((track, trigger) => {
    // track 告诉vue去追踪数据
    // trigger 告诉vue去更新界面，触发响应
    return {
      // 返回数据
      get() {
        // 告诉vue去追踪数据
        track();
        return value;
      },
      // 设置数据
      set(newVal: T) {
        clearTimeout(timeOut);
        // 开启定时器
        timeOut = setTimeout(() => {
          value = newVal;
          // 告诉vue去更新界面，触发响应
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "",
  setup() {
    /**
     * customRef 用于自定义一个ref，可以显式地控制依赖追踪和触发响应
     * 接收一个工厂函数，参数track用于追踪，trigger用户触发响应
     * 并返回一个带有get和set属性的对象
     */

    // 自定义防抖函数

    const keyWord = useDebounceRef<string>("abc", 500);

    return {
      keyWord,
    };
  },
});
</script>
<style lang="" scoped></style>
