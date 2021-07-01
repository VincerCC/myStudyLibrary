<template>
  <h2>自定义hook事件</h2>
  <h3>x：{{ x }}</h3>
  <h3>y：{{ y }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mousePosition from "@/hooks/mousePosition";
export default defineComponent({
  name: "",
  setup() {
    // 需求，页面中点击，获取点击的横纵坐标
    const { x, y } = mousePosition();
    return {
      x,
      y,
    };
  },
});
</script>
<style lang="" scoped></style>
